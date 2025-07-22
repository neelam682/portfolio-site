import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  autoform,
  jobit,
  tripguide,
  threejs,
  feynman,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Copywriter",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer (Personal Projects)",
    company_name: "Self-Initiated",
    icon: meta, // use your own icon here if needed
    iconBg: "#D0E6FF", // soft blue
    date: "2024 - Present",
    points: [
      "Building modern web apps using React.js, Tailwind CSS, and Firebase.",
      "Created AutoForm AI — a smart form generator that reuses user data to auto-fill forms.",
      "Implemented responsive design and user-friendly UI using modern CSS frameworks.",
      "Gained deep understanding of frontend structure, routing, API integration, and UI systems.",
    ],
  },
  {
    title: "Frontend Intern (Remote Learning)",
    company_name: "Open Source + Guided Practice",
    icon: shopify, // or any icon you like
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Studied open-source codebases and improved real-world UIs as part of practice.",
      "Collaborated with online communities to build components and resolve bugs.",
      "Practiced version control, clean UI architecture, and debugging techniques.",
      "Focused on mastering reusable component patterns and modern dev tools.",
    ],
  },
  {
    title: "Web Designer & Prototype Builder",
    company_name: "Personal Startup Concepts",
    icon: starbucks, // or your own icon
    iconBg: "#E1F0FF",
    date: "2022 - 2023",
    points: [
      "Designed several web interfaces using Figma and Tailwind for MVP concepts.",
      "Explored the logic of UX design, layout systems, and design-to-code transitions.",
      "Built early UI concepts for passion projects related to AI and Quantum Learning.",
    ],
  },
];



const projects = [
  {
    name: "FeynmanGPT",
    description:
      "An AI tutor that explains complex physics using Feynman’s technique. Built with React, GPT-4 API, and Firebase Auth.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
      { name: "gpt", color: "green-text-gradient" },
    ],
    image: feynman,
    source_code_link: " https://github.com/neelam682/sirrion-clean-2.git",
  },
  {
    name: "AutoForm AI",
    description:
      "Smart form-filler that remembers user data and automatically fills applications. Uses React, Context API, and local storage.",
     tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "context-api", color: "pink-text-gradient" },
      { name: "localstorage", color: "green-text-gradient" },
    ],
    image: autoform,
    source_code_link: "https://github.com/neelam682/autoform-ai.git",
  },
  {
    name: "Resume Checker",
    description:
      "Tool that analyzes your resume using GPT and gives job-matching feedback. Built for job seekers using React + OpenAI.",
     tags: [
      { name: "gpt", color: "green-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
    ],

    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences,  projects };
