import { useState } from 'react';
import './Popup.css';
import PopupHeader from './PopupHeader';
import TabNavigation from './TabNavigation';
import TabContent from './TabContent';
import PopupFooter from './PopupFooter';

function Popup({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('HTML & CSS');

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <PopupHeader onClose={onClose} />
        
        <div className="content-area">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabContent activeTab={activeTab} />
        </div>
        
        <PopupFooter activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Popup;