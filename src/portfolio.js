/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Damian's Portfolio",
  description:
    "A motivated student who challenges status quo and equipped with good communication skills and leadership traits.",
  og: {
    title: "Damian Liew Cho Xiang",
    type: "website",
    url: "https://damiancxliew.github.io/portfolio",
  },
};

//Home Page
const greeting = {
  title: "Damian Liew Cho Xiang",
  logo_name: "Damian Liew Cho Xiang",
  nickname: "Software Developer",
  subTitle:
    "A passionate individual who always challenges status quo to develop sustainable products that bring positive impact to the society.",
  resumeLink:
    "https://drive.google.com/file/d/1w87CA8nOD_o0-mQbCx6MMZS-WWrP4LyB/view?usp=sharing", // need to change resume link
  portfolio_repository: "https://github.com/damiancxliew",
  githubProfile: "https://github.com/damiancxliew",
  // imageSrc: "Formal_pic.jpg",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/damiancxliew",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/damiancxliew/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:damiancxliew@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/damianliew/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with ANN and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux, Vue",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        // "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Lucid Chart",
          fontAwesomeClassname: "simple-icons:lucidchart",
          style: {
            color: "#FF7C00",
          },
        },
        // {
        //   skillName: "Inkscape",
        //   fontAwesomeClassname: "simple-icons:inkscape",
        //   style: {
        //     color: "#000000",
        //   },
        // },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University of Singapore",
      subtitle: "Bachelor in Computer Science",
      logo_path: "nus.png",
      alt_name: "NUS",
      duration: "2024 - 2028",
      descriptions: [
        // "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Deputy Director of the SWE Department in NUS StartIT and Technical Lead of the NUS Fintech Society.",
        "⚡ Was awarded the ASEAN Undergraduate Merit Scholarship, which is offered to outstanding freshmen from ASEAN member countries.",
      ],
      website_link: "https://nus.edu.sg/",
    },
    {
      title: "River Valley High School",
      subtitle: "Singapore Cambridge GCE A Level",
      logo_path: "RV_logo.png",
      alt_name: "RVHS",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ Grade: 8 Distinctions (UAS: 90/90 RP, H3 Distinction)",
        "⚡ Offered H3 Science Research (NTU), H2 Computing, H2 Mathematics, H2 Chemistry, H2 Economics, H1 General Paper, H1 Project Work.",
        "⚡ Conducted research related to Artificial Intelligence, particularly ANN and encoder-decoder models, with NTU professors.",
        "⚡ Was an Exco member of the Junior College Students Council, Mathematics Leaders Academy and River Valley Capture The Flag.",
        "⚡ Was awarded the MOE School-Based Scholarship, which is offered to outstanding high school students from ASEAN member countries",
      ],
      website_link: "https://www.rivervalleyhigh.moe.edu.sg/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cybersecurity Professional Certificate",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/BAPCYO2JFUS0?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Advanced Data Analytics",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/HHA31LI5VC31?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Machine Learning & GenAI",
      subtitle: "- AWS",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1TLVLRajnq-Pz9RD_t9UeYq0d9fZ_JnfK/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#4285F499",
    },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and CCAs",
  description:
    "I have worked with start up as a Software Developer. I have also worked with esteemed tertiary institutions as a Student Researcher. I also love organising events and leading communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Internship",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Rajang Digital Solutions",
          company_url: "https://www.info.rajang.com/",
          logo_path: "rajang logo.png",
          duration: "Mar 2024 - Jun 2024",
          location: "Kuching, Sarawak, Malaysia",
          description:
            "Developed a full-stack Human Resource System using ReactJS, enabling robust employee management and leave application functionalities. Managed the back-end using FastAPI and SocketIO for seamless API integrations and real-time updates, with Docker for containerisation and deployment. Performed security assessments on websites.",
          color: "#000000",
        },
        {
          title: "Student Researcher",
          company: "Nanyang Technological University",
          company_url: "https://www.ntu.edu.sg/",
          logo_path: "ntu.png",
          duration: "Mar 2022 - Feb 2023",
          location: "Singapore",
          description:
            "Participated in the Nanyang Research Programme where I collaborated with Nanyang Technological University on an innovative research project focused on the recognition of handwritten mathematical expressions. Our project aimed to improve the accuracy of the CoMER model, the current state-of-the-art in this field, by integrating a morphological image pre-processing technique called the Erosion filter. This enhancement led to a significant increase in expression recognition rates across multiple datasets (CROHME 2014, 2016, 2019). The modified model, CoMER_Erosion, demonstrated improved performance by effectively extracting distinctive features from input images, proving to be a promising advancement in handwritten mathematical expression recognition technology.",
          color: "#0879bf",
        },
        {
          title: "Student Researcher",
          company: "Nanyang Technological University",
          company_url: "https://www.ntu.edu.sg/",
          logo_path: "ntu.png",
          duration: "Mar 2021 - Feb 2022",
          location: "Singapore",
          description:
            "Participated in the Science Mentorship Programme under the guidance of Prof. Cheong Siew Ann at Nanyang Technological University. Our research focused on evaluating the efficacy of Long Short-Term Memory (LSTM) neural networks in predicting chaotic time series data. We tested the model using time series generated by both simple and chaotic oscillators, such as the Duffing, Rössler, and Lorenz oscillators. Our findings demonstrated that while the LSTM model performed well in static forecasting with high accuracy, it faced challenges in dynamic forecasting scenarios​​.",
          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "CCAs",
      experiences: [
        {
          title: "Deputy Director of SWE Department",
          company: "NUS StartIT",
          company_url: "https://nusstartit.vercel.app/",
          logo_path: "nus.png",
          duration: "Aug 2024 - May 2025",
          location: "Singapore",
          description:
            "NUS StartIT is a community driven by love for IT and technopreneurship. I was responsible for pushing passionate individuals to realise their potential business solutions and mentoring their progress.",
          color: "#4285F4",
        },
        {
          title: "Technical Lead",
          company: "NUS Fintech Society",
          company_url: "https://fintechsociety.comp.nus.edu.sg",
          logo_path: "nus.png",
          duration: "Aug 2024 - May 2025",
          location: "Singapore",
          description:
            "NUS Fintech Society is a community of Fintech enthusiasts looking for opportunities to learn and grow. As a technical lead, I led a team of enthusiast developers to build fintech applications and products.",
          color: "#D83B01",
        },
        {
          title: "Vice President of River Valley Capture The Flag",
          company: "River Valley High School",
          // company_url: "https://www.mozilla.org/",
          logo_path: "RV_logo.png",
          duration: "May 2022 - May 2023",
          location: "Singapore",
          description:
            "RVCTF is a student-led community that gathers cybersecurity enthusiasts. As the Vice President, I helped to organise internal CTF and prepare weekly sessions.",
          color: "#000000",
        },
        {
          title: "Programming Workshop Instructor",
          company: "River Valley High School",
          // company_url:
          //   "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "RV_logo.png",
          duration: "Jan 2022 - May 2023",
          location: "Singapore",
          description:
            "I organised programming workshops on Python and Arduino to help pique students' interests in programming and building impactful innovations.",
          color: "#0C9D58",
        },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. They range from interactive websites to AI research.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Projects",
  // description: "Some of my projects and research work.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Recognition of Handwritten Mathematical Expressions",
      name: "Recognition of Handwritten Mathematical Expressions",
      createdAt: "2022 - 2023T00:00:00Z",
      description:
        "Participated in the Nanyang Research Programme where I collaborated with Nanyang Technological University on an innovative research project focused on the recognition of handwritten mathematical expressions. This experience not only deepened my understanding of neural network architectures but also honed my research and problem-solving skills in a cutting-edge technological domain.",
      // url: "",
    },
    {
      id: "Amazon Web Services (AWS): Build On, ASEAN 2021 Hackathon",
      name: "Amazon Web Services (AWS): Build On, ASEAN 2021 Hackathon",
      createdAt: "2021T00:00:00Z",
      description:
        "Developed a website as a prototype to help encourage people to sell and buy pre-owned products on Carousell. Solution was divided into 3 parts, which are point-based reward system, warranty system and wish-list system. Achieved 1st Runner Up in Junior Category (Singapore)",
      // url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "The Lo-Car",
      name: "The Lo-Car",
      createdAt: "2020 - 2021T00:00:00Z",
      description:
        "Developed a mobile application using MIT App Inventor and Firebase to help forgetful drivers to find the exact location of their parked cars. Achieved Merit Award in the Tan Kah Kee Young Inventors Award.",
      // url: "https://arxiv.org/abs/2307.00653",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Formal_pic_cropped.png",
    description: "",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "21 Lower Kent Ridge Rd, Singapore 119077",
    locality: "Singapore",
    country: "Singapore",
    region: "Singapore",
    postalCode: "119077",
    streetAddress: "21 Lower Kent Ridge Rd",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/mHXWeLWM2VFW1Y2J9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
