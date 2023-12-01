import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'; // Import your context if needed
import React, { useContext } from 'react';

function PrivacyPolicy() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <Layout>
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        Privacy Policy
      </h1>

      <p className="mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        At [Your Company], we are committed to protecting the privacy and security of our users.
        This Privacy Policy outlines the types of personal information we collect, how it is
        used, and the steps we take to ensure its protection.
      </p>

      <h2 className="text-2xl font-semibold mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        Information We Collect
      </h2>

      <p className="mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        [Your Company] may collect personal information, including but not limited to:
        [List the types of information you collect, e.g., name, email, address, etc.]
      </p>

      <h2 className="text-2xl font-semibold mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        How We Use Your Information
      </h2>

      <p className="mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        We use the collected information for purposes such as [mention specific purposes, e.g.,
        improving user experience, providing customer support, etc.].
      </p>

      <h2 className="text-2xl font-semibold mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        Data Security
      </h2>

      <p className="mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        [Your Company] takes measures to protect your personal information from unauthorized access,
        disclosure, or alteration. We implement industry-standard security practices.
      </p>

      <h2 className="text-2xl font-semibold mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        Changes to Privacy Policy
      </h2>

      <p className="mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        [Your Company] reserves the right to update or modify this Privacy Policy at any time. The
        latest version will be available on this page.
      </p>

      <h2 className="text-2xl font-semibold mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        Contact Us
      </h2>

      <p className="mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        If you have any questions or concerns about our Privacy Policy, please contact us at
        [your email address].
      </p>
    </div>
    </Layout>
  );
}

export default PrivacyPolicy;
