import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Icon for checked points
import BackButton from "@/components/BackButton";

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 min-h-screen">
      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Terms of Service
        </h2>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          By using our platform, you agree to the following terms and conditions. Please read them carefully.
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
              These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to abide by these terms. If you do not agree to these terms, you should not use our platform.
            </p>
          </section>

          {/* Section 2: User Registration */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              2. User Registration
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              In order to use certain services on our platform, you may be required to create an account. You agree to provide accurate and complete information during the registration process and maintain the security of your login credentials.
            </p>
          </section>

          {/* Section 3: Use of Service */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              3. Use of Service
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You agree to use the service only for lawful purposes. You may not engage in any activity that could damage, disable, overburden, or impair the platform or interfere with any other party’s use of the service.
            </p>
          </section>

          {/* Section 4: Account Responsibility */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              4. Account Responsibility
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You are solely responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          {/* Section 5: Intellectual Property */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              5. Intellectual Property
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All content on our platform, including text, graphics, logos, and software, is the property of our company or our licensors and is protected by copyright laws. You may not use or reproduce any content without permission.
            </p>
          </section>

          {/* Section 6: Termination of Service */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              6. Termination of Service
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We reserve the right to suspend or terminate your access to the platform at any time, without notice, for violations of these terms or any other reason.
            </p>
          </section>

          {/* Section 7: Limitation of Liability */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              7. Limitation of Liability
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We are not responsible for any damages or losses that result from using our platform. You agree that the platform is provided on an “as is” basis and that we are not liable for any damages or disruptions to your device.
            </p>
          </section>

          {/* Section 8: Privacy */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              8. Privacy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our Privacy Policy explains how we collect and use your personal data. By using the platform, you consent to the practices described in our Privacy Policy.
            </p>
          </section>

          {/* Section 9: Changes to Terms */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              9. Changes to Terms
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We may update these Terms of Service from time to time. We will notify you of any significant changes, and the updated terms will be posted on this page. It is your responsibility to review these terms periodically.
            </p>
          </section>

          {/* Section 10: Governing Law */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              10. Governing Law
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction where our company is based. Any disputes will be resolved in the courts of that jurisdiction.
            </p>
          </section>

          {/* Section 11: Contact Information */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              11. Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              If you have any questions or concerns about these Terms of Service, feel free to contact us at:
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Email: <a href="mailto:support@yourdomain.com" className="text-blue-600">support@yourdomain.com</a>
            </p>
          </section>
        </motion.div>
      </motion.div>
      <BackButton/>
    </div>
  );
};

export default TermsOfService;
