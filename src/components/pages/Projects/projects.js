export const projects = [
  {
    name: "EasyFit",
    status: "active",
    description: "The perfect companion for those who wants to track their fitness progress without unnecessary stuff. Easy and fast to use to avoid being stuck in the planning phase.",
    repoLink: "https://github.com/Stefan0712/fitness-app",
    liveLink: "https://stefan0712.github.io/fitness-app/",
    technologies: ["ReactJS", "TypeScript", "CSS", "Redux", "React Router"]
  },
  {
    name: "EasyFit API",
    status: "active",
    description: "The backend for the EasyFit App made using ExpressJS. Supports full CRUD functionalities, basic authentication via JWT, and is connected to a MongoDB database.",
    repoLink: "https://github.com/Stefan0712/fitness-api",
    liveLink: null,
    technologies: ["ExpressJS", "TypeScript", "MongoDB", "JWT"]
  },
  {
    name: "EasyFit Web Portal",
    status: "active",
    description: "A webportal used to manage the data from the API. It allows users to create workouts, exercises, and to use more advanced features such as Activity Plans for an entire week, meal plans, creating guides, etc. It's supposed to be the advanced version of the mobile app and to be used together with it.",
    repoLink: "https://github.com/Stefan0712/api-portal",
    liveLink: "https://stefan0712.github.io/api-portal/",
    technologies: ["ReactJS", "TypeScript", "React Router", "TailwindCSS", "Axios", "DND-kit", "axios"]
  },
  {
    name: "MathRush",
    status: "active",
    description: "Simple math game made with ReactJS. Your goal is to pick the correct numbers to make up to target number shown, while following the operation chosen. Great for honing your mental math skill.",
    repoLink: "https://github.com/Stefan0712/math-rush",
    liveLink: "https://stefan0712.github.io/math-rush/",
    technologies: ["ReactJS"]
  },
  {
    name: "Get it done",
    status: 'paused',
    description: "Minimal pomodoro timer featuring a task list. An easy way to focus on the work while keeping track of your progress. It can be customized by hiding elements, changing themes, and changing the layout.",
    repoLink: "https://github.com/Stefan0712/get-it-done",
    liveLink: "https://stefan0712.github.io/get-it-done/",
    technologies: ['ReactJS', 'Nosleep', 'redux', 'redux-persist']
  },
  {
    name: "Event Management App",
    status: 'dropped',
    description: "A full-stack app made after finishing The Complete Web Developer Bootcamp. This is the front-end made with React. This app lets users create, manage, or find new events easily. It features basic authentication and role-based access to certain features.",
    repoLink: "https://github.com/Stefan0712/event-management-app",
    liveLink: "https://stefan0712.github.io/event-management-app/",
    technologies: ['ReactJS', 'Leaflet', 'axios', 'react-calendar']
  },
  {
    name: "EMA Back-End",
    status: 'dropped',
    description: "This is the back-end for the Event Management App. It is made with ExpressJS, passport, and MongoDB as database.",
    repoLink: "https://github.com/Stefan0712/event-management-app-backend",
    liveLink: "",
    technologies: ['ExpressJS', 'MongoDB', 'passport', 'express-session', 'body-parser', 'passport-local']
  },
  {
    name: "YelpCamp",
    status: 'dropped',
    description: "A clone of Yelp made during the Web Development Bootcamp course. It has basic auth, supports viewing, creating ,editing, and deleting of camps from the mongodb database, and photo uploading using cloudinary.",
    repoLink: "https://github.com/Stefan0712/YelpCamp",
    liveLink: "",
    technologies: ['Cloudinary', 'ExpressJS', 'EJS', 'MongoDB', 'Passport', 'Multer', 'Helmet', 'Mapbox']
  }
];