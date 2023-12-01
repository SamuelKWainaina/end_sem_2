import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'; // Import your context if needed
import React, { useContext } from 'react';

function ReturnPolicy() {
  const context = useContext(myContext);
  const { mode } = context;


  return (
    <Layout>
    <div className="container mx-auto my-8 p-8">
      <h1 className="text-3xl font-bold mb-4" style={{ color: mode === 'dark' ? 'white' : '' }}>
        Return Policy
      </h1>

      <p className="mb-4" style={{ color: mode === 'dark' ? 'white' : '' }}>
        At WonderEats, we strive to ensure your satisfaction with every purchase. If you are not entirely satisfied with your purchase, we're here to help.
      </p>

      <h2 className="text-xl font-bold mb-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
        Return Eligibility
      </h2>

      <p className="mb-4" style={{ color: mode === 'dark' ? 'white' : '' }}>
        To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
      </p>

      <h2 className="text-xl font-bold mb-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
        Returns Process
      </h2>

      <ol className="list-decimal list-inside mb-4" style={{ color: mode === 'dark' ? 'white' : '' }}>
        <li>Initiate the return process within 14 days of receiving your order by contacting our customer support.</li>
        <li>Package your item securely, including all original packaging.</li>
        <li>Ship the package to the provided return address.</li>
        <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
        <li>If approved, your refund will be processed, and a credit will automatically be applied to your original payment method.</li>
      </ol>

      <h2 className="text-xl font-bold mb-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
        Contact Us
      </h2>

      <p className="mb-4" style={{ color: mode === 'dark' ? 'white' : '' }}>
        If you have any questions about our return policy, please contact our customer support team at support@wondereats.com.
      </p>

      <p className="italic" style={{ color: mode === 'dark' ? 'white' : '' }}>
        Note: This is a general return policy template. Please refer to our Terms and Conditions for detailed information and any specific exceptions.
      </p>
    </div>
    </Layout>
  );
  
}

export default ReturnPolicy;
