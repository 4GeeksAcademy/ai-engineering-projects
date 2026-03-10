# Un dashboard sencillo en Tailwind CSS

<!-- hide -->

Por [@marcogonzalo](https://github.com/marcogonzalo) y [otros contribuidores](https://github.com/4GeeksAcademy/first-dashboard-tailwind-css/graphs/contributors) en [4Geeks Academy](https://4geeksacademy.com/)

[![build by developers](https://img.shields.io/badge/build_by-Developers-blue)](https://4geeks.com)
[![4Geeks Academy](https://img.shields.io/twitter/follow/4geeksacademy?style=social&logo=x)](https://x.com/4geeksacademy)

🌐 _These guidelines are also [available in English](./README.md)_.

**Antes de empezar**:

> ¡Te necesitamos! Estos ejercicios se construyen y mantienen en colaboración con personas como tú. Si encuentras algún error 🐞 o falta de ortografía, por favor contribuye y/o repórtalos.

<!-- endhide -->

---

## 🎯 Tu reto

Una influencer que está empezando a relacionarse con marcas te contacta porque necesita medir el impacto de sus anuncios y su conversión. El problema es que tiene múltiples cuentas en redes sociales (Instagram, TikTok, YouTube, etc.) y necesita entender cómo puede consolidar toda la información en un tablero de reporte para responder preguntas básicas como:

- ¿Cuánto dinero estoy generando en comisiones?
- ¿Qué productos están generando más ingresos?
- ¿Qué tan bien convierten mis anuncios (conversiones / alcance)?
- ¿Qué plataformas están generando mejor retorno (ingresos/costes)?
- ¿Cuál es el _engagement rate_ por plataforma y por producto?

La influencer te contacta porque necesita un reporte claro (un dashboard) que le permita supervisar su negocio sin perderse en datos dispersos entre múltiples plataformas. Y tú, aunque estás empezando, quieres entregar una propuesta sólida y profesional, así que tu misión es diseñar un dashboard que consolide la información de todas sus redes sociales y le muestre lo más importante para tomar decisiones rápidas.

**Contexto del negocio:**

- Tiene 3 productos que promociona con tres precios distintos (Producto A: 50€, Producto B: 120 €, Producto C: 80 €)
- Por cada venta generada recibe una comisión del 15%

---

### ¿Qué hace que un dashboard sea “bueno”?

Organiza el dashboard en grandes bloques:

**1️⃣ Bloque superior:** Indicadores principales del resultado (KPI):

- **Volumen:** ventas, inscripciones, usuarios activos, impresiones
- **Ingresos:** revenue (comisiones, ventas), MRR (facturación mensual recurrente en suscripciones), precio medio de venta
- **Engagement:** tasa de _engagement_, interacciones totales, tasa de conversión
- **Retención:** churn (tasa de bajas), permanencia, tasa de compleción del proceso de venta o suscripción
- **Rendimiento:** conversiones totales, tasa de clics (CTR), tasa de conversión
- **Satisfacción:** puntuación de lealtad (NPS), puntuación de satisfacción (CSAT)
- **Eficiencia:** coste por resultado, margen, tiempos

**2️⃣ Bloque intermedio:** “Drivers” (factores que explican el resultado):

- **Conversión** por etapas (funnel de ventas)
- **Rendimiento por plataforma** (Instagram, TikTok, YouTube, etc.)
- **Calidad** (ratio de leads cualificados, _attendance rate_, _pass
  rate_)
- **Rendimiento por producto** (qué producto genera más comisiones y mejor conversión)
- **Actividad** (posts publicados, stories, reels, videos por plataforma)
- **Engagement** (me gusta, comentarios, compartidos, guardados por plataforma)

**3️⃣ Bloque inferior:** Detalles operacionales (tablas/listados, alertas):

- Tabla de productos: precio, comisiones generadas, conversiones, ROI por producto
- Tabla de plataformas: alcance, engagement, conversiones, mejor plataforma por métrica
- Tabla de campañas: fechas, productos promocionados, resultados, rendimiento
- Alertas: caídas fuertes en conversión, picos de conversión, anomalías en el rendimiento
- Listados con filtros: “top productos”, “top plataformas", "top campañas", "oportunidades de mejora”

> Ejemplo visual de dashboard administrativo:

![Ejemplo de dashboard](images/image1.png "Dashboard ejemplo")

---

## 🌱 Cómo iniciar el proyecto

Abre el repositorio de plantilla usando una herramienta de aprovisionamiento como [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recomendado) o clónalo en local:

```text
https://github.com/4GeeksAcademy/html-hello
```

Sigue los pasos en [cómo comenzar un proyecto de codificación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).

💡 **Importante:** Crea un nuevo repositorio en GitHub para tu código, actualiza el remoto (`git remote set-url origin <tu-nueva-url>`) y sube los cambios con `add`, `commit` y `push`.

---

## 💻 Qué debes hacer

Crea un dashboard que permita identificar al menos **tres KPIs**, **tres drivers** y detalles operacionales (tablas/listados), como los mencionados previamente. El dashboard debe verse correctamente en cualquier dispositivo (móviles, tabletas y computadoras).

- [ ]Primero, identifica los elementos visuales (componentes) necesarios. Por ejemplo:
  - ¿Requiere navbar/cabecera o sidebar?
  - ¿En cuántas secciones se divide el contenido principal?
  - ¿Qué tipos de gráficos se pueden usar para cada indicador?
- [ ] Empieza por el diseño móvil, que es el formato más restringido, pero pensando siempre en cómo se trasladarán esos elementos a pantalla de escritorio.
- [ ] Para gráficos puedes utilizar [Chart CSS](https://chartscss.org/), una biblioteca solo de CSS (los datos pueden ser inventados; lo importante es la jerarquía visual y la organización).

⚠️ **IMPORTANTE:** En este proyecto solo usaremos **HTML y Tailwind CSS**. Asegúrate de que tu IA Copiloto **no incluya tecnologías más avanzadas** (por ejemplo, React). Indícalo desde el inicio del trabajo.

---

## ✅ Qué vamos a evaluar

- [ ] **Uso correcto de de HTML semántico**
- [ ] **Uso adecuado de Tailwind CSS**
- [ ] **Correcta diagramación y agrupación de componentes visuales**
- [ ] **Aplicación de diseño responsivo**

> Nota: No se tendrá en cuenta la idoneidad de los indicadores escogidos.

---

## 📦 Cómo entregar este proyecto

Debes entregar un repositorio que incluya el documento HTML con toda la estructura y el CSS con los estilos y las media queries necesarias para adaptar el dashboard a los distintos _breakpoints_.

---

Este y muchos otros proyectos son construidos por estudiantes como parte de los [Coding Bootcamps](https://4geeksacademy.com/) de 4Geeks Academy. Encuentra más acerca de los [cursos](https://4geeksacademy.com/es/comparar-programas) de [Full-Stack Software Developer](https://4geeksacademy.com/es/programas-de-carrera/desarrollo-full-stack), [Data Science & Machine Learning](https://4geeksacademy.com/en/career-programs/data-science-ml), [Ciberseguridad](https://4geeksacademy.com/es/programas-de-carrera/ciberseguridad) e [Ingeniería de IA](https://4geeksacademy.com/es/programas-de-carrera/ingenieria-ia).
