export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'technical' | 'soft' | 'language' | 'tool';
  icon?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Education {
  degree: string;
  institution: string;
  Location: string;
  period: string;
  description?: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Contact {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;

}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  skills: Skill[];
  projects: Project[];
  education: Education[];
  experience: Experience[];
  contact: Contact;
}

const resumeData: ResumeData = {
  name: "Sanjjith S",
  title: "Software Developer",
  summary: "Aspiring software engineer with expertise in Problem solving, Aplication and API design, and scalable solutions. Passionate about developing innovative applications and enhancing user experiences through effective and efficient software engineering practices.",
  
  skills: [
    { name: "React", level: 90, category: "technical" },
    { name: "Java", level: 85, category: "technical" },
    { name: "JavaScript", level: 95, category: "technical" },
    { name: "HTML/CSS", level: 90, category: "technical" },
    { name: "Node.js", level: 65, category: "technical" },
    { name: "Python", level: 50, category: "technical" },
    // { name: "Power BI", level: 60, category: "technical" },
    { name: "C/C++", level: 90, category: "technical" },
    { name: "TailwindCSS", level: 85, category: "technical" },
    { name: "Responsive Design", level: 90, category: "technical" },
    { name: "UI/UX Design", level: 70, category: "technical" },
    { name: "Git and Github", level: 95, category: "tool" },
    { name: "Power BI", level: 75, category: "tool" },
    { name: "Tableau", level: 60, category: "tool" },
    { name: "Canva", level: 90, category: "tool" },
    { name: "Gimp", level: 70, category: "tool" },
    { name: "Figma", level: 90, category: "tool" },
    { name: "Problem Solving", level: 95, category: "soft" },
    { name: "Team Collaboration", level: 100, category: "soft" },
    { name: "Communication", level: 97, category: "soft" },
    { name: "Time Management", level: 100, category: "soft" },
  ],
  
  projects: [
    {
      id: 1,
      title: "Euthoria - Music Streaming Platform",
      description:"Personalized music app with curated playlists, recommendations, and offline access—delivering immersive listening experiences across devices in real-time.",

      technologies: ["React", "Node.js", "Express", "MongoDB", "Savan API"],
      image:"https://png.pngtree.com/background/20210711/original/pngtree-purple-minimalist-music-note-banner-background-picture-image_1088853.jpg",
      link: "https://st.depositphotos.com/1007566/3204/v/450/depositphotos_32042851-stock-illustration-work-in-progress.jpg",
      github: "https://st.depositphotos.com/1007566/3204/v/450/depositphotos_32042851-stock-illustration-work-in-progress.jpg"
    },
    {
      id: 2,
      title: "Placement Learnathon Portal",
      description: "Interactive platform for coding challenges, leaderboards, and mentorship—empowering students to prepare collaboratively for campus placements effectively.",
      technologies: ["Django", "HTML", "CSS", "SQLite"],
      image: "https://www.shutterstock.com/image-vector/learn-online-book-digital-futuristic-600nw-2182663111.jpg",
      link: "https://st.depositphotos.com/1007566/3204/v/450/depositphotos_32042851-stock-illustration-work-in-progress.jpg",
      github: "https://st.depositphotos.com/1007566/3204/v/450/depositphotos_32042851-stock-illustration-work-in-progress.jpg"
    },
    {
      id: 3,
      title: "Real-Time Expense Tracker",
      description: "Smart budgeting app with real-time expense tracking, visual analytics, and category insights—helping users manage finances efficiently and effortlessly.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO"],
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230624/pngtree-golden-coins-and-green-money-a-winning-combination-for-financial-investment-image_3663620.jpg",
      link: "https://st.depositphotos.com/1007566/3204/v/450/depositphotos_32042851-stock-illustration-work-in-progress.jpg",
      github: "https://st.depositphotos.com/1007566/3204/v/450/depositphotos_32042851-stock-illustration-work-in-progress.jpg"
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Business Systems",
      institution: "Bannari Amman Institute of Technology",
      Location: "Tamil Nadu, India",
      period: "2021 - 2025",
      description: "Specialized in Computer skills, Business management and analytical skills "
    },
    // {
    //   degree: "Full Stack Web Development Bootcamp",
    //   institution: "Tech Academy",
    //   location: "Online",
    //   period: "2021",
    //   description: "Intensive 12-week program focused on modern web technologies and frameworks."
    // }
  ],
  
  experience: [
    {
      position: "Software Developer",
      company: "NXTSYNC Pvt. Ltd",
      location: "Hyderabad, India",
      period: "May 2025 - Nov 2021",
      description: [
        "Developed and maintained scalable web applications using modern frameworks and technologies.",
        "Collaborated with cross-functional teams to design, test, and deploy software solutions aligned with client requirements.",
        "Optimized code performance, improved system reliability, and implemented version control best practices.",
        "Participated in agile sprints, contributing to continuous integration and deployment processes."
      ]
    }
    
  ],
  
  contact: {
    email: "mailtosanjjithsivashanmugam@gmail.com",
    phone: "+91 9361305849",
    linkedin: "linkedin.com/in/sanjjith/",
    github: "github.com/Sanjjith03",
  }
};

export default resumeData;