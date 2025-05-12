import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";

const AboutUs = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}            
          transition={{ duration: 1 }}
        >
            <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-center text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md"
                >
                  About us
                </motion.h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We are dedicated to empowering learners around the world by providing top-notch educational content and resources.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Our Mission</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Our mission is to provide high-quality, accessible, and affordable courses that help people reach their full potential.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Our Values</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              We believe in inclusivity, creativity, and collaboration. We strive to make education accessible to everyone, everywhere.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Our Story</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Founded in 2020, we started as a small group of passionate educators. Today, we serve thousands of learners worldwide.
            </p>
          </motion.div>
        </div>

        <BackButton />

        {/* Team Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Meet Our Team</h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our team is a diverse group of educators, creators, and innovators dedicated to changing the face of education. We work tirelessly to ensure the best quality learning experience for all.
          </p>
        </motion.div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Join us on our mission to make learning accessible, fun, and impactful for all.
          </motion.p>

          <motion.div
            className="mt-8 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a
              href="/contact"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
            >
              Get in Touch
            </a>
            <a
              href="/course/search?query="
              className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all"
            >
              Explore Courses
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
