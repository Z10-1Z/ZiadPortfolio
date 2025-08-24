import React from "react";
import { motion } from "framer-motion";  // eslint-disable-line
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" size={50} /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" size={50} /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={50} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={50} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" size={50} /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-teal-400" size={50} /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" size={50} /> },
  { name: "GitHub", icon: <FaGithub className="text-red-500" size={50} /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12"
        >
          My <span className="text-indigo-500">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              {skill.icon}
              <p className="mt-3 text-gray-700 dark:text-gray-200 font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
