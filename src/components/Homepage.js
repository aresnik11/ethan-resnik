import React from "react";
import { Icon } from "semantic-ui-react";
import north_shore_symphony_orchestra_performance from "../assets/north_shore_symphony_orchestra_performance.jpg";

const Homepage = () => {
  return (
    <div className="white-container">
      <h1 className="name">Ethan Resnik</h1>
      <h2 className="subheader">Composer, Pianist, Saxophonist</h2>
      <div className="home-icons">
        <a
          href="https://www.youtube.com/channel/UCKISvqGCXDr0hbyTWrn9Jlg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="youtube" size="huge" />
        </a>
        <a
          href="https://www.instagram.com/ethresnik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" size="huge" />
        </a>
        <a
          href="https://www.facebook.com/ethan.resnik.79"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="facebook" size="huge" />
        </a>
      </div>
      <img
        src={north_shore_symphony_orchestra_performance}
        alt="Ethan Resnik Performance"
        className="home-photo"
      />
    </div>
  );
};

export default Homepage;
