import {
  githubLogo,
  linkedInLogo,
  phoneLogo,
  emailLogo,
  awsMachineLearningLogo,
  awsDeveloperAssociateLogo,
  awsCloudPractitionerLogo,
  gearsIcon,
  frontendIcon,
  backendIcon,
  mlIcon,
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
    id: "experience",
    title: "Experience",
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

  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

export const BUTTON_TEXT = "HIRE ME";

export const FULL_NAME = "CONNOR THOMAS";

export const SUB_HEADER =
  "Software Engineer Portfolio | a.k.a. ConnorXCX | Passionate Full-Stack Developer | Over Five Years of Experience in the Software Engineering Industry | Currently Looking for a Full-Stack Role with Preferences towards Java Spring Back-End and React.js Front-End";

export const SKILLS = [
  {
    title: "Back-End",
    icon: backendIcon,
    invertImage: true,
    skills: [
      { skill: "Java - JDK 17", percentage: "95%" },
      { skill: "Spring", percentage: "95%" },
      { skill: "Python", percentage: "98%" },
      { skill: "GraphQL", percentage: "95%" },
      { skill: "PostgreSQL", percentage: "85%" },
      { skill: "Oracle", percentage: "87%" },
      { skill: "Cassandra", percentage: "85%" },
      // { skill: "C++", percentage: "75%" },
    ],
  },
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
    title: "DevOps Tools",
    icon: devopsIcon,
    invertImage: true,
    skills: [
      { skill: "Docker", percentage: "95%" },
      { skill: "Kubernetes", percentage: "95%" },
      { skill: "Jenkins", percentage: "95%" },
      { skill: "Gradle", percentage: "95%" },
      { skill: "Maven", percentage: "95%" },
      { skill: "Linux", percentage: "90%" },
      { skill: "Terraform", percentage: "85%" },
      // { skill: "Prometheus", percentage: "80%" },
      // { skill: "Datadog", percentage: "80%" },
    ],
  },
  {
    title: "Machine Learning",
    icon: mlIcon,
    invertImage: true,
    skills: [
      { skill: "Keras", percentage: "85%" },
      { skill: "TensorFlow", percentage: "85%" },
      { skill: "Rasa NLP", percentage: "80%" },
      { skill: "AWS SageMaker", percentage: "80%" },
      { skill: "AWS DeepRacer", percentage: "75%" },
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
      // { skill: "CloudWatch", percentage: "85%" },
    ],
  },
  {
    title: "Agile",
    icon: agileIcon,
    invertImage: true,
    skills: [
      { skill: "Jira", percentage: "95%" },
      { skill: "Kanban", percentage: "80%" },
      { skill: "Scrum", percentage: "90%" },
      { skill: "Customer Focus", percentage: "80%" },
      { skill: "Sprint Planning", percentage: "90%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: softSkillsIcon,
    invertImage: true,
    skills: [
      { skill: "Peer Review", percentage: "90%" },
      { skill: "Pair Programming", percentage: "90%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Time Management", percentage: "95%" },
      { skill: "Self-Learning", percentage: "90%" },
    ],
  },
];

export const CERTIFICATIONS = [
  // {
  //   title: "AWS Certified Machine Learning - Specialty",
  //   issue_date: {
  //     month: "TBD",
  //     year: "TBD",
  //   },
  //   expiration_date: {
  //     month: "TBD",
  //     year: "TBD",
  //   },
  //   credential_id: "TBD",
  //   logo: awsMachineLearningLogo,
  // },
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
    title:
      "Bachelor of Science in Computer Science @ University of South Florida",
    date: "August 2014 - May 2018",
    responsibilities: [
      "Developed an Android OS 8.0 mobile application, named PerfectPet, to facilitate client pet discovery and adoption with the goal to reduce return to shelter statistics, leveraging a backend Firebase data store.",
      "Graduated with a Bachelor of Science in Computer Science on May 4th, 2018, with a 3.67 GPA.",
    ],
  },
  {
    title: "Software Engineer I @ JPMorgan Chase",
    date: "July 2018 - Jan 2019",
    responsibilities: [
      "Develop a Python-based automation pipeline to maintain and renew SFTP, HTTPS, and AS2 certificates.",
      "Actively contribute to peer code reviews and apply Test-Driven Development (TDD) principles with MockMvc and JUnit 5 to ensure high-quality, maintainable code with a minimum of 85% test coverage.",
      "Serve as a critical liaison between client-facing customer service teams and application development teams, enhancing software stability and reliability through effective identification, support, and root cause analysis of production issues.",
      "Proactively monitor and manage incident responses for global production applications, ensuring compliance with stringent SLAs of under 5 minutes.",
    ],
  },
  {
    title: "Software Engineer II @ JPMorgan Chase",
    date: "Feb 2019 - Jan 2021",
    responsibilities: [
      "Deliver feature enhancements for a Java Spring Angular environment management and observability web site, reducing monthly production issues by 5% for over 200 globally deployed production applications.",
      "Create a Java Spring REST API for monitoring configuration drift and streamlining change management processes through a comprehensive dashboard to compare infrastructure across deployment environments.",
      "Lead a team to design a Python-based Rasa NLP chatbot integrated with multiple back-end data stores and APIs, delivering a cohesive interface that consolidates access to internal tools and client support teams.",
      "Design a Python Flask dashboard utilizing MariaDB tables and DataTables JavaScript graph library to enable tracking of key metrics and generation of ad hoc reports for a global Python upskilling initiative.",
      "Assist a global AWS DeepRacer League to upskill developers in Python, Amazon SageMaker, and Reinforcement Learning with participation of over 20 cities and 3,500 developers.",
      "Host a regional Python Code Club to upskill coworkers in automating their daily tasks while encouraging contribution to an internal library of common code specific to internal infrastructure.",
    ],
  },
  {
    title: "Software Engineer III @ JPMorgan Chase",
    date: "Feb 2021 - Aug 2023",
    responsibilities: [
      "Advise stakeholders on best practices for creating a unified API data mesh, facilitating the decoupling of legacy systems and migration to a globally distributed AWS EKS Java Spring microservices architecture.",
      "Architect and implement Java Spring GraphQL APIs with intricate, deeply nested data schemas to meet complex client requirements, enabling efficient data mutations and seamless schema versioning.",
      "Develop and optimize scalable ETL pipelines for a Hadoop / Apache Spark data warehouse responsible for processing millions of daily transactions for machine learning analytics, APIs, fraud detection, and audits.",
      "Leverage PySpark DataFrames and custom Python scripts to transform and analyze data in response to dynamic, ad-hoc business needs, ensuring consistent, high-performance data access to billions of records.",
      "Secure API endpoints and protect sensitive data by implementing robust authentication protocols (OAuth 2.0, AWS IAM, and Kerberos) with an entitlements hierarchy of over 100 roles to enforce data governance.",
    ],
  },
  {
    title: "Software Engineer III @ JPMorgan Chase",
    date: "Jan 2025 - Present",
    responsibilities: ["TBD"],
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
