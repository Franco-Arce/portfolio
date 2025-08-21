/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
};

// SEO Related settings
const seo = {
  title: "Portafolio de Franco Arce",
  description:
    "Analista de Datos. Dashboards en Power BI, ETL con Python/SQL, KPIs y automatizaciones orientadas al negocio.",
  og: {
    title: "Portafolio de Franco Arce",
    type: "website",
    url: "https://tu-usuario.github.io/",
  },
};

// Home Page
const greeting = {
  title: "Franco Arce",
  logo_name: "FrancoArce",
  nickname: "Analista de Datos",
  subTitle:
    "Analista de Datos con experiencia en proyectos internacionales. Dashboards en Power BI, procesos ETL en Python/SQL, KPIs y visualizaciones para decisiones estratégicas.",
  resumeLink:
    "https://drive.google.com/file/d/1Zq3POBUvJNx5RPx79Bwseclvsxscl56_/view?usp=sharing",
  portfolio_repository: "https://github.com/franco-arce",
  githubProfile: "https://github.com/franco-arce",
};

// Social Media
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/franco-arce",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/franco-arce-37a83a220/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:francogonzaloarce@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/franc07_",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

// Skills
const skills = {
  data: [
    {
      title: "Dashboards & Visualizaciones",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Diseño y optimización de dashboards en Power BI",
        "⚡ Visualizaciones claras y accionables para negocio",
        "⚡ Modelado de datos, medidas DAX y storytelling",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { color: "#217346" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
      ],
    },
    {
      title: "KPIs, ETL & Análisis Técnico",
      fileName: "FullStackImg",
      skills: [
        "⚡ Definición de KPIs alineados a objetivos",
        "⚡ ETL con Python y SQL (limpieza, transformación, integración)",
        "⚡ Consultas y optimización en MySQL / SQL Server",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: { color: "#CC2927" },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: { color: "#F37626" },
        },
      ],
    },
    {
      title: "Automatizaciones & Nube",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Automatización de tareas y pipelines de datos",
        "⚡ Uso de la nube (AWS/Azure) para BDD y despliegues",
        "⚡ Integraciones con APIs/servicios (Streamlit, GitHub)",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0089D6" },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: { color: "#FF4B4B" },
        },
      ],
    },
  ],
};

// Education
const competitiveSites = { competitiveSites: [] };

const degrees = {
  degrees: [
    {
      title: "Instituto Superior Politécnico Córdoba (ISPC)",
      subtitle:
        "Ciencia de Datos e Inteligencia Artificial – Cursando 3er Trimestre",
      logo_path: "logo_ispc.png",
      alt_name: "ISPC",
      duration: "2025",
      descriptions: ["Plan orientado a análisis de datos, ML e IA aplicada."],
      website_link: "https://ispc.edu.ar/",
    },
    {
      title: "Instituto Superior Politécnico Córdoba (ISPC)",
      subtitle: "Desarrollo de Software – Cursando 5to Trimestre",
      logo_path: "logo_ispc.png",
      alt_name: "ISPC",
      duration: "2025",
      descriptions: [
        "Desarrollo con Python g- Angular - FireBase, Bases de Datos, Diseño y buenas prácticas.",
      ],
      website_link: "https://ispc.edu.ar/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Big Data / Data Analytics",
      subtitle: "Codo a Codo 4.0 (2024)",
      logo_path: "logo_cac.png",
      certificate_link: "https://www.linkedin.com/in/franco-arce-37a83a220/",
      alt_name: "Codo a Codo",
      color_code: "#2AAFED",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle: "Google / Coursera (2024)",
      logo_path: "logo_google.png",
      certificate_link: "https://www.linkedin.com/in/franco-arce-37a83a220/",
      alt_name: "Google",
      color_code: "#47A141",
    },
    {
      title: "Fundamentos del Desarrollo Web",
      subtitle: "Codo a Codo (2024)",
      logo_path: "logo_cac.png",
      certificate_link: "https://www.linkedin.com/in/franco-arce-37a83a220/",
      alt_name: "Codo a Codo",
      color_code: "#FF5733",
    },
    {
      title: "Certificación Inglés B2",
      subtitle: "Upper Intermediate (2024)",
      logo_path: "logo_google.png", // antes fallaba con logo_ingles.png
      certificate_link: "https://www.linkedin.com/in/franco-arce-37a83a220/",
      alt_name: "Inglés",
      color_code: "#1E90FF",
    },
  ],
};

// Experience
const experience = {
  title: "Experiencia",
  subtitle: "Trabajo y Proyectos",
  description:
    "Dashboards, pipelines de datos, automatizaciones y consultoría con foco en decisiones del negocio.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trabajo",
      work: true,
      experiences: [
        {
          title: "Data Analyst",
          company: "Grupo Nods",
          company_url: "https://gruponods.com/",
          logo_path: "logo_grupo_nods.png",
          duration: "Ago 2025 - Actualidad",
          location: "Córdoba, Argentina",
          description:
            "Dashboards Power BI, pipelines y automatizaciones. Consultoría con instituciones académicas; diseño de KPIs, integración de fuentes y visualizaciones.",
          color: "#0A66C2",
        },
        {
          title: "IT Help Desk",
          company: "CYC Computación (PPP)",
          company_url: "https://www.cycnova.com.ar/",
          logo_path: "logo_cyc.png",
          duration: "Feb 2025 - Ago 2025",
          location: "Córdoba, Argentina",
          description:
            "Soporte técnico, gestión de datos, instalaciones y backups. Resolución de incidencias y mejoras de procesos.",
          color: "#217346",
        },
        {
          title: "DataChef – No Country",
          company: "Plataforma de Análisis para Restaurantes",
          company_url: "https://lnkd.in/dZ3hQEx8",
          logo_path: "logo_google.png",
          duration: "2025",
          location: "Remoto",
          description:
            "Datos reales (Papa’s Shop, Chile). API TOTEAT → Amazon RDS → Power BI; series temporales y modelos predictivos; demo en Streamlit.",
          color: "#FF4B4B",
        },
      ],
    },
    {
      title: "Proyectos & Freelance",
      experiences: [
        {
          title: "TP Final – Codo a Codo 4.0 (Big Data / Analytics)",
          company: "Construction Materials Megacorp (LATAM)",
          company_url: "https://www.buenosaires.gob.ar/educacion/codo-codo",
          logo_path: "logo_ispc.png",
          duration: "May–Jul 2024",
          location: "Looker Studio + Colab",
          description:
            "Informe profesional: limpieza/modelado (Pandas/NumPy), exploración (Matplotlib/Seaborn), visualización (Looker Studio). Integración de múltiples fuentes (transactions.csv, distributors, locations/countries SQL, exports/distributors_profiles, locations_profiles). Diagnóstico y justificación analítica de estrategia comercial.",
          color: "#20BEFF",
        },
        {
          title: "Capstone – Google Data Analytics",
          company: "Google / Coursera",
          company_url:
            "https://coursera.org/share/b844fdaf0343016af1e9948d98a0ff76",
          logo_path: "logo_google.png",
          duration: "2024",
          location: "R + SQL + Viz",
          description:
            "Proyecto final del certificado: pipeline analítico completo (preguntar–preparar–procesar–analizar–compartir–actuar). Documentación y visualizaciones listas para stakeholders.",
          color: "#34A853",
        },

        {
          title: "Copa América 2024 – Dashboard Power BI",
          company: "Proyecto Personal",
          company_url: "https://www.linkedin.com/in/franco-arce-37a83a220/",
          logo_path: "foto_franco.png",
          duration: "2024",
          location: "Remoto",
          description:
            "Dashboard interactivo con estadísticas de jugadores y selecciones (goles, asistencias, rendimiento). Filtros por jugador/equipo y comparativas. Foco en UX y storytelling.",
          color: "#F2C811",
        },
        {
          title: "Tarantino – Análisis Filmografia (Power BI)",
          company: "Proyecto Personal",
          company_url: "https://www.linkedin.com/in/franco-arce-37a83a220/",
          logo_path: "foto_franco.png",
          duration: "2024",
          location: "Remoto",
          description:
            "Análisis de lenguaje y violencia en films de Tarantino. Conteos, picos por minuto, proporciones e insights por película. Visualizaciones personalizadas.",
          color: "#6C63FF",
        },
        {
          title: "Sistema de Gestión de Ventas y Stock",
          company: "Proyecto Personal",
          company_url: "https://lnkd.in/dvjyjnas",
          logo_path: "foto_franco.png",
          duration: "2023 - 2024",
          location: "Escritorio (.NET + SQL Server)",
          description:
            "C# Windows Forms .NET + SQL Server. Ventas (alta/mod/cancel), ticket 88mm, productos, stock mínimo, usuarios, cuentas corrientes, reportes (top productos, recaudación, ganancias por rubro/marca, ventas por empleado).",
          color: "#CC2927",
        },

        {
          title: "Gestión de Finanzas Personales (Excel + Macros)",
          company: "Proyecto Personal",
          company_url: "https://www.linkedin.com/in/franco-arce-37a83a220/",
          logo_path: "foto_franco.png",
          duration: "2024",
          location: "Excel / VBA",
          description:
            "Modelo de control financiero con registro de ingresos/egresos, categorías, dashboard mensual, alertas y automatizaciones con macros (VBA).",
          color: "#217346",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Proyectos",
  description:
    "Proyectos personales y de práctica: dashboards en Power BI, análisis de datos y desarrollos de software.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publicaciones",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = { data: [] };

const projectCards = [];

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contactemos",
    profile_image_path: "contactMail.png",
    description:
      "Disponible para roles de Analista de Datos y proyectos Freelance. Contáctame por Correo o LinkedIn.",
  },
  blogSection: {
    title: "Linkedin",
    subtitle: "Comparto proyectos, tableros y aprendizajes.",
    link: "https://www.linkedin.com/in/franco-arce-37a83a220/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Ubicación",
    subtitle: "Córdoba, Argentina",
    locality: "Córdoba",
    country: "Argentina",
    region: "Córdoba",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/",
  },
  phoneSection: {
    title: "Teléfono",
    subtitle: "+54 3516009843",
  },
};

// Ocultar sección Open Source
const openSource = { showGithubProfile: false };

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  projectCards,
  contactPageData,
  openSource,
};
