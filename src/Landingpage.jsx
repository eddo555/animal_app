import React from 'react'
import { Link } from "react-router-dom";




function Hero() {
  return (
    <div>
      <div className="background">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="grass"></div>
        <div className="wrapper_btn">
          <Link className="btn" to="/animals">
            Animals
          </Link>
          <Link className="btn" to="/sounds">
            Sounds
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero