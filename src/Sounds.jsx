import React from 'react'
import { Link } from "react-router-dom";


function Sounds() {
  return (
    <div className="background">
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="grass"></div>
      <div className="wrapper_btn_back">
        <Link className="btn" to="/">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Sounds;