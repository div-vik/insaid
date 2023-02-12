import React from "react";
import Download from "../Download/Download";

import ".//Body.css";

function Body() {
  return (
    <div>
      <div className="body-item">
        <div className="describe">
          <div className="heading">
            <p>Get your Dream Job with</p>
          </div>
          <div className="description">
            <p>Top Programs</p>
          </div>
          <div className="sub-description">
            <p>
              Learn with India's leading online school for working professionals
            </p>
          </div>
          <div className="app-download-button">
            <a href="#" className="button">
              Talk to an Expert
            </a>
          </div>
        </div>
        <div className="poster">
          <img
            src="https://drmarkcamilleri.files.wordpress.com/2019/10/edtech.png"
            alt="image"
          />
        </div>
      </div>
      <Download />
    </div>
  );
}

export default Body;
