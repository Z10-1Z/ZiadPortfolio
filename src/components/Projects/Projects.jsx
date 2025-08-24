import React from "react";
import { motion } from "framer-motion";  // eslint-disable-line

const projects = [
  {
    title: "ToDo List App",
    description: "A simple and responsive ToDo app built with React for task management.",
    image: "/src/assets/Screenshot (127).png",
    demo: "https://to-do-list-sigma-two-37.vercel.app/",
    code: "https://github.com/Z10-1Z/ToDoList",
  },
  {
    title: "Landing Page",
    description: "Modern and responsive landing page using React and TailwindCSS.",
    image: "/src/assets/Screenshot (128).png",
    demo: "https://project-2-theta-nine.vercel.app/",
    code: "https://github.com/Z10-1Z/Project_2",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, TailwindCSS, and animations.",
    image: "/src/assets/Screenshot (129).png",
    demo: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12"
        >
          My <span className="text-indigo-500">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
