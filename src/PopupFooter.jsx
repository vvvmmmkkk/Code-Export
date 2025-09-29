import React from 'react';

const PopupFooter = ({ activeTab }) => {
  return (
    <div className="modal-footer">
      <button className="download-button">
        Download {activeTab === 'HTML & CSS' ? 'HTML CSS' : 'Next JS'} Project
      </button>
    </div>
  );
};

export default PopupFooter;