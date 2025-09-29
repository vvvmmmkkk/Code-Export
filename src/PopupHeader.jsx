import React from 'react';

// SVG component for the close icon
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const PopupHeader = ({ onClose }) => {
  return (
    <div className="modal-header">
      <div>
        <h2>Code Export</h2>
        <p>Manage how you download your website's code.</p>
      </div>
      <button className="close-button" onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default PopupHeader;