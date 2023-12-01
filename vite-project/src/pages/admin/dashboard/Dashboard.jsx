import React, { useContext, useEffect, useState } from 'react';
import { FaCartArrowDown, FaUtensils, FaUserTie } from 'react-icons/fa';

import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';
import { collection, getDocs } from 'firebase/firestore';
import { fireDB } from '../../../fireabase/FirebaseConfig';

function Dashboard() {
  const context = useContext(myContext);
  const { mode } = context;

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsQuery = collection(fireDB, 'products');
        const productsSnapshot = await getDocs(productsQuery);
        setTotalProducts(productsSnapshot.size);

        const ordersQuery = collection(fireDB, 'orders');
        const ordersSnapshot = await getDocs(ordersQuery);
        setTotalOrders(ordersSnapshot.size);

        const usersQuery = collection(fireDB, 'users');
        const usersSnapshot = await getDocs(usersQuery);
        setTotalUsers(usersSnapshot.size);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/3 w-full">
              <div
                className="border-2 hover:shadow-blue-700 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <div className="text-blue-900 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <FaUtensils size={50} />
                </div>
                <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  {totalProducts}
                </h2>
                <p className="text-blue-900 font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Total Products
                </p>
              </div>
            </div>

            <div className="p-4 md:w-1/3 sm:w-1/3 w-full">
              <div
                className="border-2 hover:shadow-blue-700 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <div className="text-blue-900 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <FaCartArrowDown size={50} />
                </div>
                <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  {totalOrders}
                </h2>
                <p className="text-blue-900 font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Total Orders
                </p>
              </div>
            </div>

            <div className="p-4 md:w-1/3 sm:w-1/3 w-full">
              <div
                className="border-2 hover:shadow-blue-700 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <div className="text-blue-900 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <FaUserTie size={50} />
                </div>
                <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  {totalUsers}
                </h2>
                <p className="text-blue-900 font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Total Users
                </p>
              </div>
            </div>

            {/* Repeat similar blocks for other data */}
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;
