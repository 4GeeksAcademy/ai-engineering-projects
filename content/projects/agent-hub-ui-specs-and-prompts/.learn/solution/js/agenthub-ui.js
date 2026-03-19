/**
 * Shared UI helpers for the AgentHub admin panel prototype.
 * - Keeps JS out of HTML inline <script> blocks.
 * - Uses plain DOM APIs (vanilla JS).
 */
(function () {
  const dropIdSelector = '[id^="drop-"]';

  function hideAllIdDropdowns() {
    document.querySelectorAll(dropIdSelector).forEach((el) => {
      el.classList.add("hidden");
    });
  }

  function hideAllErrorDropdowns() {
    // Error Log uses: <div class="relative dropdown-container ..."> <button ...> <div class="hidden ..."></div>
    document.querySelectorAll(".dropdown-container div").forEach((el) => {
      el.classList.add("hidden");
    });
  }

  function hideAllDropdowns() {
    hideAllIdDropdowns();
    hideAllErrorDropdowns();
  }

  // Contracts/User Management/Agent Management dropdowns
  // - Contracts uses: toggleDropdown(event, 'drop-1')
  // - User Management uses: toggleDropdown('drop-1')
  // - Error Log uses: toggleDropdown(this) (button element)
  window.toggleDropdown = function (arg1, arg2) {
    let dropdown = null;
    if (
      arg1 &&
      typeof arg1 === "object" &&
      typeof arg1.stopPropagation === "function"
    ) {
      // toggleDropdown(event, 'drop-1')
      arg1.stopPropagation();
      dropdown = document.getElementById(arg2);
    } else if (typeof arg1 === "string") {
      // toggleDropdown('drop-1')
      dropdown = document.getElementById(arg1);
    } else if (arg1 instanceof Element) {
      // toggleDropdown(button)
      dropdown = arg1.nextElementSibling;
    }

    if (!dropdown) return;

    const isHidden = dropdown.classList.contains("hidden");
    hideAllDropdowns();

    if (isHidden) dropdown.classList.remove("hidden");
  };

  // Modals: the same function name is used across pages with different arg counts.
  // - Contracts: openModal('modal-1')
  // - User Management: openModal(name, id, joined, spend, plan, status)
  // - Error Log: openModal(agentName, errorCode)
  window.openModal = function (...args) {
    // Contracts / generic id-based modals
    if (args.length === 1 && typeof args[0] === "string") {
      const modal = document.getElementById(args[0]);
      if (!modal) return;

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
      hideAllDropdowns();
      return;
    }

    // Error Log modal
    if (args.length === 2) {
      const agentName = args[0];
      const errorCode = args[1];

      const modal = document.getElementById("detailModal");
      if (!modal) return;

      const agentEl = document.getElementById("modalAgentName");
      const codeEl = document.getElementById("modalErrorCode");
      if (agentEl) agentEl.textContent = agentName;
      if (codeEl) codeEl.textContent = errorCode;

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
      hideAllDropdowns();
      return;
    }

    // User Management modal
    if (args.length === 6) {
      const [name, id, joined, spend, plan, status] = args;
      const modal = document.getElementById("userModal");
      if (!modal) return;

      const setText = (elId, value) => {
        const el = document.getElementById(elId);
        if (el) el.textContent = value;
      };

      setText("modalName", name);
      setText("modalId", id);
      setText("modalJoined", joined);
      setText("modalSpend", spend);
      setText("modalPlan", plan);

      const badge = document.getElementById("modalStatusBadge");
      if (badge) {
        badge.textContent = status;
        if (status === "Active") {
          badge.className =
            "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20";
        } else {
          badge.className =
            "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-500/10 text-slate-500 border border-slate-500/20";
        }
      }

      const avatar = document.getElementById("modalAvatar");
      if (avatar) {
        const seed = String(name || "").split(" ")[0] || "admin";
        avatar.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}`;
      }

      modal.classList.remove("hidden");
      hideAllDropdowns();
      return;
    }
  };

  window.closeModal = function (modalId) {
    // Contracts: closeModal('modal-1')
    if (typeof modalId === "string") {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
      document.body.style.overflow = "";
      return;
    }

    // Agent Management: closeModal() -> config-modal
    const configModal = document.getElementById("config-modal");
    if (configModal) {
      configModal.classList.add("hidden");
      configModal.classList.remove("flex");
      document.body.style.overflow = "";
      return;
    }

    // User Management: closeModal() -> userModal
    const userModal = document.getElementById("userModal");
    if (userModal) {
      userModal.classList.add("hidden");
      document.body.style.overflow = "";
      return;
    }

    // Error Log: closeModal() -> detailModal
    const detailModal = document.getElementById("detailModal");
    if (detailModal) {
      detailModal.classList.add("hidden");
      detailModal.classList.remove("flex");
      document.body.style.overflow = "";
    }
  };

  // Skills Catalog uses: toggleModal('skill-detail-modal')
  window.toggleModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const isHidden = modal.classList.contains("hidden");
    if (isHidden) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    } else {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  };

  // Agent Management Skills accordion
  window.toggleSkills = function (contentId, btn) {
    const content = document.getElementById(contentId);
    if (!content) return;

    const icon =
      btn && btn.querySelector
        ? btn.querySelector(".material-symbols-outlined")
        : null;
    const isCollapsed = content.classList.contains("max-h-0");

    if (isCollapsed) {
      content.classList.remove("max-h-0");
      content.classList.add("max-h-[260px]");
      if (icon) icon.classList.add("rotate-180");
    } else {
      content.classList.add("max-h-0");
      content.classList.remove("max-h-[260px]");
      if (icon) icon.classList.remove("rotate-180");
    }
  };

  window.openConfigure = function (name, prompt) {
    const modal = document.getElementById("config-modal");
    if (!modal) return;

    const title = document.getElementById("modal-title");
    const promptArea = document.getElementById("modal-prompt");
    if (title) title.textContent = `Configure Agent: ${name}`;
    if (promptArea) promptArea.value = prompt || "";

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    hideAllDropdowns();
  };

  // Close dropdowns on outside click.
  // - Error Log uses .dropdown-container
  // - Other pages use id^=drop- and wrapping .relative
  document.addEventListener("click", (e) => {
    const target = e.target;

    const inErrorDropdown = target.closest
      ? target.closest(".dropdown-container")
      : null;
    if (!inErrorDropdown) hideAllErrorDropdowns();

    const inRelative = target.closest ? target.closest(".relative") : null;
    if (!inRelative) hideAllIdDropdowns();
  });

  // Skills Catalog search (vanilla, no inline styles)
  function initSkillsSearch() {
    // Only initialize on Skills Catalog page.
    const input = document.querySelector(
      'input[placeholder*="Search catalog"]',
    );
    if (!input) return;

    const cards = document.querySelectorAll("main .grid > div");
    if (!cards || cards.length === 0) return;

    const normalize = (s) =>
      String(s || "")
        .toLowerCase()
        .trim();

    input.addEventListener("input", (e) => {
      const query = normalize(e.target.value);
      cards.forEach((card) => {
        const h4 = card.querySelector("h4");
        const title = normalize(h4 ? h4.textContent : "");
        const shouldShow = !query || title.includes(query);
        card.classList.toggle("hidden", !shouldShow);
      });
    });
  }

  initSkillsSearch();
})();
