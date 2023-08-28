import React from 'react';
import GeneralNavbar from './generalNavbar';
import './generalCSS/home.css'
import './generalCSS/generalnavbar.css'

const Home = () => {
  return (<>
    <GeneralNavbar />

    <div className="home">
      <div className="big-card">
       
          <h3>WORLD'S 1st TOKEN BACKED BY CRYPTO MINING</h3>
          <p>Wondering how Mining can thrive with an entire ecosystem? The possibilities are limitless. By virtue of holding the MNT token, individuals can become part of the Global Mining Community. Mr. Mint's project solves the ongoing challenge of increasing costs and higher difficulty levels associated with cryptocurrency mining. Therefore, indirect benefits are extended to a community that solely holds the MNT token. Here's a sneak peek into our multiple revenue streams.</p>
        
      </div>
      <div className="small-cards">
        <div className="card">
          <h3>Mystry box</h3>
          <p>Exciting developments & integrations in the Metaverse in the form of P2E games.</p>
        </div>
        <div className="card">
          <h3>NFT's</h3>
          <p>An expansive NFT ecosystem that includes never-before-seen assets to HODL and utilize.</p>
        </div>
        <div className="card">
          <h3>MNT Token</h3>
          <p>Global state-of-the-art crypto mining, with the aim to mine 1 BTC per day using green energy.</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home
