import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'; // Import your context if needed
import { FiSun } from 'react-icons/fi'; // Import your desired icons
import { BsFillCloudSunFill } from 'react-icons/bs'; // Import your desired icons
import React, { useContext } from 'react';

const ContactUs = () => {
  const context = useContext(myContext); // Use your context if needed
  const { mode, toggleMode } = context; // Use your context functions if needed

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending an email, storing in a database)
  };

  return (
    <Layout>
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 p-2 w-full border rounded-md"
            style={{ backgroundColor: mode === 'dark' ? '#282c34' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 p-2 w-full border rounded-md"
            style={{ backgroundColor: mode === 'dark' ? '#282c34' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="mt-1 p-2 w-full border rounded-md"
            style={{ backgroundColor: mode === 'dark' ? '#282c34' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <button className="" onClick={toggleMode}>
          {mode === 'light' ? (
            <FiSun className="" size={30} />
          ) : mode === 'dark' ? (
            <BsFillCloudSunFill size={30} />
          ) : (
            ''
          )}
        </button>
      </div>
    </div>
    </Layout>
  );
};

export default ContactUs;
