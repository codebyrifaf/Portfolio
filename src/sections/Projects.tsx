"use client";
import Image from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "../assets/icons/check-circle.svg"
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg"
import grainImage from "../assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import craftedsoulpage from "@/assets/images/craftedsoulpage.png";
import hms from "@/assets/images/hms.png";
import anime from "@/assets/images/anime.png";
import app from "@/assets/images/app.png";
import { motion } from "framer-motion";
const portfolioProjects = [
  {
    company: "Docschedule",
    year: "2025 - Running",
    title: "Full Stack Doctor Appointment Booking System Using MERN",
    techStack: ["Mern Stack", "Express.js", "React", "Node.js", "MongoDB"],
    results: [
      { title: "Built a booking system with role-based access for doctors and patients." },
      { title: "Designed a doctor dashboard for schedule management and patient communication." },
      { title: "Developed a responsive React frontend with a powerful Node.js, Express, and MongoDB backend." },
    ],
    link: "https://github.com/codebyrifaf/DocTime",
    liveDemo: "https://docschedule.vercel.app/", 
    image: hms,
  },
  {
    company: "Foodex",
    year: "2025",
    title: "Restaurant-Specific Food Ordering & Delivery App ",
    techStack: ["React Native", "Appwrite (Auth, Database, Storage)", "Context API", "Responsive UI"], // <-- Add this line
    results: [
      { title: "Built a modular voxel engine with chunks, procedural biomes, and block interaction." },
      { title: "Added threaded loading, dynamic lighting, and optimized textures for performance." },
      { title: "Designed scalable block systems, custom UI, and planned multiplayer support." },
    ],
    link: "https://github.com/codebyrifaf/Foodex",
    image: app,
  },
  {
    company: "Crafted Soul",
    year: "2025",
    title: "Responsive eCommerce Website ",
    techStack: ["HTML5", "CSS3", "JavaScript,", "Responsive Design"], // <-- Add this line
    results: [
      { title: "Developed a full-featured mobile app for single-restaurant food ordering and delivery." },
      { title: "Used Appwrite for auth, real-time DB, and media storage integration." },
      { title: "Built responsive UI and managed state globally with Context API." },
    ],
    link: "https://github.com/codebyrifaf/Crafted-Soul",
    liveDemo: "https://crafted-soul.vercel.app/",
    image: craftedsoulpage,
  },
  {
    company: "PixelForge",
    year: "2023",
    title: "Modular Procedural Voxel Engine Game in Unity",
    techStack: ["C#", "Unity", "Procedural Generation", "Multi Threading", "Custom Shaders", "ECS"],
    results: [
      { title: "Built a modular voxel engine with chunks, procedural biomes, and block interaction." },
      { title: "Added threaded loading, dynamic lighting, and optimized textures for performance." },
      { title: "Designed scalable block systems, custom UI, and planned multiplayer support." },
    ],
    link: "https://github.com/codebyrifaf/PixelForge-A-voxel-Based-Game-",
    demo: "https://drive.google.com/file/d/1NmiPXRTpRsb24hKkGToyHRe-UY7W9sQc/view", 
    image: darkSaasLandingPage,
  },
  {
    company: "AnimeSite",
    year: "2024",
    title: "Full-Stack Anime Review Platform",
    techStack: ["ASP.NET MVC (C#)", "CSHTML", "Oracle SQL","AniList API"], // <-- Add this line
    results: [
      { title: "Built a web app to explore anime, voice actors, and directors." },
      { title: "Added reviews with voting, auth, and full CRUD features." },
      { title: "Integrated AniList API and used Oracle SQL for backend." },
    ],
    link: "https://github.com/codebyrifaf/AnimeSite",
    image: anime,
  },
  {
    company: "Cafeteria Management System",
    year: "2023",
    title: "Student Dining Solution",
    techStack: ["Java", "Spring Boot", "MySQL"], // <-- Add this line
    results: [
      { title: "Built a web platform for managing academic projects." },
      { title: "Added modules for announcements, progress tracking, teams, and grading." },
      { title: "Streamlined collaboration between supervisors and students." },
    ],
    link: "https://github.com/codebyrifaf/Cafeteria-Management-System",
    image: aiStartupLandingPage,
  },
  {
    company: "ConsoleBased ATM ",
    year: "2023",
    title: "Java Console Banking System",
    techStack: ["Java", "Object-Oriented Programming", "File I/O", "Modular Design"], // <-- Add this line
    results: [
      { title: "Developed a modular ATM system with features like authentication, account management, transactions, and admin control." },
      { title: "Implemented real-time file-based data persistence for users, accounts, loans, and transaction history." },
      { title: "Applied OOP principles to organize code into services, managers, and executors for clean, scalable architecture." },
    ],
    link: "https://github.com/codebyrifaf/ConsoleBased_ATM",
    image: aiStartupLandingPage,
  },
  {
    company: "Lonely T-Rex",
    year: "2023",
    title: "Endless Runner Game",
    techStack: ["C#", "Windows Forms", "OOP", "Game Physics"], // <-- Add this line
    results: [
      { title: "Developed an infinite side-scroller where the player controls a T-Rex to jump over obstacles and score points." },
      { title: "Simulated gravity and jump mechanics using force calculations and timer-based animation." },
      { title: "Handled collision detection, score tracking, and game reset logic through key events and object interaction." },
    ],
    link: "https://github.com/codebyrifaf/GAME",
    image: aiStartupLandingPage,
  },
  
  
 
  
];

export const ProjectsSection = () => {
  return (
    <div id="projects" className="py-16 lg:py-24"> {/* Make sure this ID is here */}
    <div className="container">
      <SectionHeader 
      eyebrow="Real-world Results" 
      title="Featured Projects" 
      description="See how I transformed concepts into engaging digital Experiences."/>
     
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map((project,projectIndex) =>(
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 hover:shadow-xl hover:shadow-emerald-300/10 transition-all duration-300 hover:border-emerald-300/20 group">

              
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">

                  <div className="bg-gradient-to-tr from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                  </div>

                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl group-hover:text-emerald-300 transition-colors duration-300">
                  {project.title}
                </h3>
                {/* Tech stack display */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-emerald-300/20 text-emerald-300 px-2 py-0.5 rounded text-xs font-semibold hover:bg-emerald-300/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5 group-hover:border-emerald-300/20 transition-colors duration-300"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result,index)=>(
                    <li key={index} className="flex gap-2 text-sm md:text-base text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      <CheckCircleIcon className="size-5 md:size-6 group-hover:text-emerald-300 transition-colors duration-300" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full sm:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-emerald-100 hover:scale-105 transition-all duration-200">
                      <span>View Code</span>
                      <ArrowUpRightIcon className="size-4"/>
                    </button>
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <button className="bg-emerald-300 text-gray-950 h-12 w-full sm:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-emerald-400 hover:scale-105 transition-all duration-200">
                        <span>Live Demo</span>
                        <ArrowUpRightIcon className="size-4"/>
                      </button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <button className="bg-sky-400 text-gray-950 h-12 w-full sm:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-sky-500 hover:scale-105 transition-all duration-200">
                        <span>Demo</span>
                        <ArrowUpRightIcon className="size-4"/>
                      </button>
                    </a>
                  )}
                </div>
                </div>
                <div className="relative lg:pb-16">
                <Image 
                src={project.image} 
                alt={project.title} 
                className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:mb-0 rounded-2xl w-full h-auto object-cover lg:h-full lg:object-contain group-hover:shadow-lg group-hover:shadow-emerald-300/20 transition-shadow duration-300"/>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  );
};

