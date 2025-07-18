"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";

// Import icons
import ProjectIcon from "../assets/icons/sparkle.svg";
import GithubIcon from "../assets/icons/github.svg";
import ReactIcon from "../assets/icons/react.svg";
import CodeIcon from "../assets/icons/square-js.svg";

const achievements = [
  {
    icon: ProjectIcon,
    value: "20+",
    label: "Projects Completed",
    description: "Full-stack applications & systems built"
  },
  {
    icon: GithubIcon,
    value: "15+",
    label: "GitHub Repositories",
    description: "Open source contributions & personal projects"
  },
  {
    icon: ReactIcon,
    value: "10+",
    label: "Technologies Mastered",
    description: "Modern frameworks & development tools"
  },
  {
    icon: CodeIcon,
    value: "3+",
    label: "Years of Experience",
    description: "Professional software development"
  }
];

const additionalMetrics = [
  {
    value: "100%",
    label: "Project Success Rate",
    description: "Delivered on time & within scope"
  },
  {
    value: "5+",
    label: "Programming Languages",
    description: "Java, C#, JavaScript, Python, C++"
  },
  {
    value: "24/7",
    label: "Code Enthusiast",
    description: "Always learning & improving"
  }
];

export const AchievementsSection = () => {
  return (
    <div className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text mb-4">
            <span>Software Engineering</span>
            <span>&bull;</span>
            <span>Achievements</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
            Development Milestones
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Highlighting key achievements and metrics from my software engineering journey
          </p>
        </div>

        {/* Main Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <Card className="p-6 bg-gray-800 border-gray-700 hover:border-emerald-300/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-300/20 hover:bg-gray-750 cursor-pointer h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-6 p-4 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <achievement.icon className="size-8 text-gray-900 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 mb-3 group-hover:scale-105 transition-transform duration-300">
                    {achievement.value}
                  </div>
                  <div className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {achievement.description}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <Card className="p-8 bg-gray-800 border-gray-700 hover:border-emerald-300/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-300/20 hover:bg-gray-750 cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {metric.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
