import React from 'react';
import './userProfileCSS/dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card">
        <h2>Mystry Box Sale</h2>
        <p>156456</p>
      </div>
      <div className="card">
      <h2>MNT Distributed</h2>
        <p>1556</p>
      </div>
      <div className="card">
        <h2>Total Hashpower</h2>
        <p>48941651</p>
      </div>
      <div className="card">
        <h2>Autopool Reward</h2>
        <p>2196</p>
      </div>
      <div className="card">
        <h2>My NFT's</h2>
        <p>125</p>
      </div>
      <div className="card">
        <h2>Main Wallet</h2>
        <p>20.1 Mnt</p>
      </div>
      <div className="card">
        <h2>Matching Bonus</h2>
        <p>23.0</p>
      </div>
      <div className="card">
        <h2>Card 8</h2>
        <p>Some statistics here...</p>
      </div>
    </div>
  );
};

export default Dashboard;
