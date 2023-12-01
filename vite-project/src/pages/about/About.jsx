import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'; // Import your context if needed
import React, { useContext } from 'react';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function AboutPage() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  return (
    <Layout>
    <div className="bg-white min-h-screen" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '' }}>
      <header className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex">
            <Link to={'/'} className='flex'>
              <div className="flex">
                <h1 className='text-2xl font-bold text-black px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '' }}>WonderEats</h1>
              </div>
            </Link>
          </div>

          <div className="ml-auto flex items-center">
            <div className="flex lg:ml-6">
              <button className='' onClick={toggleMode}>
                {mode === 'light' ? (
                  <FiSun className='' size={30} />
                ) : 'dark' ? (
                  <BsFillCloudSunFill size={30} />
                ) : (
                  ''
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>About Us</h2>
          <p className="mt-4 text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
            Welcome to WonderEats, where culinary excellence meets innovation. Our mission is to provide a delightful dining experience that goes beyond just a meal. We are passionate about creating memorable moments through the art of food.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Vision</h2>
          <p className="mt-4 text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
            At WonderEats, we envision a world where every bite is a journey, and every meal is a celebration. We strive to redefine culinary boundaries and set new standards for taste, quality, and innovation.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</h2>
          <p className="mt-4 text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
            Have questions or feedback? Reach out to us at <a href="mailto:info@wondereats.com" className="text-blue-500" style={{ color: mode === 'dark' ? 'white' : '' }}>info@wondereats.com</a>.
          </p>
        </section>
      </main>
    </div>
    </Layout>

  );
}

export default AboutPage;
