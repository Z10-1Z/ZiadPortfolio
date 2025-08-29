import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-6 
                 bg-gradient-to-br from-gray-100 via-black to-gray-200 
                 dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="p-10 md:p-16 rounded-2xl shadow-2xl 
                   bg-white/20 dark:bg-gray-800/40 
                   backdrop-blur-xl border border-white/30 dark:border-gray-700/50 
                   max-w-3xl"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold 
                     bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 
                     bg-clip-text text-transparent leading-tight"
        >
          Hi, I’m ZIAD MOHAMED
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-500 dark:text-gray-300"
        >
          Front-End Developer specializing in{" "}
          <span className="font-semibold text-indigo-500 dark:text-indigo-300">
            React.js
          </span>{" "}
          and{" "}
          <span className="font-semibold text-pink-500 dark:text-pink-300">
            Next.js
          </span>
          . Passionate about crafting modern, responsive web apps.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex flex-col md:flex-row justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 
                       text-white rounded-xl shadow-lg 
                       transition transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-white rounded-xl shadow-lg 
                       border border-gray-300 dark:border-gray-900 
                       transition transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
