import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // For accordion icons
import BackButton from "@/components/BackButton";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "What is the purpose of this platform?",
      answer:
        "Our platform helps users to learn and grow in various subjects by offering curated courses, resources, and a community-driven approach to knowledge-sharing.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "To enroll in a course, simply browse our course catalog, select the course you'd like to take, and click on the 'Enroll' button. You'll be asked to create an account if you don't have one already.",
    },
    {
      question: "Can I access the courses for free?",
      answer:
        "We offer both free and paid courses. Free courses provide valuable content, while premium courses come with advanced materials and personalized support.",
    },
    {
      question: "How do I contact support?",
      answer:
        "For support, visit our 'Contact Us' page or email support@ourplatform.com. Our support team is available 24/7.",
    },
    {
      question: "Can I get a certificate after completing a course?",
      answer:
        "Yes, upon successful completion of a paid course, you will receive a digital certificate that you can share on your resume or LinkedIn profile.",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-4">
      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-300 dark:border-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index }}
            >
              <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center py-3 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {faq.question}
                </h3>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <FaChevronUp className="text-gray-500 dark:text-gray-300" />
                  ) : (
                    <FaChevronDown className="text-gray-500 dark:text-gray-300" />
                  )}
                </motion.div>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <BackButton/>
    </div>
  );
};

export default FAQ;
