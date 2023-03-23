import React, { useState } from 'react';

function Tabs({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-headers">
        {items.map((item, index) => (
          <button
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={activeIndex === index ? 'active' : ''}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Tabs