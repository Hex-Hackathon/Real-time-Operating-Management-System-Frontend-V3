import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <iframe
        style={{
          background: '#21313C',
          border: 'none',
          borderRadius: '2px',
          boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
          width: '72vw',
          height: '100vh',
        }}
        src="https://charts.mongodb.com/charts-project-0-dwvng/embed/dashboards?id=65786c96-a0f0-4ed3-8dbd-8cefd3f42232&theme=dark&autoRefresh=true&maxDataAge=60&showTitleAndDesc=true&scalingWidth=scale&scalingHeight=scale"
      ></iframe>
    </div>
  );
};

export default AdminDashboard;
