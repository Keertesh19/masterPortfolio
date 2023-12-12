/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Keertesh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Keertesh Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Keertesh",
  logo_name: "Keertesh",
  nickname: "keertesh19",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/14dJZvz-tIJTIi25pTnM9NRMlkgOUhavd/view?usp=sharing",
  portfolio_repository: "https://github.com/keertesh19/",
  githubProfile: "https://github.com/keertesh19",
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
    link: "https://github.com/keertesh19",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/keertesh-1ba876201/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:keertesh.k98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/keertesh.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/keertesh.19/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Networking & IT",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Acquired expertise in designing and implementing scalable network infrastructures, combining on-premises and cloud solutions for improved performance.",
        "⚡ Developed skills in implementing security measures, including firewalls and encryption, to protect networks against cyber threats.",
        "⚡ Learned automation and scripting in Python, enhancing efficiency by automating routine tasks in network management.",
      ],
      softwareSkills: [
        {
          skillName: "Bash",
          fontAwesomeClassname: "devicon:bash",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "CiscoPacketTracer",
          fontAwesomeClassname: "simple-icons:cisco",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "skill-icons:linux-light",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "vmWare",
          fontAwesomeClassname: "simple-icons:vmware",
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
          skillName: "Server Management",
          fontAwesomeClassname: "bi:server",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        // "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node & Express",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Node",
          fontAwesomeClassname: "akar-icons:node-fill",
          style: {
            color: "#2C8EBB",
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
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
    },

    {
      siteName: "Coursera",
      iconifyClassname: "logos:coursera",
      style: {
        color: "#1F8ACB",
      },
    },
    {
      siteName: "Udemy",
      iconifyClassname: "logos:udemy-icon",
      style: {
        color: "#1F8ACB",
      },
    },
    {
      siteName: "IBM",
      iconifyClassname: "logos:ibm",
      style: {
        color: "#1F8ACB",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "George Brown College",
      subtitle: "Computer Systems Technician (T141)",
      logo_path: "gbc_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "September 2022 - April 2024",
      descriptions: [
        "⚡ Acquired expertise in designing and implementing scalable network infrastructures, combining on-premises and cloud solutions for improved performance.",
        "⚡ Developed skills in implementing security measures, including firewalls and encryption, to protect networks against cyber threats.",
        "⚡ Learned automation and scripting in Python, enhancing efficiency by automating routine tasks in network management.",
      ],
      website_link: "http://georgebrown.ca",
    },
    {
      title: "Indo-Swiss Training Center",
      subtitle: "Diploma in Electronics Engineering",
      logo_path: "ISTC_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ Proficient in designing and analyzing electronic circuits, utilizing tools like SPICE for simulation.",
        "⚡ Experienced in programming microcontrollers (e.g., Arduino, PIC) for diverse applications in embedded systems and IoT.",
        "⚡ Skilled in PCB design using tools like Altium, Eagle, and KiCad, ensuring manufacturability and functionality.",
        "⚡ Competent in electronic testing equipment and adept at troubleshooting and debugging electronic circuits.",
        "⚡ Developed embedded systems integrating sensors, actuators, and communication modules for real-time applications.",
        "⚡ Designed power electronics circuits, including converters and power supplies, for efficient energy management in electronic systems.",
      ],
      website_link: "https://istc.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "I am working with Subway Sandwiches as Senior Sandwich artist taking good care of food standards and serving customers with closing and managing the store efficiently. I have also worked with Rank robotics to learn how PLC installation works and how to cofigure them to implement industrial automation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Sandwich Artist",
          company: "Subway Sandwiches",
          company_url: "https://subway.com/",
          logo_path: "subway.jpg",
          duration: "October 2022 - Current",
          location: "Toronto, ON",
          description:
            "As a Senior Sandwich Artist at Subway, I bring leadership to the team, ensuring our sandwiches meet the highest quality and service standards. Leveraging my advanced knowledge of recipes and procedures, I contribute to a positive customer experience while guiding and supporting my fellow team members.",
          color: "#0879bf",
        },
        {
          title: "PLC Programmer",
          company: "Rank Robotics Pvt. Ltd.",
          company_url: "https://rankrobotics.com/",
          logo_path: "download.png",
          duration: "July 2021 - November 2022",
          location: "Chandigarh, India",
          description:
            "As a PLC Programmer in our company, I specialize in designing and implementing programmable logic controller (PLC) systems. My role involves crafting efficient and reliable control solutions, ensuring seamless automation across various processes. I contribute to optimizing production workflows and maintaining a high level of precision in our industrial operations.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "PLC Programming Intern",
          company: "Mitsubishi Electric Inc.",
          company_url:
            "https://www.mitsubishielectric.com/fa/products/cnt/plc/",
          logo_path: "download.png",
          duration: "May 2020 - Aug 2020",
          location: "India",
          description:
            "In my PLC Programmer Internship, I actively contribute to the development and refinement of programmable logic controller (PLC) systems. Under guidance, I gain hands-on experience in designing and troubleshooting automation solutions, providing valuable support to enhance industrial processes",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mypic.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "268 Weston Rd, Toronto, ON M6N 3P5",
    province: "ON",
    country: "CA",
    region: "Toronto",
    postalCode: "M6N 3P5",
    streetAddress: "268 Weston Rd",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/GXP8FRpyPoJbsRQk8",
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
