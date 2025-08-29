import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-3xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12"
        >
          Contact <span className="text-indigo-500">Me</span>
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/xnnbagya"
          method="POST"
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-200 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-200 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-200 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition"
          >
            Send Message
          </button>
        </motion.form>

        <div className="text-center mt-10 text-gray-600 dark:text-gray-300">
          <p>Or reach me directly at:</p>
          <a
            href="mailto:ziadmohammed399@gmail.com"
            className="text-indigo-500 font-semibold hover:underline"
          >
            ziadmohammed399@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
