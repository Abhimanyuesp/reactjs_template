import React from 'react';
import './userProfileCSS/dashboard.css'

const Activities = () => {
  return (
    <div className="dashboard">
      <div className="card">
        <h2> Sale Achieve</h2>
        <p>1500MNT</p>
      </div>
      <div className="card">
      <h2>MNT Own</h2>
        <p>156</p>
      </div>
      <div className="card">
        <h2>Total Referal</h2>
        <p>5</p>
      </div>
      <div className="card">
        <h2>Autopool Reward</h2>
        <p>96</p>
      </div>
      <div className="card">
        <h2>Matching Bonus</h2>
        <p>23.0</p>
      </div>
     
    </div>
  );
};

export default Activities;
