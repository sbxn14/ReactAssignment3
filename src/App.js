import React, { useState } from 'react';
import './App.css';

// Bootstrap 5 import (via NPM)
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tooltipValue, setTooltipValue] = useState(0);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleCalculateClick = () => {
    const inputNumber = parseInt(inputValue, 10);
    if (!isNaN(inputNumber)) {
      setTooltipValue(tooltipValue + inputNumber);
    }
    setInputValue('');
  };

  return (
    <div className="container mt-5 position-relative">
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter a number" value={inputValue} onChange={handleInputChange} />
            <button className="btn btn-primary" type="button" onClick={handleCalculateClick}>
              Calculate
            </button>
            {tooltipValue > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 rounded-circle zindex-tooltip translate-middle p-2" style={{ zIndex: 100 }}>
                {tooltipValue}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
