import React, { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';
import { FaUsers, FaBriefcase, FaChartLine } from 'react-icons/fa';

const DashboardContent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simule un appel API
    setTimeout(() => {
      setData({
        totalOffers: 12,
        newSponsors: 5,
        visitsToday: 128,
      });
      setLoading(false);
    }, 2000); // 2 secondes de délai
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p className="animate-pulse text-gray-400">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <DashboardCard 
        title="Total des Offres" 
        value={data.totalOffers} 
        icon={<FaBriefcase size={24} />} 
      />
      <DashboardCard 
        title="Nouveaux Sponsors" 
        value={data.newSponsors} 
        icon={<FaUsers size={24} />} 
      />
      <DashboardCard 
        title="Visites Aujourd'hui" 
        value={data.visitsToday} 
        icon={<FaChartLine size={24} />} 
      />
    </div>
  );
};

export default DashboardContent;
