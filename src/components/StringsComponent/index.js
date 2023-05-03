import React from "react";
import "./index.css";
import martin_strings from "../../assets/martin-strings.jpg";

function StringsComponent() {
  return (
    <div className="stringsComponent">
      <img src={martin_strings} alt=" " className="stringsComponent_image" />
      <div className="stringsComponent_infoContainer">
        <h2>MARTIN AUTHENTIC ACOUSTIC SUPERIOR PERFORMANCE STRINGS</h2>
        <p>Available Soon</p>
      </div>
    </div>
  );
}

export default StringsComponent;
