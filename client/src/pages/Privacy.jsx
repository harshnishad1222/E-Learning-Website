import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Icon for checked points
import BackButton from "@/components/BackButton";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 min-h-screen">
      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Privacy Policy
        </h2>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          This Privacy Policy outlines how we collect, use, and protect your information when you use our platform.
        </motion.p>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section 1: Introduction */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              1. Introduction
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This Privacy Policy governs your access to and use of our services. By using our platform, you agree to the collection and use of your information in accordance with this policy.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              2. Information We Collect
            </h3>
            <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <FaCheckCircle className="inline-block text-blue-600 dark:text-blue-400 mr-2" />
                Personal Information: Name, email address, and other contact details you provide when you register.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <FaCheckCircle className="inline-block text-blue-600 dark:text-blue-400 mr-2" />
                Usage Data: Information about how you interact with our platform, including device data, IP address, and browser type.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <FaCheckCircle className="inline-block text-blue-600 dark:text-blue-400 mr-2" />
                Cookies: We use cookies to track your preferences and improve user experience.
              </motion.li>
            </ul>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              3. How We Use Your Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <FaCheckCircle className="inline-block text-blue-600 dark:text-blue-400 mr-2" />
                To provide and improve our services.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <FaCheckCircle className="inline-block text-blue-600 dark:text-blue-400 mr-2" />
                To communicate with you regarding your account and updates.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <FaCheckCircle className="inline-block text-blue-600 dark:text-blue-400 mr-2" />
                To analyze user behavior and improve platform features.
              </motion.li>
            </ul>
          </section>

          {/* Section 4: Data Protection */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              4. Data Protection
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We implement a variety of security measures to ensure the safety of your personal information, including encryption, firewalls, and secure access protocols.
            </p>
          </section>

          {/* Section 5: Sharing Your Information */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              5. Sharing Your Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We do not sell, trade, or otherwise transfer your personal data to third parties without your consent, except in the following situations:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <FaCheckCircle className="inline-block text-blue-600 dark:text-blue-400 mr-2" />
                With service providers who assist us in operating our platform.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <FaCheckCircle className="inline-block text-blue-600 dark:text-blue-400 mr-2" />
                When required by law or in response to a legal request.
              </motion.li>
            </ul>
          </section>

          {/* Section 6: Your Rights */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              6. Your Rights
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <FaCheckCircle className="inline-block text-blue-600 dark:text-blue-400 mr-2" />
                Right to access and update your personal data.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <FaCheckCircle className="inline-block text-blue-600 dark:text-blue-400 mr-2" />
                Right to request the deletion of your data.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <FaCheckCircle className="inline-block text-blue-600 dark:text-blue-400 mr-2" />
                Right to object to the processing of your data for marketing purposes.
              </motion.li>
            </ul>
          </section>

          {/* Section 7: Changes to Privacy Policy */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              7. Changes to This Privacy Policy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          {/* Section 8: Contact Information */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              8. Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              If you have any questions about this Privacy Policy or need assistance with your data, feel free to contact us at:
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Email: <a href="mailto:support@yourdomain.com" className="text-blue-600">support@alphalearning.com</a>
            </p>
          </section>
        </motion.div>
      </motion.div>
      <BackButton/>
    </div>
  );
};

export default PrivacyPolicy;
