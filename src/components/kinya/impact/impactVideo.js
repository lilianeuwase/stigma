import React from "react";
import "./impactVideo.css";
import videoBg from "../../../images/videoBg.mp4";

const ImpactVideo = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
};

export default ImpactVideo;
