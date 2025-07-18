"use client";
import { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "../assets/icons/star.svg";
import bookImage from "../assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "../assets/icons/square-js.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import CssIcon from "../assets/icons/css3.svg";
import ReactIcon from "../assets/icons/react.svg";
import GithubIcon from "../assets/icons/github.svg";
import JavaIcon from "../assets/icons/java.svg";
import CplusIcon from "../assets/icons/Cplus.svg";
import PythonIcon from "../assets/icons/python.svg";
import C from "../assets/icons/c.svg";
import CsharpIcon from "../assets/icons/csharp.svg";
import ExjsIcon from "../assets/icons/expressjs.svg";
import NodeIcon from "../assets/icons/square-js.svg"
import AspIcon from "../assets/icons/aspnet-svgrepo-com.svg";
import OracleIcon from "../assets/icons/icons8-oracle-256.svg";
import MongoIcon from "../assets/icons/mongo.svg";
import VercelIcon from "../assets/icons/vercel.svg";
import Docker from "../assets/icons/docker.svg";
import Yarn from "../assets/icons/yarn.svg";
import UnityIcon from "../assets/icons/unity.svg";
import AdobeIcon from "../assets/icons/adobe-light-room-cc-svgrepo-com.svg";
import AWSICon from "../assets/icons/aws-svgrepo-com.svg";
import AzureIcon from "../assets/icons/azure-svgrepo-com.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "../assets/images/map.png";
import smileMemoji from "../assets/images/memoji-smile.png";
import { title } from "process";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";




const toolboxItems=[
  {
  title: "JavaScript",
  iconType: JavascriptIcon,
  },
  {
  title: "HTML5",
  iconType: HTMLIcon,
  },
  {
  title: "'CSS3'",
  iconType: CssIcon,
  },
  {
  title: "React",
  iconType:ReactIcon,
  },
  {
  title: "Java",
  iconType: JavaIcon,
  },
  {
  title: "Python",
  iconType: PythonIcon,
  },
  {
  title:"C++",
  iconType: CplusIcon,
  },
  {
  title: "C",
  iconType: C,
  },
  
  {
  title: "C#",
  iconType: CsharpIcon,
  },
  {
  title: "Express.js",
  iconType: ExjsIcon,
  },
  {
  title: "Node.js",
  iconType: NodeIcon,
  },
  {
  title:"ASP.NET",
  iconType: AspIcon,
  },
  {
  title: "Oracle",
  iconType: OracleIcon,
  },
  {
  title: "MongoDB",
  iconType: MongoIcon,
  },
  {
  title: "Vercel",
  iconType: VercelIcon,
  },
  {
  title: "Docker",
  iconType: Docker,
  },
  {
  title: "Git",
  iconType: GithubIcon,
  },
  {
  title: "Yarn",
  iconType: Yarn,
  },
  {
  title: "Unity",
  iconType: UnityIcon,
  },
  {
  title: "Adobe Lightroom",
  iconType:AdobeIcon,
  },
  {
  title: "AWS",
  iconType: AWSICon,
  },
  {
  title:"Azure",
  iconType: AzureIcon,
  },

  
];

const hobbies =[
  {
    title: 'Painting',
    emoji: '🎨',
    left: "5%",
    top: "75%",
  },
  {
    title: 'Photography',
    emoji: '📷',
     left: "50%",
    top: "5%",
  },
  {
    title: 'Gaming',
    emoji: '🎮',
     left: "10%",
    top: "35%",
  },
  {
    title: 'Traveling',
    emoji: '🏕️',
     left: "35%",
    top: "40%",
  },
  {
    title: 'Music',
    emoji: '🎵',
     left: "70%",
    top: "45%",
  },
  {
    title: 'Body Building',
    emoji: '🏋️‍♂️',
     left: "",
    top: "",
  },
  {
    title: 'Football',
    emoji: '⚽︎',
     left: "45%",
    top: "70%",
  },

]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
  
  <div id="about" className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader
    eyebrow="About Me" 
    title="A Glipse Into My World" 
    description="Learn More about Who I am and what I do and what inspires me"/>
  
  <div className="mt-20 flex flex-col gap-8">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
    <Card className="h-[360px] md:col-span-2 lg:col-span-1">
      <CardHeader 
      title="My Reads" 
      description="Papers that inspire my thinking and projects" />
      
      <div className="w-40 mx-auto mt-2 md:mt-0">
      <Image src={bookImage} alt="Book Cover"/></div>
  </Card>

  <Card className="h-[360px] md:col-span-3 lg:col-span-2">
    <CardHeader 
    title="My Toolbox" 
    description="Explore the technologies and tools i use to craft digital experience" 
    
    />
      
      <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
      <ToolboxItems 
      items={toolboxItems} 
      className="mt-6"
      itemsWrapperClassName="animate-move-right [animation-duration:30s]"
      />

  </Card>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
  <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
    <CardHeader 
    title="Beyond the Code" 
    description="Explore my interest and Hobbies beyond the Digital Realm" 
    className="px-6 py-6"/>
    <div className="relative flex-1" ref={constraintRef}>
        {hobbies.map(hobby=>(
          <motion.div
          key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" 
          style={{
            left:hobby.left,
            top:hobby.top,
          }}
          drag
          dragConstraints= {constraintRef}
          >
            <span className="font-medium text-gray-950">{hobby.title}</span>
            <span>{hobby.emoji}</span>
          </motion.div>
        ))}
      </div>
  </Card>
  <Card className="h-[320px] p-0 relative overflow-hidden md:col-span-2 lg:col-span-1">
  <div className="absolute inset-0 -z-10">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7497557.515423627!2d85.05149335293696!3d23.427374067522862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1752511667566!5m2!1sen!2sbd"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 p-px flex items-center justify-center animate-pulse">
      <div className="size-[76px] rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
        <Image
          src={smileMemoji}
          alt="Smiling memoji"
          className="size-16 rounded-full"
        />
      </div>
    </div>
  </div>
</Card>
</div>
  </div>
  </div>
  </div>
  );
};
