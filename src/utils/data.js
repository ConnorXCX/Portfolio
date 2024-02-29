import {
  githubLogo,
  linkedInLogo,
  phoneLogo,
  emailLogo,
  awsDeveloperAssociateLogo,
  awsCloudPractitionerLogo,
  gearsIcon,
  frontendIcon,
  backendIcon,
  devopsIcon,
  cloudIcon,
  agileIcon,
  softSkillsIcon,
} from "../assets";

export const TITLE = "Portfolio | ConnorXCX";

export const NAV_LINKS = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  // {
  //   id: "projects",
  //   title: "Projects",
  // },
  // {
  //   id: "readings",
  //   title: "Readings",
  // },
  {
    id: "experience",
    title: "Experience",
  },

  {
    id: "contact",
    title: "Contact Me",
  },
];

export const BUTTON_TEXT = "HIRE ME";

export const FULL_NAME = "CONNOR THOMAS";

export const SUB_HEADER =
  "Software Engineering Portfolio | a.k.a. ConnorXCX | Passionate Full-Stack Developer | Over Five Years Experience in Software Engineering Industry";

export const SKILLS = [
  {
    title: "Front-End",
    icon: frontendIcon,
    invertImage: true,
    skills: [
      { skill: "JavaScript", percentage: "90%" },
      { skill: "TypeScript", percentage: "85%" },
      { skill: "React.js", percentage: "90%" },
      { skill: "Redux", percentage: "80%" },
      { skill: "Tailwind CSS", percentage: "95%" },
      { skill: "Angular", percentage: "80%" },
      { skill: "Flask", percentage: "85%" },
    ],
  },
  {
    title: "Back-End",
    icon: backendIcon,
    invertImage: true,
    skills: [
      { skill: "Java - JDK 17", percentage: "95%" },
      { skill: "Spring Framework", percentage: "100%" },
      { skill: "Python", percentage: "100%" },
      { skill: "GraphQL", percentage: "100%" },
      { skill: "PostgreSQL", percentage: "85%" },
      { skill: "Oracle", percentage: "90%" },
      { skill: "Cassandra", percentage: "90%" },
    ],
  },
  {
    title: "DevOps",
    icon: devopsIcon,
    invertImage: true,
    skills: [
      { skill: "Docker", percentage: "95%" },
      { skill: "Kubernetes", percentage: "95%" },
      { skill: "Jenkins", percentage: "100%" },
      { skill: "Terraform", percentage: "90%" },
      { skill: "Prometheus", percentage: "85%" },
      { skill: "Datadog", percentage: "80%" },
      { skill: "Gradle", percentage: "100%" },
      { skill: "Groovy", percentage: "100%" },
    ],
  },
  {
    title: "AWS",
    icon: cloudIcon,
    invertImage: true,
    skills: [
      { skill: "Aurora", percentage: "95%" },
      { skill: "DynamoDB", percentage: "90%" },
      { skill: "EKS", percentage: "100%" },
      { skill: "EC2", percentage: "100%" },
      { skill: "S3", percentage: "100%" },
      { skill: "CloudWatch", percentage: "90%" },
      { skill: "SageMaker", percentage: "90%" },
      { skill: "DeepRacer", percentage: "80%" },
    ],
  },
  {
    title: "Agile",
    icon: agileIcon,
    invertImage: true,
    skills: [
      { skill: "Jira", percentage: "100%" },
      { skill: "Kanban", percentage: "90%" },
      { skill: "Scrum", percentage: "100%" },
      { skill: "Customer Focus", percentage: "95%" },
      { skill: "Spring Planning", percentage: "90%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: softSkillsIcon,
    invertImage: true,
    skills: [
      { skill: "Peer Review", percentage: "95%" },
      { skill: "Pair Programming", percentage: "90%" },
      { skill: "Collaboration", percentage: "95%" },
      { skill: "Time Management", percentage: "100%" },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Developer - Associate",
    issue_date: {
      month: "January",
      year: "2023",
    },
    expiration_date: {
      month: "January",
      year: "2026",
    },
    credential_id: "4N7ZP8Z2Y1FQQCGN",
    logo: awsDeveloperAssociateLogo,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issue_date: {
      month: "May",
      year: "2022",
    },
    expiration_date: {
      month: "January",
      year: "2026",
    },
    credential_id: "F7W8WM2LF1F1183X",
    logo: awsCloudPractitionerLogo,
  },
];

export const EXPERIENCE = [
  {
    title: "Senior Year Student @ University of South Florida",
    date: "August 2017 - May 2018",
    responsibilities: [
      "Enim sint aliquip quis est ullamco ex ipsum minim dolore irure.",
      "Velit consequat voluptate mollit Lorem ad voluptate proident officia id velit labore nisi ex.",
      "Ullamco sint Lorem qui reprehenderit amet.",
    ],
  },
  {
    title: "Software Engineer Program @ JPMorgan Chase",
    date: "July 2018 - December 2019",
    responsibilities: [
      "Laboris voluptate ad anim mollit veniam.",
      "Cupidatat qui exercitation culpa sunt sunt elit.",
      "In nulla aute tempor occaecat.",
    ],
  },
  {
    title: "Software Engineer I @ JPMorgan Chase",
    date: "July 2018 - December 2019",
    responsibilities: [
      "Over a year on Production Management team monitoring and providing incident response and control to multiple applications deployed globally to production environments.",
      "Responsible for root cause analysis and identifying production issues to relay to application development teams.",
      "Facilitated communication between client facing customer service teams and application development teams to improve software stability and reliability.",
    ],
  },
  {
    title: "Software Engineer II @ JPMorgan Chase",
    date: "January 2020 - December 2020",
    responsibilities: [
      "Assist a global AWS DeepRacer League to upskill developers in Python, Amazon SageMaker, and Reinforcement Learning with participation of over 20 cities and 3,500 developers.",
      "Host a regional Python Code Club to upskill coworkers in automating their daily tasks while encouraging contribution to an internal library of common code specific to internal infrastructure.",
      "Contributed to an environment management website for application owners to monitor configuration drift and facilitate change management on globally distributed applications in production.",
    ],
  },
  {
    title: "Software Engineer III @ JPMorgan Chase",
    date: "January 2021 - August 2023",
    responsibilities: [
      "Part of Big Data team hosting line of business Data Warehouse with multiple ETL pipelines responsible for serving data for reporting, machine learning analytics, and APIs (RESTful and GraphQL).",
      "First on team to deploy a GraphQL API to a globally available production AWS EKS Cluster, while maintaining regional regulatory requirements for data segregation and AWS IAM user role access.",
      "Mentorship of new hires on code quality and software architecture of internally designed APIs and distributed back-end systems.",
    ],
  },
  {
    title: "Software Engineer Creative Sabbatical",
    date: "September 2023 - Present",
    responsibilities: [
      "Magna ea velit ad tempor culpa deserunt in quis.",
      "Id est eu sit cupidatat.",
      "Deserunt sint sit nulla commodo ullamco commodo.",
    ],
  },
];

export const BOOKS = [
  {
    title: "Deep Learning with Python, Second Edition",
    author: "François Chollet",
    publication_date: {
      month: "October",
      year: "2021",
    },
    isbn: "9781617296864",
    publisher_url:
      "https://www.manning.com/books/deep-learning-with-python-second-edition",
    cover_img: "",
  },
  {
    title: "Deep Learning: A Visual Approach",
    author: "Andrew Glassner",
    publication_date: {
      month: "June",
      year: "2021",
    },
    isbn: "9781718500723",
    publisher_url: "https://nostarch.com/deep-learning-visual-approach",
    cover_img: "",
  },
  {
    title: "Understanding Deep Learning",
    author: "Simon J.D. Prince",
    publication_date: {
      month: "December",
      year: "2023",
    },
    isbn: "9780262048644",
    publisher_url: "https://mitpressbookstore.mit.edu/book/9780262048644",
    cover_img: "",
  },
];

export const CURRENT_YEAR = new Date().getFullYear();

export const CONTACT_LINKS = [
  {
    id: "GITHUB",
    content: "github.com/ConnorXCX",
    link: "https://github.com/ConnorXCX",
    logo: githubLogo,
    invertImage: false,
  },
  {
    id: "LINKEDIN",
    content: "linkedin.com/in/ConnorXCX",
    link: "https://www.linkedin.com/in/ConnorXCX/",
    logo: linkedInLogo,
    invertImage: true,
  },
  {
    id: "PHONE_NUMBER",
    content: "+1 (813) 575-3198",
    link: "tel:+18135753198",
    logo: phoneLogo,
    invertImage: true,
  },
  {
    id: "EMAIL_ADDRESS",
    content: "ConnorXCX.codes@gmail.com",
    link: "mailto:ConnorXCX.codes@gmail.com",
    logo: emailLogo,
    invertImage: true,
  },
];
