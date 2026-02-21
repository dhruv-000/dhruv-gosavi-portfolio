const BASE_URL = import.meta.env.BASE_URL || "/";

// ─── Navigation Links ────────────────────────────────────────────
export const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export const skillCategories = [
    {
        category: "Programming Languages",
        emoji: "🖥️",
        color: "#3572A5",
        skills: ["Python", "Java", "JavaScript", "R"],
    },
    {
        category: "Frontend Development",
        emoji: "🌐",
        color: "#61dafb",
        skills: ["HTML", "CSS", "Bootstrap", "React"],
    },
    {
        category: "Backend Development",
        emoji: "🗄️",
        color: "#68a063",
        skills: ["Node.js", "Express.js", "MongoDB", "SQL"],
    },
    {
        category: "Data Science & AI",
        emoji: "📊",
        color: "#f2c811",
        skills: ["Data Science", "Machine Learning", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
    },
    {
        category: "Core Computer Science",
        emoji: "🧠",
        color: "#915EFF",
        skills: ["DSA (Data Structures & Algorithms)", "OOP (Object-Oriented Programming)", "DBMS", "OS (Operating Systems)", "CN (Computer Networks)"],
    },
];

// ─── Projects ────────────────────────────────────────────────────
export const projects = [
    {
        id: 1,
        title: "Modern E-Commerce Web App",
        description:
            "A fully responsive modern e-commerce frontend featuring dynamic product filtering, sorting, cart and wishlist functionality with persistent local storage, designed to simulate a real-world online shopping experience.",
        tags: ["React", "Vite", "Tailwind CSS", "React Router", "Context API", "localStorage", "Framer Motion"],
        gradient: "from-cyan-500 to-blue-600",
        github: "https://github.com/dhruv-000/dhruvstore-ecommerce",
        live: "https://dhruv-000.github.io/dhruvstore-ecommerce/",
        emoji: "\u{1F6D2}",
    },
    {
        id: 2,
        title: "FocusFlow - Productivity Web App",
        description:
            "An all-in-one productivity dashboard that combines task management, habit tracking, Pomodoro timer, and study planning with real-time updates and client-side data persistence.",
        tags: ["React", "Vite", "Tailwind CSS", "React Router", "Context API", "localStorage"],
        gradient: "from-emerald-500 to-teal-600",
        github: "https://github.com/dhruv-000/focusflow-productivity",
        live: "https://dhruv-000.github.io/focusflow-productivity/",
        emoji: "\u{1F3AF}",
    },
    {
        id: 3,
        title: "Resume Builder Pro",
        description:
            "A multi-template static resume builder allowing users to create, customize, preview, and export professional resumes with theme customization, photo upload, and client-side PDF generation.",
        tags: ["React", "Vite", "Tailwind CSS", "Context API", "localStorage", "html2pdf.js"],
        gradient: "from-orange-500 to-rose-600",
        github: "https://github.com/dhruv-000/resume-builder",
        live: "https://dhruv-000.github.io/resume-builder/",
        emoji: "\u{1F4C4}",
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description:
            "A modern, animated real-time weather dashboard featuring city search, geolocation detection, dynamic weather-based backgrounds, interactive hourly and 7-day forecasts, and a responsive glassmorphism UI built as a fully static web application.",
        tags: ["React", "Vite", "Tailwind CSS", "Open-Meteo API", "Chart.js", "Geolocation API", "Framer Motion"],
        gradient: "from-sky-500 to-indigo-600",
        github: "https://github.com/dhruv-000/skycast-dashboard",
        live: "https://dhruv-000.github.io/skycast-dashboard/",
        emoji: "\u{1F326}",
    },
];

// ─── Experience ───────────────────────────────────────────────────
export const experience = [
    {
        role: "Data Analytics Intern",
        company: "SCOOPEN School of Program Engineering",
        location: "Pune, India",
        type: "Internship",
        points: [
            "Created interactive and insightful Power BI dashboards to visualize complex datasets for stakeholders.",
            "Utilized SQL for data extraction, transformation, and cleaning, ensuring data integrity for analysis.",
            "Collaborated on reporting workflows, reducing manual assessment time through automated visualizations.",
        ],
        certificateUrl: `${BASE_URL}certificate.pdf`,
        emoji: "\u{1F4CA}",
    },
    {
        role: "Web Development Intern",
        company: "Techbizz Integrators Private Limited",
        location: "Ghaziabad, Uttar Pradesh",
        type: "Internship",
        points: [
            "Developed responsive website sections and reusable UI components with modern frontend practices.",
            "Collaborated with the development team to implement feature updates and resolve UI issues.",
            "Improved page usability across devices through testing, debugging, and performance-focused refinements.",
        ],
        certificateUrl: `${BASE_URL}techbizz-internship-certificate.pdf`,
        emoji: "\u{1F4BB}",
    },
];

// ─── Education ───────────────────────────────────────────────────
export const education = [
    {
        degree: "Bachelor of Technology — AI & Data Science",
        institution: "Zeal College of Engineering and Research, Pune",
        year: "2024 – 2028",
        score: "CGPA: 8.98 (FY)",
        emoji: "🎓",
    },
    {
        degree: "Secondary School Certificate (10th)",
        institution: "Maharashtra State Board",
        year: "2022",
        score: "87.00%",
        emoji: "🏫",
    },
];

// ─── Social Links ─────────────────────────────────────────────────
export const socials = [
    { name: "GitHub", url: "https://github.com/dhruv-000", icon: "🐙" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dhruv-gosavi-951607332/", icon: "💼" },
];

