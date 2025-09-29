import { useState } from 'react';
import './App.css';
import Popup from './Popup';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      <button className="export-button" onClick={() => setIsModalOpen(true)}>
        EXPORT CODE
      </button>

      <Popup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;