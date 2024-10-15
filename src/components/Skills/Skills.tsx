// Skills.js
import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleOnDown = (e) => setMouseDownAt(e.clientX);

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const newPercentage = (mouseDelta / maxDelta) * -100;
    const nextPercentage = Math.max(Math.min(prevPercentage + newPercentage, 0), -100);
    setPercentage(nextPercentage);

    document.getElementById('image-track').style.transform = `translate(${nextPercentage}%, -50%)`;

    for (const image of document.getElementsByClassName('image')) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  };

  return (
    <div className="skills-container">
      <div
        id="image-track"
        onMouseDown={handleOnDown}
        onMouseUp={handleOnUp}
        onMouseMove={handleOnMove}
        onTouchStart={(e) => handleOnDown(e.touches[0])}
        onTouchEnd={handleOnUp}
        onTouchMove={(e) => handleOnMove(e.touches[0])}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <img
          className="image"
          src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
          draggable="false"
        />
        {/* Adicione as demais imagens aqui */}
      </div>
    </div>
  );
};

export default Skills;
