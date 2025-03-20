import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Privacy Policy
        </h1>
        {/* Subheading */}
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Last updated: October 10, 2023
        </p>

        {/* Privacy Policy Content */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to JED-HUB. We are committed to protecting your privacy and ensuring that your
              personal information is handled in a safe and responsible manner. This Privacy Policy
              outlines how we collect, use, and protect your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <p>
              We may collect the following types of information:
              <ul className="list-disc pl-6 mt-2">
                <li>Personal information (e.g., name, email address, phone number).</li>
                <li>Usage data (e.g., IP address, browser type, pages visited).</li>
                <li>Cookies and tracking technologies.</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p>
              We use your information to:
              <ul className="list-disc pl-6 mt-2">
                <li>Provide and improve our services.</li>
                <li>Communicate with you about updates and offers.</li>
                <li>Analyze website usage and trends.</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
            <p>
              We do not sell or share your personal information with third parties except:
              <ul className="list-disc pl-6 mt-2">
                <li>With your consent.</li>
                <li>To comply with legal obligations.</li>
                <li>To protect our rights and property.</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
            <p>
              You have the right to:
              <ul className="list-disc pl-6 mt-2">
                <li>Access and update your personal information.</li>
                <li>Request deletion of your data.</li>
                <li>Opt-out of marketing communications.</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a
                href="mailto:privacy@jedhub.com"
                className="text-red-600 dark:text-red-400 hover:underline"
              >
                privacy@jedhub.com
              </a>
            </p>
          </section>
        </div>

        {/* Back to Home Link */}
        <div className="mt-8">
          <Link
            to="/"
            className="text-red-600 dark:text-red-400 hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;