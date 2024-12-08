import React from "react";

const Tracks = () => {
  return (
    <div className="security-tracks-page">
      <h1 className="title">TRACKS</h1>
      <div className="tracks-container">
        <div className="track">
          <div className="track-icon1">
            <img src="1.png" alt="Web Security" />
          </div>
          <h2 className="track-title">Web Security</h2>
          <p className="track-description">
            Protect the web! This track is all about building secure websites
            and web apps that keep user data safe from modern cyber threats.
          </p>
        </div>
        <div className="track">
          <div className="track-icon2">
            <img src="2.png" alt="App Security" />
          </div>
          <h2 className="track-title">App Security</h2>
          <p className="track-description">
            Safeguard the apps we rely on daily. This track focuses on securing
            apps against data breaches, malware, and more.
          </p>
        </div>
        <div className="track">
          <div className="track-icon3">
            <img src="2-2.png" alt="General Security" />
          </div>
          <h2 className="track-title">General Security</h2>
          <p className="track-description">
            Tackle a mix of security issues, from defending networks to
            countering social engineering, and come up with real-world
            solutions.
          </p>
        </div>
        <div className="track">
          <div className="track-icon4">
            <img src="4.png" alt="Web3 & Blockchain" />
          </div>
          <h2 className="track-title">Web3 & Blockchain</h2>
          <p className="track-description">
            Use blockchain technology to create secure, decentralized
            applications and explore its potential.
          </p>
        </div>
        <div className="track">
          <div className="track-icon5">
            <img src="3.png" alt="Internet of Things" />
          </div>
          <h2 className="track-title">Internet of Things</h2>
          <p className="track-description">
            Step into the world of connected devices! Build solutions that keep
            IoT networks secure, from smart homes to smart cities.
          </p>
        </div>
        <div className="track">
          <div className="track-icon6">
            <img
              src="Untitled (Instagram Post) (6).png"
              alt="Open Innovation"
            />
          </div>
          <h2 className="track-title">Open Innovation</h2>
          <p className="track-description">
            Got a big idea? Choose any area of security that inspires you, and
            take it in a bold, new direction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
