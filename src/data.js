import Easyfit from './assets/easyfit.png';
import Docket from './assets/docket.png';
import Pomodoro from './assets/get-it-done.png';


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
        period: "05/2025 - Present",
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
        id: 1,
        title: "Fitness Tracker App",
        repoName: 'fitness-app',
        imgSrc: Easyfit,
        description: "A personal fitness tracking web app that let users manage and do exercises and workouts, and that helps users log workouts, monitor goals, and track their progress through an interactive dashboard.",
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
            'Rework on some components UI',
        ],
        planned: [
            'Create a larger library of already curated exercises and workouts'
        ]
    },
    {
        id: 2,
        title: "Shopping List App",
        repoName: 'Docket',
        imgSrc: Docket,
        description: "The only tool needed for you shopping. It is fast, simple, while letting you organize your items. Collaborate through groups and manage lists together. Easiest way to keep your family or friends updated",
        tech: ["React.Js", "Dexie", "TypeScript"],
        links: {
            repo: "https://github.com/Stefan0712/docket",
            demo: "https://stefan0712.github.io/docket/"
        },
        completed: [
            'Create, View, Edit, and Delete shopping lists',
            'Create Shopping List items',
            'Add a store and a category to list items',
            'Add custom tags to items',
            'Set item priority and pin it',
            'Create groups locally',
            'Assign or claim an item',
        ],
        inProgress: [
            'Notification system for the user',
            'Activity system for groups where all actions will be shown',
        ],
        planned: [
            'Group notes',
            'Group polls',
            'Import and export data',
            'Auth and cloud backup',
        ]
    },
    {
        id: 3,
        title: "Get It Done",
        repoName: 'get-it-done',
        imgSrc: Pomodoro,
        description: "Best tool to get things done. Add you tasks, start your timer, and complete them without having to switch apps. Customize it as you need by hiding unwanted UI elements and by choosing one of the 5 themes available",
        tech: ["React.js", "TypeScript", "Redux", "TailwindCSS", "REST API"],
        links: {
            repo: "https://github.com/Stefan0712/get-it-done",
            demo: "https://stefan0712.github.io/get-it-done/"
        },
        completed: [
            'Create and delete tasks',
            'Hide unwanted UI elements',
            'Change the duration of breaks and focus sessions',
            'Have the option to automatically skip sessions',
            'See a history of your sessions',
            'Pick one of the 5 available themes',
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
    "IndexedDB",
    "ReactRouter",
    "TypeScript",
    "Express.Js",
    "MongoDB",
    "Redux"
  ],
  tech: [
    "Git & GitHub",
    "Linux (Home Lab)",
    "Bash / Terminal",
    "Python (Basics)",
    "Web Security Awareness",
    "Microsoft PL-900",
    "SQL (Basics)",
    "Networking Basics",
    "REST API"

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
    "Microsoft Office",
    "Attention to Detail",
    "Email Marketing",
    "Teamwork",
    "Computer Literacy",
  ]
};