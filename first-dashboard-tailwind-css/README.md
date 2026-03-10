# A simple Dashboard with Tailwind CSS

<!-- hide -->

By [@marcogonzalo](https://github.com/marcogonzalo) and [other contributors](https://github.com/4GeeksAcademy/first-dashboard-tailwind-css/graphs/contributors) at [4Geeks Academy](https://4geeksacademy.com/)

[![build by developers](https://img.shields.io/badge/build_by-Developers-blue)](https://4geeks.com)
[![4Geeks Academy](https://img.shields.io/twitter/follow/4geeksacademy?style=social&logo=x)](https://x.com/4geeksacademy)

🌐 _Estas instrucciones también están [disponibles en español](./README.es.md)_.

**Before you start**:

> We need you! These exercises are built and maintained in collaboration with people like you. If you find any bugs 🐞 or typos, please contribute and/or report them.

<!-- endhide -->

---

## 🎯 Your challenge

An influencer is starting to work with brands and contacts you because she needs to measure the impact of their ads and conversion. The problem is that they have multiple social media accounts (Instagram, TikTok, YouTube, etc.) and need to understand how to consolidate all this information in a reporting dashboard to answer basic questions such as:

- How much money am I generating in commissions?
- Which products are generating the most revenue?
- How well are my ads converting (conversions / reach)?
- Which platforms are generating the best return (revenue/costs)?
- What is the _engagement rate_ by platform and by product?

The influencer contacts you because they need a clear report (a dashboard) that allows them to oversee their business without getting lost in data scattered across multiple platforms. And you, although you are just getting started, want to deliver a solid, professional proposal—so your mission is to design a dashboard that consolidates information from all their social media accounts and shows them what matters most for making quick decisions.

**Business context:**

- They have 3 products they promote with three different prices (Product A: €50, Product B: €120, Product C: €80)
- For each sale generated, they receive a 15% commission

---

### What makes a dashboard "good"?

Organize the dashboard into broad blocks:

**1️⃣ Top block:** Main outcome indicators (KPI):

- **Volume:** sales, sign-ups, active users, impressions
- **Revenue:** revenue (commissions, sales), MRR (monthly recurring revenue in subscriptions), average selling price
- **Engagement:** _engagement_ rate, total interactions, conversion rate
- **Retention:** churn (churn rate), persistence, completion rate of the sales or subscription process
- **Performance:** total conversions, click-through rate (CTR), conversion rate
- **Satisfaction:** loyalty score (NPS), satisfaction score (CSAT)
- **Efficiency:** cost per outcome, margin, lead times

**2️⃣ Middle block:** "Drivers" (factors that explain the outcome):

- **Conversion** by stage (sales funnel)
- **Performance by platform** (Instagram, TikTok, YouTube, etc.)
- **Quality** (qualified lead ratio, _attendance rate_, _pass rate_)
- **Performance by product** (which product generates more commissions and better conversion)
- **Activity** (posts published, stories, reels, videos by platform)
- **Engagement** (likes, comments, shares, saves by platform)

**3️⃣ Bottom block:** Operational details (tables/lists, alerts):

- Products table: price, commissions generated, conversions, ROI per product
- Platforms table: reach, engagement, conversions, best platform by metric
- Campaigns table: dates, products promoted, results, performance
- Alerts: sharp drops in conversion, conversion spikes, performance anomalies
- Lists with filters: "top products", "top platforms", "top campaigns", "improvement opportunities"

> Example of an administrative dashboard:

![Dashboard example](images/image1.png "Dashboard example")

---

## 🌱 How to start the project

Open the template repository using a provisioning tool such as [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recommended) or clone it locally:

```text
https://github.com/4GeeksAcademy/html-hello
```

Follow the steps in [how to start a coding project](https://4geeks.com/lesson/how-to-start-a-coding-project).

💡 **Important:** Create a new repository on GitHub for your code, update the remote (`git remote set-url origin <your-new-url>`) and push your changes with `add`, `commit` and `push`.

---

## 💻 What you need to do

Create a dashboard that allows identifying at least **three KPIs**, **three drivers**, and operational details (tables/lists), as mentioned above. The dashboard must display correctly on any device (mobile, tablets, and desktops).

- [ ] First, identify the visual elements (components) you need. For example:
  - Does it need a navbar/header or sidebar?
  - How many sections does the main content split into?
  - What types of charts can you use for each indicator?
- [ ] Start with the mobile layout, which is the most constrained format, but always think about how those elements will translate to desktop.
- [ ] For charts you can use [Chart CSS](https://chartscss.org/), a CSS-only library (data can be made up; what matters is visual hierarchy and organization).

⚠️ **IMPORTANT:** In this project we only use **HTML and Tailwind CSS**. Make sure your AI Copilot **does not include more advanced technologies** (e.g. React). State this from the beginning of the work.

---

## ✅ What we will evaluate

- [ ] **Correct use of semantic HTML**
- [ ] **Appropriate use of Tailwind CSS**
- [ ] **Proper layout and grouping of visual components**
- [ ] **Responsive design implementation**

> Note: The suitability of the chosen indicators will not be taken into account.

---

## 📦 How to submit this project

You must submit a repository that includes the HTML document with the full structure and the CSS with the styles and media queries needed to adapt the dashboard to the different _breakpoints_.

---

This and many other projects are built by students as part of the [Coding Bootcamps](https://4geeksacademy.com/) at 4Geeks Academy. Find out more about the [Full-Stack Software Developer](https://4geeksacademy.com/coding-bootcamps/full-stack-developer), [Data Science & Machine Learning](https://4geeksacademy.com/coding-bootcamps/data-science-machine-learning), [Cybersecurity](https://4geeksacademy.com/coding-bootcamps/cybersecurity), and [AI Engineering](https://4geeksacademy.com/coding-bootcamps/ai-engineering) [courses](https://4geeksacademy.com/en/program-comparison).
