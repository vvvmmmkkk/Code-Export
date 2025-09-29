import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={`tab-button ${activeTab === 'HTML & CSS' ? 'active' : ''}`}
        onClick={() => setActiveTab('HTML & CSS')}
      >
        HTML & CSS
      </button>
      <button
        className={`tab-button ${activeTab === 'Next JS' ? 'active' : ''}`}
        onClick={() => setActiveTab('Next JS')}
      >
        Next JS
      </button>
    </div>
  );
};

export default TabNavigation;