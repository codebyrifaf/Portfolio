import Image from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "../assets/icons/check-circle.svg"
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg"
import grainImage from "../assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "DocTime",
    year: "2025 - Running",
    title: "Full Stack Doctor Appointment Booking System Using MERN",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"], // <-- Add this line
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/codebyrifaf/DocTime",
    image: darkSaasLandingPage,
  },
  {
    company: "AnimeSite",
    year: "2024",
    title: "Full-Stack Anime Review Platform",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"], // <-- Add this line
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://github.com/codebyrifaf/AnimeSite",
    image: lightSaasLandingPage,
  },
  {
    company: "Cafeteria Management System",
    year: "2023",
    title: "Student Dining Solution",
    techStack: ["Java", "Spring Boot", "MySQL"], // <-- Add this line
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
 
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader 
      eyebrow="Real-world Results" 
      title="Featured Projects" 
      description="See how I transformed concepts into engaging digital Experiences."/>
     
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map((project,projectIndex) =>(
          <Card 
          key={project.title} 
          className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky " 
          style={{
            top:`calc(64px + ${projectIndex * 40}px)`,
          }}>

            
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">

                <div className="bg-gradient-to-tr from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
                </div>

              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                {project.title}
              </h3>
              {/* Tech stack display */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-emerald-300/20 text-emerald-300 px-2 py-0.5 rounded text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result,index)=>(
                  <li key={index}className="flex gap-2 text-sm md:text-base text-white/50">
                    <CheckCircleIcon className="size-5 md:size-6" />
                    <span>{result.title}</span></li>
                ))}
              </ul>
              <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                <span>Visit</span>
                <ArrowUpRightIcon className="size-4"/>
                </button>
              </a>
              </div>
              <div>
              <Image 
              src={project.image} 
              alt={project.title} 
              className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/></div>
              </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
};

