export interface InternshipItem {
    index: string;
    organization: string;
    role: string;
    theme: string;
    period: string;
    summary: string;
    highlights: string[];
    stack: string[];
}

export interface ProjectItem {
    index: string;
    title: string;
    context: string;
    category: string;
    year: string;
    description: string;
    highlights: string[];
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
    avatar: "/pp.png",
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

export const internships: InternshipItem[] = [
    {
        index: "01",
        organization: "Laboratoire EMC — Université Lyon 2",
        role: "Stage Développeur Python / Flask",
        theme: "STAGE · PYTHON / FLASK",
        period: "2025–2026",
        summary: "Développement d'un prototype d'API de gestion du matériel informatique.",
        highlights: [
            "Migration d'un prototype en terminal vers Flask (routes et interface HTML)",
            "Base de données SQLite avec insertion, lecture et suppression",
            "Filtres : tri alphabétique, tri par date et filtre par valeur",
            "Gestion des erreurs, des entrées et des sorties",
        ],
        stack: ["Python", "Flask", "SQLite", "HTML"],
    },
    {
        index: "02",
        organization: "Laboratoire CRPPC — Université Lyon 2",
        role: "Stage Automatisation VBA / Excel",
        theme: "STAGE · VBA / EXCEL",
        period: "2025–2026",
        summary: "Préparation de la base documentaire du laboratoire à sa mise en ligne.",
        highlights: [
            "Programme VBA de cotation automatique pour plus de 2 800 documents",
            "Uniformisation des tableaux Excel (ordre des colonnes, colonnes manquantes)",
            "Rédaction d'une norme d'insertion des données pour les futurs bénévoles",
            "Accueil des étudiants et des chercheurs, formation de bénévoles",
        ],
        stack: ["VBA", "Excel", "Documentation"],
    },
];

export const projects: ProjectItem[] = [
    {
        index: "01",
        title: "Dashboard",
        context: "Projet à 2",
        category: "WEB FULL-STACK",
        year: "2026–2027",
        description:
            "Application web full-stack de tableau de bord à widgets personnalisables.",
        highlights: [
            "Frontend React : grille personnalisable avec widgets déplaçables et redimensionnables",
            "API REST FastAPI + PostgreSQL avec authentification JWT",
            "Intégration de services tiers : Discord (OAuth2), Steam (OpenID), météo",
            "Conteneurisation avec Docker Compose",
        ],
        stack: ["React", "Python", "FastAPI", "PostgreSQL", "Docker"],
        link: "https://github.com/Charles-n1/Dashboard",
    },
    {
        index: "02",
        title: "Charlie (Assistant de bureau IA)",
        context: "Projet seul · En cours",
        category: "IA LOCALE",
        year: "2026–2027",
        description:
            "Assistant animé qui tourne entièrement en local sur le PC.",
        highlights: [
            "Interface PyQt6 : personnage animé (états repos, réflexion, parole) sur fond transparent",
            "IA locale avec Ollama (modèle Qwen) pour les réponses, sans passer par une API cloud",
            "Architecture modulaire (entrées, sorties, sprites, sons)",
            "Installation sous Linux et Windows",
        ],
        stack: ["Python", "PyQt6", "Ollama", "Qwen"],
        link: "https://github.com/Charles-n1/Charlie",
    },
    {
        index: "03",
        title: "Star Trek – Lunar Lander RL",
        context: "Projet seul",
        category: "REINFORCEMENT LEARNING",
        year: "2025–2026",
        description:
            "Entraînement d'un agent de reinforcement learning pour atterrir sur la Lune.",
        highlights: [
            "Implémentation d'un agent DQN (MLP 2-3 couches ReLU, replay buffer, target network)",
            "Modélisation de la boucle RL complète : état 8D → action discrète → reward shaping",
            "Reproductibilité sur ≥ 5 seeds avec intervalles de confiance à 95 %",
            "Tracking des métriques (courbes de retour, epsilon, loss)",
        ],
        stack: ["Python", "DQN", "Reinforcement Learning"],
        link: "https://github.com/Charles-n1/Start-trek",
    },
    {
        index: "04",
        title: "API Rest",
        context: "Projet seul",
        category: "BACKEND / API",
        year: "2025–2026",
        description:
            "Développement d'APIs et de systèmes de gestion de données.",
        highlights: [
            "Implémentation complète CRUD (Create, Read, Update, Delete) avec gestion d'erreurs",
            "Développement de routes HTTP et interface web responsive (HTML / Flask templates)",
            "Architecture client-serveur avec système de filtres avancés (tri alphabétique, dates, recherche)",
            "Migration progressive d'une interface CLI vers une application web full-stack",
        ],
        stack: ["Python", "Flask", "SQLite", "HTML/CSS"],
        link: "https://github.com/Charles-n1/API-Flask-Sqlite-Python",
    },
    {
        index: "05",
        title: "Zappy (Jeu stratégique multijoueur)",
        context: "Projet à 6",
        category: "RÉSEAU & IA",
        year: "2025–2026",
        description:
            "Développement d'un jeu réseau complet multijoueur avec IA autonomes.",
        highlights: [
            "Serveur (C) : architecture mono-thread avec select, gestion de monde partagé",
            "Client graphique (C++) : visualisation 2D/3D temps réel avec SFML",
            "Client IA : développement de bots autonomes avec stratégies d'évolution",
            "Coordination en équipe sur un projet technique de grande envergure",
        ],
        stack: ["C", "C++", "SFML", "TCP", "IA"],
        link: "https://github.com/Charles-n1",
        extra: true,
    },
    {
        index: "06",
        title: "MyTeams",
        context: "Projet à 3",
        category: "RÉSEAU TCP",
        year: "2025–2026",
        description:
            "Application de communication collaborative client-serveur en C.",
        highlights: [
            "Architecture réseau TCP avec multiplexage I/O (select) pour gestion multi-clients simultanés",
            "Conception et implémentation d'un protocole de communication client-serveur",
            "Implémentation CLI client avec système de commandes contextuelles",
            "Gestion de la sécurité applicative (authentification, contrôle d'accès aux ressources)",
        ],
        stack: ["C", "TCP/IP", "Select", "CLI"],
        link: "https://github.com/Charles-n1/MyTeams",
        extra: true,
    },
    {
        index: "07",
        title: "Arcade (Plateforme de jeux modulaire)",
        context: "Projet à 3",
        category: "ARCHITECTURE C++",
        year: "2025–2026",
        description:
            "Plateforme de jeux rétro modulaire avec chargement dynamique de librairies graphiques.",
        highlights: [
            "Architecture orientée objet avec système de plugins dynamiques (dlopen/dlsym)",
            "Abstraction multi-librairies graphiques via interfaces génériques",
            "Design pattern Strategy pour interchangeabilité à l'exécution (runtime)",
            "Séparation logique/rendu (architecture MVC-like)",
        ],
        stack: ["C++", "dlopen", "Design Patterns", "OOP"],
        link: "https://github.com/Charles-n1/Arcade",
        extra: true,
    },
    {
        index: "08",
        title: "Raytracer",
        context: "Projet Epitech",
        category: "RENDU 3D",
        year: "2025–2026",
        description:
            "Moteur de rendu 3D par lancer de rayons en C++ avec gestion des lumières et matériaux.",
        highlights: [
            "Calcul d'intersections rayon-primitives (sphères, plans, cylindres, cônes)",
            "Gestion des lumières, ombres portées et réflexions",
            "Architecture orientée objet extensible en C++",
            "Chargement dynamique de scènes depuis fichiers de configuration",
        ],
        stack: ["C++", "3D", "Mathématiques"],
        link: "https://github.com/Charles-n1/Raytracer",
        extra: true,
    },
    {
        index: "09",
        title: "Wolf3D",
        context: "Projet Epitech",
        category: "RAYCASTING",
        year: "2025",
        description:
            "Jeu 3D temps réel inspiré de Wolfenstein 3D développé en C par raycasting.",
        highlights: [
            "Moteur de raycasting temps réel en C",
            "Déplacements, collisions et rendu texturé des murs",
            "Gestion de la boucle de jeu et des entrées utilisateur",
        ],
        stack: ["C", "CSFML", "Raycasting"],
        link: "https://github.com/Charles-n1/Wolf3D",
        extra: true,
    },
    {
        index: "10",
        title: "Corewar",
        context: "Projet Epitech",
        category: "VM & ASSEMBLEUR",
        year: "2025",
        description:
            "Machine virtuelle en C faisant s'affronter des champions écrits en assembleur.",
        highlights: [
            "Conception d'une machine virtuelle exécutant du bytecode en mémoire circulaire",
            "Implémentation des instructions assembleur et gestion des cycles",
            "Développement d'un champion personnalisé pour le tournoi",
        ],
        stack: ["C", "Assembleur", "VM"],
        link: "https://github.com/Charles-n1/Corewar",
        extra: true,
    },
    {
        index: "11",
        title: "Minishell",
        context: "Projet Epitech",
        category: "SYSTÈME UNIX",
        year: "2025",
        description:
            "Interpréteur de commandes UNIX recodé en C reproduisant le comportement d'un shell.",
        highlights: [
            "Exécution de commandes, gestion du PATH et des variables d'environnement",
            "Implémentation des pipes, redirections et builtins UNIX",
            "Gestion des processus (fork, execve, wait) et des signaux",
        ],
        stack: ["C", "Linux", "POSIX"],
        link: "https://github.com/Charles-n1/Minishell-C",
        extra: true,
    },
    {
        index: "12",
        title: "Echo",
        context: "Projet personnel",
        category: "ROBOTIQUE & IA",
        year: "2025–2026",
        description:
            "Robot minimaliste capable de bouger son corps avec pour objectif d'y intégrer une IA.",
        highlights: [
            "Contrôle des mouvements du robot en Python",
            "Conception modulaire pensée pour l'intégration d'une intelligence artificielle",
            "Expérimentation autour de l'interaction physique / IA",
        ],
        stack: ["Python", "IA", "Robotique"],
        link: "https://github.com/Charles-n1/Echo",
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
