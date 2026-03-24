export const personalInfo = {
    email: "s.vladulescu@gmail.com",
    phone: "+40 724 473 060",
    location: "Romania",
    github: "https://github.com/Stefan0712",
    linkedin: "https://www.linkedin.com/in/stefan-vladulescu",
};
export const experience = [
    {
        id: 1,
        role: "Sales Assistant",
        company: "Altex",
        period: "05/2025 - 10/2025",
        description: "Consulted customers on technical hardware specifications and managed high-volume inventory logistics.",
    },
    {
        id: 2,
        role: "Ads Assessor",
        company: "WeLocalize",
        period: "03/2024 - 07/2024",
        description: "Analyzed and classified complex datasets to improve search engine algorithms and machine learning relevance.",
    },
    {
        id: 3,
        role: "Front Desk Receptionist",
        company: "Blaxy Residence",
        period: "07/2024 - 09/2024",
        description: "Maintained booking records and ensured a smooth experience by quickly resolving guest complaints.",
    },
];

export const education = [
    {
        id: 1,
        degree: "Management",
        institution: "Ovidius University Constana",
        period: "10/2020 - 07/2023",
    },
    {
        id: 2,
        degree: "Economic Activities Technician",
        institution: "Colegiul Economic \"Delta Dunării\" Tulcea",
        period: "09/2015 - 06/2019",
    },
];

export const certifications = [
    "Data Analytics Professional, Google",
    "Digital Marketing and E-Commerce, Google UX",
    "Design Specialization, Google",
    "Excel from Beginner to Advanced - Kyle Pew, Udemy",
    "Full-Stack Web Development Bootcamp, Udemy",
    "Adobe Premiere Pro Masterclass - Phil Ebiner, Udemy",
    "Digital Marketing Course - Pouya Eti, Udemy Digital",
    "Marketing, HubSpot Academy",
    "Email Marketing, HubSpot Academy",
    "Power Platform Fundamentals, Microsoft",
];

