import React from 'react';
import { Outlet } from 'react-router-dom';
import './tutorialCSS/tutorialDashboard.css'

const TutorialDashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="card">
          <h2>Tutorial 1</h2>
          <p>40%</p>
        </div>
        <div className="card">
          <h2>Tutorial 2</h2>
          <p>51%</p>
        </div>
        <div className="card">
          <h2>Tutorial 3</h2>
          <p>23%</p>
        </div>
        <div className="card">
          <h2>Tutorial 4</h2>
          <p>10%</p>
        </div>
      </div>
      
    </>
  );
};

export default TutorialDashboard;
