/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sharad Ishi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sharad Ishi Portfolio",
    type: "website",
    url: "http://sharadishi.me/",
  },
};

//Home Page
const greeting = {
  title: "Sharad Ishi",
  logo_name: "sharadishi",
  nickname: "Front-End Enginneer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://mega.nz/file/mBABnATK#EMhwchaG57tHWtkL_KMqj9ZOZ20QmzBLQvgxeV07E3I",
  portfolio_repository: "https://github.com/sharadishi/MyMasterPortFolio",
  githubProfile: "https://github.com/sharadishi",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/sharadishi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sharad-aeshi-699728107/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sharad09ishi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ishi_sharad",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/sharadishi",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sharad_ishi_09/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Front End Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bulma",
          fontAwesomeClassname: "simple-icons:bulma",
          style: {
            color: "#00D1B2",
          },
        },
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#c66394",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          // style: {
          //   color: "#2C8EBB",
          // },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "ANT Design",
          fontAwesomeClassname: "simple-icons:antdesign",
          style: {
            color: "#30a4ff",
          },
        },
        {
          skillName: "Material-UI",
          fontAwesomeClassname: "simple-icons:mui",
          style: {
            color: "#237fff",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Adnroid",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3bb273",
        //   },
        // },
      ],
    },
    {
      title: "Deployment & Hosting",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hosting and maintaining websites on live URLs along with integration of databases",
        "⚡ Deploying websites and custom domains using Netlify",
        "⚡ Setting up FTP and do live changes to websites",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#3bc2b1",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "Github Pages",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "Go Daddy",
          fontAwesomeClassname: "simple-icons:godaddy",
          style: {
            color: "#000",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ I also have little bit knowledge about UI/UX designing",
        "⚡ Creating the flow of application functionalities to optimize user experience in Figma",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "cib:adobe-photoshop",
          style: {
            color: "#30a3f7",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "cib:adobe-illustrator",
          style: {
            color: "#f19503",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "ci:adobe-xd",
          style: {
            color: "#450135",
          },
        },
        {
          skillName: "Sketch",
          fontAwesomeClassname: "simple-icons:sketch",
          style: {
            color: "rgb(253, 173, 0)",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "SoloLearn",
      iconifyClassname: "simple-icons:sololearn",
      style: {
        color: "#149EF2",
      },
      profileLink: "https://www.sololearn.com/profile/7700984",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0056D2",
      },
      profileLink: "",
    },
    {
      siteName: "Cisco",
      iconifyClassname: "simple-icons:cisco",
      style: {
        color: "#1BA0D7",
      },
      profileLink: "",
    },
    {
      siteName: "Oracle",
      iconifyClassname: "simple-icons:oracle",
      style: {
        color: "#F80000",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Pacific School of Engineering",
      subtitle: "Bachlore of Engineering",
      logo_path: "pse_logo_120.png",
      alt_name: "pu",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, JAVA, IS etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Advance JAVA, Internet security and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://www.pacific-soe.ac.in/",
    },
    // {
    //   title: "Veer Narmad South Gujarat University",
    //   subtitle: "Bachelor of Computer Application",
    //   logo_path: "vnsgu.jpg",
    //   alt_name: "vnsgu",
    //   duration: "2016 - 2019",
    //   descriptions: [
    //     "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
    //     "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
    //     "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
    //   ],
    //   website_link: "http://paruluniversity.ac.in",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Cybersecurity ",
      subtitle: "- Cisco Networking Academy",
      logo_path: "cisco.png",
      certificate_link: "",
      alt_name: "cisco",
      color_code: "#c8f7f5",
    },
    {
      title: "Google Analytics for Beginners",
      subtitle: "- Google Analytics Academy",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#fcd5d7",
    },
    {
      title: "International Cyber Conflicts",
      subtitle: "- State University Of New York",
      logo_path: "coursera_logo.png",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Git & Github",
      subtitle: "",
      logo_path: "udemy.png",
      certificate_link: "",
      alt_name: "udemy",
      color_code: "#FFBB0099",
    },
    {
      title: "Understanding the RF Path",
      subtitle: "- CommScope",
      logo_path: "CommScope-logo.jpg",
      certificate_link: "",
      alt_name: "Stanford University",
      color_code: "#fff",
    },

    {
      title: "Java Innovations Badge",
      subtitle: "- Oracle",
      logo_path: "oracle.jpg",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#f60003",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship ",
  description:
    "I have worked with many evolving startups as Web Developer, Designer and Software Architect. I have also worked with some well established companies mostly as Android Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Front-End Engineer",
          company: "La Net Team Software Solutions PVT. LTD.",
          company_url: "https://lanetteam.com/  ",
          logo_path: "lanet.jpeg",
          duration: "Jan 2018 - PRESENT",
          location: "Surat, Gujarat",
          description:
            "I am working on HTML5, CSS3, SASS, JS, BOOTSTRAP, TAILWIND, MUI,  ReactJS etc.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Android Developer",
          company: "Eastern techno solution",
          company_url: "https://www.easternts.com/ ",
          logo_path: "easternicon.png",
          duration: "2016 - 2017",
          location: "Surat, Gujarat",
          description: "I am working on @home Event planner app.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Training",
      experiences: [
        {
          title: "Web Developer",
          company: "Signify infotech",
          company_url: "http://www.signifyinfotech.com/",
          logo_path: "signify.jpeg",
          duration: "Jan 2017 - 2018",
          location: "Work From Office",
          description: "I am Done by many projects and Ebay stores Design.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Template and EBay store template design.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "user-p.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with your query.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Punagam, Surat , Gujarat - 395010",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://earth.google.com/web/search/202,+shreenathji+soc,+kargil+chowk,+punagam,+surat/@21.20935959,72.87703412,16.52491084a,217.76112506d,35y,143.3571547h,44.99517255t,359.99999879r/data=Cp0BGnMSbQolMHgzYmUwNGY3NDkzZjI5NmY5OjB4MmMyMTlkMWE5MDAxM2E2ZRn1JFWAlDU1QCEejZ62IThSQCoyMjAyLCBzaHJlZW5hdGhqaSBzb2MsIGthcmdpbCBjaG93aywgcHVuYWdhbSwgc3VyYXQYAiABIiYKJAnBWNBK4DMzQBG_WNBK4DMzwBkgf5r3ExgkwCH7gjxnrIpbwA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 777 8910 717",
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
  contactPageData,
};
