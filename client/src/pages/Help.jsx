import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Accordion Icons
import { Link } from "react-router-dom";
import BackButton from "@/components/BackButton";

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "To create an account, click the 'Sign Up' button on the homepage and follow the instructions.",
        },
        {
          question: "How do I reset my password?",
          answer:
            "Click the 'Forgot Password' link on the login page, and we will send you instructions to reset your password.",
        },
      ],
    },
    {
      title: "Courses & Enrollment",
      questions: [
        {
          question: "How do I enroll in a course?",
          answer:
            "Simply browse the course catalog, select the course, and click 'Enroll'. You’ll need to create an account if you don't have one.",
        },
        {
          question: "Can I access the course materials after completion?",
          answer:
            "Yes! Once you complete a course, you can access the materials anytime from your dashboard.",
        },
      ],
    },
    {
      title: "Payments & Billing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept credit cards, PayPal, and other popular payment methods. For more details, visit the payments page.",
        },
        {
          question: "How do I update my billing information?",
          answer:
            "You can update your billing information in the 'Billing' section of your profile settings.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 min-h-screen">
      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Help Center
        </h2>

        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
          Welcome to our Help Center! Find answers to common questions, or browse through topics for assistance.
        </p>

        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="border-t border-gray-300 dark:border-gray-700 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * categoryIndex }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <motion.div
                    key={faqIndex}
                    className="border-b border-gray-300 dark:border-gray-700 pb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * faqIndex }}
                  >
                    <div
                      onClick={() => toggleAccordion(faqIndex)}
                      className="flex justify-between items-center cursor-pointer py-3"
                    >
                      <h4 className="text-lg text-gray-800 dark:text-white">{faq.question}</h4>
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: activeIndex === faqIndex ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {activeIndex === faqIndex ? (
                          <FaChevronUp className="text-gray-500 dark:text-gray-300" />
                        ) : (
                          <FaChevronDown className="text-gray-500 dark:text-gray-300" />
                        )}
                      </motion.div>
                    </div>
                    {activeIndex === faqIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="text-blue-600 hover:text-blue-800">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg"
            >
              Contact Support
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <BackButton/>
    </div>
  );
};

export default HelpCenter;
