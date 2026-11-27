export interface ProjectItem {
    index: string;
    title: string;
    category: string;
    year: string;
    description: string;
    stack: string[];
    link: string;
    extra?: boolean;
}

export interface HobbyItem {
    index: string;
    title: string;
    detail: string;
    icon: string;
}

export interface ContactItem {
    label: string;
    value: string;
    href: string;
}

export const profile = {
    name: "CHARLES NGUYEN",
    shortTitle: "Charles Nguyen — Portfolio",
    heroLine1: "Le code ne suffit pas.",
    heroLine2: "L'architecture oui.",
    heroBio:
        "Je suis Charles Nguyen — étudiant en 3e année à Epitech. Je conçois des applications Web rapides et des systèmes d'Intelligence Artificielle pensés pour durer.",
    ctaLabel: "VOIR MES PROJETS",
    avatar: "/profile_picture.avif",
    aboutLead:
        "Étudiant en 3e année à Epitech, spécialisé en développement Web et en Intelligence Artificielle.",
    aboutBody:
        "J'aime concevoir des interfaces nettes, des architectures solides et des solutions pragmatiques. Du prototype jusqu'à la mise en production, je privilégie la clarté, la performance et le souci du détail.",
    focusAreas: [
        {
            index: "01",
            title: "Développement Web",
            description: "Interfaces réactives, architectures front-end et back-end modernes.",
        },
        {
            index: "02",
            title: "Intelligence Artificielle",
            description: "Conception d'agents, automatisation et intégration de modèles IA.",
        },
        {
            index: "03",
            title: "Ingénierie Epitech",
            description: "Rigueur algorithmique, projets en équipe et résolution de problèmes complexes.",
        },
    ],
};

export const projects: ProjectItem[] = [
    {
        index: "01",
        title: "Zappy",
        category: "IA & RÉSEAU",
        year: "2026",
        description:
            "Projet Epitech mêlant serveur réseau temps réel, interface graphique et intelligence artificielle autonome.",
        stack: ["C", "C++", "Python", "IA"],
        link: "https://github.com/Charles-n1",
    },
    {
        index: "02",
        title: "Portfolio Brutaliste",
        category: "WEB",
        year: "2026",
        description:
            "Site personnel minimaliste en noir et blanc conçu avec Astro, pensé pour la lisibilité et la rapidité.",
        stack: ["Astro", "TypeScript", "CSS"],
        link: "https://github.com/Charles-n1",
    },
    {
        index: "03",
        title: "Projet Web #03",
        category: "FULLSTACK",
        year: "2025",
        description:
            "Application web complète avec interface fluide et API structurée. Remplace ce bloc par ton projet.",
        stack: ["TypeScript", "Web", "API"],
        link: "https://github.com/Charles-n1",
    },
    {
        index: "04",
        title: "Projet IA #04",
        category: "IA",
        year: "2025",
        description:
            "Expérimentation en apprentissage automatique et traitement de données. Remplace ce bloc par ton projet.",
        stack: ["Python", "ML"],
        link: "https://github.com/Charles-n1",
    },
    {
        index: "05",
        title: "Projet #05",
        category: "SYSTÈME",
        year: "2025",
        description:
            "Projet technique additionnel affichable à la demande. Modifiable dans src/data/portfolio.ts.",
        stack: ["C++", "Linux"],
        link: "https://github.com/Charles-n1",
        extra: true,
    },
    {
        index: "06",
        title: "Projet #06",
        category: "WEB & IA",
        year: "2025",
        description:
            "Projet technique additionnel affichable à la demande. Modifiable dans src/data/portfolio.ts.",
        stack: ["Web", "IA"],
        link: "https://github.com/Charles-n1",
        extra: true,
    },
];

export const hobbies: HobbyItem[] = [
    {
        index: "01",
        title: "Vtuber",
        detail: "Création de contenu, streaming et univers créatif sur YouTube.",
        icon: "/logos/youtube.png",
    },
    {
        index: "02",
        title: "Mario Kart Speedrunner",
        detail: "Optimisation de trajectoires, précision et recherche de records sur Mario Kart 8.",
        icon: "/logos/mariokart8.png",
    },
    {
        index: "03",
        title: "Minecraft",
        detail: "Construction, systèmes techniques et exploration créative.",
        icon: "/logos/minecraft.png",
    },
];

export const contacts: ContactItem[] = [
    {
        label: "LINKEDIN",
        value: "linkedin.com/in/charles-pro-nguyen",
        href: "https://www.linkedin.com/in/charles-pro-nguyen/",
    },
    {
        label: "GITHUB",
        value: "github.com/Charles-n1",
        href: "https://github.com/Charles-n1",
    },
    {
        label: "GMAIL",
        value: "charles.pro.nguyen@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=charles.pro.nguyen@gmail.com",
    },
    {
        label: "OUTLOOK (EPITECH)",
        value: "charles.nguyen@epitech.eu",
        href: "https://outlook.office.com/mail/deeplink/compose?to=charles.nguyen@epitech.eu",
    },
];
