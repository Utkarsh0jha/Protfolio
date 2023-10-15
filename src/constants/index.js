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
  jobit,
  tripguide,
  threejs,
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
    title: "Database Operator",
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
 
];

const experiences = [
  {
    title: "Data Entry Operator Intern",
    company_name: "Vineet Enterprises.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jul 2022 - Sep 2022",
    points: [
      "Entering customer and account data from source documents within time limits.",
      "Compiling, verifying accuracy and sorting information to prepare source data for computer entry.",
      "Reviewing data for deficiencies or errors, correcting any incompatibilities and checking output.",
    ],
  },
  {
    title: "FrontEnd Developer Intern",
    company_name: "Ifortis Corporation",
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Used Technologies such as Figma to create the Front End.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      " Completed the Responsive Web design Certification.",
      name: "FreeCodeCamp",
  },
  {
    testimonial:
      "Certificate of participation in Tiger Session.",
    name: "The Training Company",
  },
  {
    testimonial:
      "Certificate of completion 2022 Complete Python BootCamp from Zero to Hero in Python.",
    name: "Udemy",
  },
];

const projects = [
  {
    name: "GPT-3",
    description:
      "The possibilities are beyond your imagination. Intergrating GPT-3 or Using it for personal use. This Project is made use React and is hosted on github.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://utkarsh0jha.github.io/projectgpt3/",
  },
  {
    name: "Photography Site",
    description:
      "-Uses HTML , CSS , React JS and Bootstrap. And displays top 5 places with their description and photos for ease of travelling.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };