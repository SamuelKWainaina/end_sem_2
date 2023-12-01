import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';

function AnalyticsPage() {
  useEffect(() => {
    // Open the external URL when the component is mounted
    const externalUrl = 'https://console.firebase.google.com/project/wondereats-22850/analytics/app/web:ZjFjYWY3N2QtYTM3Ni00MTk4LTgxNDgtYTM1OGQ5M2JiYWIx/overview/reports~2Fdashboard%3Fr%3Dfirebase-overview&fpn%3D324010108819'; // Replace with your desired external URL
    window.open(externalUrl, '_blank');
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <Layout>
      <div>
        <h1></h1>
        {/* You can add content specific to the AnalyticsPage here */}
      </div>
    </Layout>
  );
}

export default AnalyticsPage;
