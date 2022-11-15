import React from "react";
import MBToken from "./assets/Group 59536.png";
import metamask from "./assets/Group 4038.png";
import Metamask from "./assets/Group 4039.png";
import opensea from "./assets/logo.png";

const Sponsor = () => {
  return (
    <div className="sponsor">
      <div className="sponsor-container container">
        <div className="spons">
          <img src={MBToken} alt="sponsor" />
          <span className="spons-mb">MBToken</span>
        </div>
        <div className="spons">
          <img src={metamask} alt="sponsor" />
          <span className="spons-meta">
            <img src={Metamask} className="metaa" alt="metamask text" />
          </span>
        </div>
        <div className="spons">
          <img src={opensea} alt="sponsor" />
          <span className="spons-opensea">Opensea</span>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