export const projects = [
    {
        id: 2,
        title: "Acta",
        repoName: 'Acta',
        logoUrl: 'https://github.com/Stefan0712/acta/blob/main/public/logo512.png?raw=true',
        description: "Collaborate on lists with friends or family, decide easily through a poll, and leave useful notes. Acta is the app for quick and easy collaboration, or just create private offline-only lists.",
        longDescription: 'Acta is a full-stack, local-first productivity engine built with React 19, Node.js, and MongoDB to handle both offline task management and real-time group collaboration. It features a custom synchronization engine bridging local Dexie.js storage with an Express REST API, utilizing optimistic UI reactivity, background push queues, and periodic polling to ensure zero-latency data interactions. The platform supports shared workspaces with granular role-based access control, intelligent task delegation, and collaborative decision tools. Active development is focused on implementing advanced delta-syncing algorithms for robust offline conflict resolution and PWA service workers for native notifications',
        tech: ["React.Js", "Dexie", "TypeScript", "Mongodb", "Node.JS", "React Router", "Lucide Icons"],
        links: {
            repo: "https://github.com/Stefan0712/acta",
            demo: "https://stefan0712.github.io/acta/"
        },
        completed: [
            'CRUD lists and list items',
            'CRUD groups',
            'Custom tags',
            'Color and Icon picker for groups and lists',
            'Set deadlines, qty, values, priority and tags to items for flexibility',
            'Assign items to a group member or claim for yourself',
            'Generate invite links for groups',
            'Login or create a new account',
            'CRUD for notes and note comments in groups',
            'CRUD for polls in groups',
            'Import and export data',
            'Notification system for the user',
        ],
        inProgress: [
            'Moderation tools for groups',
            'Back-ups',
            'Data caching to allow offline viewing of group items',
        ],
        planned: [
            'Layout for bigger screens',
            'Device notifications',
        ],
        gallery: [
            "/projects/acta/register.png",
            "/projects/acta/auth.jpg",
            "/projects/acta/groups.jpg",
            "/projects/acta/group.jpg",
            "/projects/acta/lists.jpg",
            "/projects/acta/list.png",
            "/projects/acta/list.jpg",
            "/projects/acta/new-list.jpg",
            "/projects/acta/new-item.jpg",
            "/projects/acta/notes.jpg",
            "/projects/acta/polls.jpg",
            "/projects/acta/tags.jpg",
            "/projects/acta/color-selector.jpg",
            "/projects/acta/icon-selector.jpg",
            "/projects/acta/import.jpg",
            "/projects/acta/export.jpg",
            "/projects/acta/diagram.png"
        ]
    },
    {
        id: 3,
        title: "Pomodoro",
        repoName: 'focus',
        logoUrl: 'https://github.com/Stefan0712/focus/blob/main/public/web-app-manifest-512x512.png?raw=true',
        description: "This pomodoro timer with build-in task manager was made to boost my own productivity by removing all the friction of other apps and helping me focus on doing the tasks, not planning.",
        longDescription: 'Focus is a local-first Progressive Web App (PWA) that combines a highly customizable Pomodoro timer with an integrated task manager. Built with React, Redux Toolkit, and Dexie.js, the application leverages useLiveQuery for zero-latency database sorting and robust offline data persistence. Engineered for deep work, it features dynamic split-screen layouts, a distraction-free Zen mode, and native browser Wake Lock API integration to prevent device sleep during active focus sessions',
        tech: ["React.js", "TypeScript", "Redux", "Dexie", "PWA", "Vite"],
        links: {
            repo: "https://github.com/Stefan0712/focus",
            demo: "https://stefan0712.github.io/focus/"
        },
        completed: [
            'Build-in minimal task manager',
            'Fully customize the app',
            'Customize your timer',
            'See a history of your sessions',
            'Choose one of the 5 pre-made themes',
        ],
        gallery: [
            "/projects/pomodoro/timer-tasks.png",
            "/projects/pomodoro/theme-1.png",
            "/projects/pomodoro/theme-2.png",
            "/projects/pomodoro/theme-3.png",
            "/projects/pomodoro/theme-4.png",
            "/projects/pomodoro/settings-1.png",
            "/projects/pomodoro/settings-2.png",
            "/projects/pomodoro/settings-3.png"
        ]
    },
    {
        id: 4,
        title: "Arithmo",
        repoName: 'arithmo',
        logoUrl: 'https://github.com/Stefan0712/arithmo/blob/main/public/web-app-manifest-512x512.png?raw=true',
        description: "A math learning game made for mobile devices. Improve your math through quick practice games in a gamified experience",
        longDescription: 'Arithmo is an offline-first, gamified math learning platform built with React 19, Zustand, and Dexie.js. Powered by a custom universal game engine, it features dynamic arcade modes, an in-game economy, and asynchronous "ghost" multiplayer driven by deterministic match seeds. The app utilizes a robust local-first architecture with background queue synchronization and server-side state validation to deliver a zero-latency mobile experience while preventing offline cheating.',
        tech: ["React.js", "TypeScript", "React Router", "TailwindCSS", "Zustand", "Framer Motion", "Dexie", "Lucide Icons", "PWA"],
        links: {
            repo: "https://github.com/Stefan0712/arithmo",
            demo: "https://stefan0712.github.io/arithmo/#"
        },
        completed: [
            'Play one of the three default modes',
            'Create your custom level',
            'Earn xp by winning',
            'Use items to help you',
            'See a history of your games',
        ],
        inProgress: [
            'PVP Mode',
            'Auth',
            'Daily/Weekly Challenges',
            'Player Shop'
        ],
        planned: [
            'Learning Path Lessons',
            'Weekly League',
        ],
        gallery: [
            "/projects/arithmo/arcade.png",
            "/projects/arithmo/custom-simple.png",
            "/projects/arithmo/custom-advanced-1.png",
            "/projects/arithmo/custom-advanced-2.png",
            "/projects/arithmo/game.png",
            "/projects/arithmo/pause.png",
            "/projects/arithmo/game-over.png",
            "/projects/arithmo/history.png",
            "/projects/arithmo/store-bank.png",
            "/projects/arithmo/store-items.png"
        ]
    },
    {
        id: 5,
        title: "Arc",
        repoName: 'arc',
        logoUrl: 'https://github.com/Stefan0712/arc/blob/main/public/512x512.png?raw=true',
        description: "A minimal habit tracker. Create your goals and track them with minimum friction.",
        longDescription: "Arc is a local-first, mobile-optimized habit tracker built with React 19, Zustand, and Dexie.js for fast, offline-capable daily logging. It currently supports customizable binary and numeric targets with visual progress analytics and localized data backups. The development roadmap focuses on migrating to a hybrid Node.js architecture to introduce real-time multiplayer accountability groups, composite multi-step habits, and gamified streak progression",
        tech: ["React.js", "TypeScript", "React Router", "TailwindCSS", "Zustand", "Framer Motion", "Dexie", "Lucide Icons", "PWA"],
        links: {
            repo: "https://github.com/Stefan0712/arc",
            demo: "https://stefan0712.github.io/arc/#"
        },
        completed: [
            'Create your goal and choose how to complete it',
            'Create daily logs with ease',
            'Watch your progress for the past week and month',
            'Customize your app to match your vibe',
        ],
        inProgress: [
            'More Stats and Insights',
        ],
        planned: [
            'Composite Habits',
            'Gamification',
            'Multiplayer goals',
            'Cloud sync'
        ],
        gallery: [
            "/projects/arc/dashboard.png",
            "/projects/arc/new-habit-1.png",
            "/projects/arc/new-habit-2.png",
            "/projects/arc/new-habit-3.png",
            "/projects/arc/view-goal.png",
            "/projects/arc/boolean-log.png",
            "/projects/arc/number-log.png",
            "/projects/arc/number-log-2.png",
            "/projects/arc/history.png",
            "/projects/arc/stats-1.png",
            "/projects/arc/stats-2.png",
            "/projects/arc/settings-1.png",
            "/projects/arc/settings-2.png",
            "/projects/arc/settings-3.png",
            "/projects/arc/settings-4.png",
            "/projects/arc/import.png",
            "/projects/arc/export.png"
        ]
    },
    {
        id: 6,
        title: "Homelab",
        logoUrl: null,
        description: "Self-hosted server environment running 15+ containerized microservices, featuring custom DNS routing, VPN access, and active system telemetry",
        longDescription: "An Ubuntu home server running over 15 Docker containers managed via Dockge. It hosts a Nextcloud personal cloud with a MariaDB database, dedicated game servers, and AdGuard Home for network-wide ad blocking. Public web traffic is routed through Cloudflare and a Caddy reverse proxy, while WireGuard provides a secure VPN connection to the local network. Uptime and system health are monitored in real-time using Uptime Kuma and Beszel.",
        tech: ["Ubuntu Server", "Docker Compose", "Bash", "Caddy", "WireGuard", "Uptime Kuma"],
        gallery: [
            '/projects/homelab/lab-diagram.png'
        ],
        completed: [
            "Caddy",
            "AdGuard Home",
            "WireGuard (wg-easy)",
            "Nextcloud",
            "MariaDB",
            "Uptime Kuma",
            "Beszel (Agent & Hub)",
            "Dockge",
            "Jellyfin",
            "Kavita",
            "Booklore",
            "Suwayomi",
            "Shelfmark",
            "Filebrowser",
            "Crafty Controller",
            "3D Models Library (custom API & UI)",
            "Homepage",
            "Terraria Dedicated Server"
        ]
    },
     {
        id: 1,
        title: "Fitness App",
        repoName: 'fitness-app',
        logoUrl: 'https://github.com/Stefan0712/fitness-app/blob/main/public/icons/icon-512x512.png?raw=true',
        description: "[REWORKING THE WHOLE APP] A personal fitness tracking web app that let users manage and do exercises and workouts, and that helps users log workouts, monitor goals, and track their progress through an interactive dashboard.",
        longDescription: 'EasyFit is a comprehensive, local-first fitness and nutrition tracking application built with React, TypeScript, Redux, and IndexedDB. Designed as a performant alternative to subscription-based trackers, it features a complex workout builder supporting multi-phase routines, dynamic exercise libraries, and highly customizable goal tracking parameters',
        tech: ["React.js", "TypeScript", "Redux", "React Router", "CSS", "IndexedDB"],
        links: {
            demo: "https://stefan0712.github.io/fitness-app",
            repo: "https://github.com/Stefan0712/fitness-app", 
        },
        completed: [
            'Create, View, Edit, and Delete exercises',
            'CRUD for workouts',
            'Completed workouts and exercises are being logged automatically',
            'Create and log different types of custom goals',
            'Log food and other activities',
            'Customizable dashboard with your selected goals, and nutrition and activity summaries',
            'Guided exercises and workouts',
            'Import and export workouts and exercises',
        ],
        inProgress: [
            'Rework the entire UI',
            'Migrate to using more TypeScript',
            'Adding TailwindCSS alongside custom CSS'
        ],
        planned: [
            'Create a larger library of already curated exercises and workouts'
        ]
    },
];


export const skills = {
  dev: [
    "React.js",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "HTML5 & CSS3",
    "PHP",
    "WordPress",
    "Node.Js",
    "Bootstrap",
    "IndexedDB/Dexie",
    "ReactRouter",
    "TypeScript",
    "Express.Js",
    "MongoDB",
    "Redux/Zustand",
    "Framer Motion",
    "PWA"
  ],
  tech: [
    "Git & GitHub",
    "Linux / Server Administration (Home Lab)",
    "Bash / Terminal",
    "Python (Basics)",
    "Web Security Awareness",
    "Microsoft PL-900",
    "SQL (Basics)",
    "DNS & Reverse Proxies",
    "REST API",
    "Docker & Containerization"

  ],
  creative: [
    "Figma",
    "UI/UX Principles",
    "Adobe Photoshop",
    "Adobe Premiere Pro",
    "Video Editing",
    "Blender",
    "Responsive Design",
    "Accessibility Design"
  ],
  soft: [
    "Communication",
    "Problem Solving",
    "Organization",
    "SEO Basics",
    "Digital Marketing",
    "Adaptability",
    "Attention to Detail",
    "Email Marketing",
    "Teamwork",
  ]
};