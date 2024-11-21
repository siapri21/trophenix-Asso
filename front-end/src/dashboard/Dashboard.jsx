import React from 'react';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Ton header existant sera affiché ici */}
      <div className="pt-20"> {/* Ajoute du padding si ton header est fixe */}
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
