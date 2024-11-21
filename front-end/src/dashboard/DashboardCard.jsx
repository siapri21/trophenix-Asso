import React from 'react';

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      <div className="bg-orange-500 text-white p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-700 font-semibold">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
