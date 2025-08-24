import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        {/* صورة شخصية */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/src/assets/Ziad.jpg"
            alt="Profile"
            className="rounded-2xl shadow-2xl border-4 border-indigo-400 dark:border-indigo-600"
          />
        </motion.div>

        {/* النص */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I’m <span className="font-semibold text-indigo-500">Ziad Mohamed</span>, 
            a passionate <span className="font-semibold">Frontend Developer</span> with{" "}
            <span className="font-semibold text-pink-500">2 years of experience</span> 
            building modern web applications using React and Next.js.  
            <br />
            <br />
            I love crafting <span className="underline decoration-indigo-400">clean</span>, 
            <span className="underline decoration-pink-400"> user-friendly</span>, and 
            <span className="underline decoration-purple-400"> responsive</span> designs 
            that deliver great experiences.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#skills"
              className="px-6 py-3 bg-indigo-500 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition"
            >
              My Skills
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl shadow-lg hover:scale-105 transition"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
