import React, { useState } from 'react';
import './BoxContainer.css';

function BoxContainer() {
  const [boxes, setBoxes] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const color = event.target.color.value;
    const newBox = <div className="box" style={{ backgroundColor: color }}></div>;
    setBoxes([...boxes, newBox]);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" name="color" required />
        <button type="submit">Add Box</button>
      </form>
      <div className="box-container">{boxes}</div>
    </div>
  );
}

export default BoxContainer;
