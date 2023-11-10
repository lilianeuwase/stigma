import React from "react";
import ReactPlayer from "react-player";
import "./impactVideo.css";
import videoBg from "../../images/GameVideo.mkv";
import { Link } from "react-router-dom";

const ImpactVideo = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      {/* <video src={videoBg} autoPlay loop /> */}
      <ReactPlayer
        url={require("../../images/GameVideoSmall.mp4")}
        controls={true}
      />
      <br />
      <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
      <a href="https://www.youtube.com/watch?v=EWUFpLzp9uU" target="_blank" rel="noopener noreferrer">Video Source</a>
        : IGIHE
      </p>
    </div>
  );
};

export default ImpactVideo;
