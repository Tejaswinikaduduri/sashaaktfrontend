import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content scrollable-content">
      <div
        className="image-container"
        style={{ position: "relative" }}
      >
        <img
          src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1699902205/9c1d402e-ed9e-49e3-874b-dd86d5500408-f33c93f671fd.small_ktvmgc.jpg"
          alt="Your Description"
          style={{ height: "400px", objectFit: "cover", width: "100%" }}
        />
        <div
          className="text-overlay"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            bottom: "20%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            padding: "10px",
            margin: "0",
          }}
        >
          <h1>SASHAKTH</h1>
          <p>Child Empowerment App</p>
        </div>
      </div>

      <div className="cards-container">
        <Link to="/play" className="card">
          <img
            src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706607162/video-Gamer-1372657643_770x533_ifiimv.jpg"
            alt="Card 1 "
          />
          <div className="text-overlay">GAMES.</div>
        </Link>
        <Link to="/stories" className="card">
          <img
            src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706147280/fall_20park_i13wbe.jpg"
            alt="Card 2 "
          />
          <div className="text-overlay">STORIES.</div>
        </Link>
        <Link to="/see" className="card">
          <img
            src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706147980/child-watching-tv-4007338_cdro2k.jpg"
            alt="Card 3 "
          />
          <div className="text-overlay"> MULTIMEDIA VISUALS.</div>
        </Link>
        <Link to="/pin" className="card">
          <img
            src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706150554/Weekly_Taking-Turns_Hero-e1592411399738_skasiw.jpg"
            alt="Card 4 "
          />
          <div className="text-overlay">ACTIVITIES.</div>
        </Link>
        <Link to="/rights" className="card">
          <img
            src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706150613/rights-scaled_p6svme.jpg"
            alt="Card 5 "
          />
          <div className="text-overlay">CLICK ME.</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
