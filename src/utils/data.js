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
  "Software Engineer Portfolio | a.k.a. ConnorXCX | Passionate Full-Stack Developer | Over Five Years of Experience in the Software Engineering Industry | Currently Looking for a Full-Stack role with Preferences towards Java Spring Back-End and React.js Front-End";

export const SKILLS = [
  {
    title: "Front-End",
    icon: frontendIcon,
    invertImage: true,
    skills: [
      { skill: "JavaScript", percentage: "90%" },
      { skill: "TypeScript", percentage: "85%" },
      { skill: "React.js", percentage: "90%" },
      { skill: "Redux", percentage: "75%" },
      { skill: "Tailwind CSS", percentage: "95%" },
      { skill: "Angular", percentage: "80%" },
      { skill: "Flask", percentage: "80%" },
    ],
  },
  {
    title: "Back-End",
    icon: backendIcon,
    invertImage: true,
    skills: [
      { skill: "Java - JDK 17", percentage: "95%" },
      { skill: "Spring Framework", percentage: "95%" },
      { skill: "Python", percentage: "98%" },
      { skill: "GraphQL", percentage: "95%" },
      { skill: "PostgreSQL", percentage: "85%" },
      { skill: "Oracle", percentage: "87%" },
      { skill: "Cassandra", percentage: "85%" },
    ],
  },
  {
    title: "DevOps",
    icon: devopsIcon,
    invertImage: true,
    skills: [
      { skill: "Docker", percentage: "95%" },
      { skill: "Kubernetes", percentage: "95%" },
      { skill: "Jenkins", percentage: "95%" },
      { skill: "Terraform", percentage: "85%" },
      { skill: "Prometheus", percentage: "80%" },
      { skill: "Datadog", percentage: "80%" },
      { skill: "Gradle", percentage: "95%" },
      { skill: "Groovy", percentage: "90%" },
    ],
  },
  {
    title: "AWS",
    icon: cloudIcon,
    invertImage: true,
    skills: [
      { skill: "Aurora", percentage: "95%" },
      { skill: "DynamoDB", percentage: "90%" },
      { skill: "EKS", percentage: "95%" },
      { skill: "EC2", percentage: "90%" },
      { skill: "S3", percentage: "95%" },
      { skill: "CloudWatch", percentage: "85%" },
      { skill: "SageMaker", percentage: "85%" },
      { skill: "DeepRacer", percentage: "80%" },
    ],
  },
  {
    title: "Agile",
    icon: agileIcon,
    invertImage: true,
    skills: [
      { skill: "Jira", percentage: "95%" },
      { skill: "Kanban", percentage: "90%" },
      { skill: "Scrum", percentage: "90%" },
      { skill: "Customer Focus", percentage: "90%" },
      { skill: "Sprint Planning", percentage: "90%" },
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
      { skill: "Time Management", percentage: "95%" },
      { skill: "Self-Learning", percentage: "95%" },
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
    title: "Senior @ University of South Florida",
    date: "August 2017 - May 2018",
    responsibilities: [
      "Developed an Android OS 8.0 mobile application, named PerfectPet, to facilitate client pet discovery and adoption with the goal to reduce return to shelter statistics, leveraging a backend Firebase data store.",
      "Graduated with a Bachelor of Science in Computer Science on May 4th, 2018, with a 3.67 GPA.",
    ],
  },
  {
    title: "Software Engineer I @ JPMorgan Chase",
    date: "July 2018 - December 2019",
    responsibilities: [
      "Spent nearly a year in Production Management monitoring and providing incident response and control to multiple applications deployed to global production environments.",
      "Responsible for root cause analysis and identifying production issues to relay to application development teams for further application.",
      "Facilitated communication between client facing customer service teams and application development teams to improve software stability and reliability.",
    ],
  },
  {
    title: "Software Engineer II @ JPMorgan Chase",
    date: "January 2020 - December 2020",
    responsibilities: [
      "Hosted a regional Python Code Club to upskill coworkers in automating their daily tasks while encouraging contribution to an internal library of common code specific to internal infrastructure.",
      "Developed components for an environment management website for application owners to monitor configuration drift and facilitate change management on globally distributed applications in production.",
      "Trainer in a local chapter of a global AWS DeepRacer League to upskill developers in Python, Amazon SageMaker, and Reinforcement Learning with participation of over 20 cities and 3,500 developers.",
    ],
  },
  {
    title: "Software Engineer III @ JPMorgan Chase",
    date: "January 2021 - August 2023",
    responsibilities: [
      "Developer on a Big Data team hosting line of business Data Warehouse with multiple ETL pipelines responsible for serving data for reporting, machine learning analytics, and APIs (RESTful and GraphQL).",
      "First on team to deploy a GraphQL API to a globally available production AWS EKS Cluster, while maintaining regional regulatory requirements for data segregation and AWS IAM user role access.",
      "Mentored and trained new hires on code quality and software architecture of internally designed APIs and distributed back-end systems.",
    ],
  },
  {
    title: "Software Engineer Creative Sabbatical",
    date: "September 2023 - Present",
    responsibilities: [
      "Gaining more font-end experience, particularly with React.js framework, as well as mastering JavaScript and TypeScript languages.",
      "Learning more about the design process, including the process of translating Figma designs to front-end components with HTML, CSS and other frameworks like Tailwind CSS.",
      "Currently studying Machine Learning, with emphasis on Deep Learning to upskill myself and prepare for the AWS Machine Learning - Specialty certification.",
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
