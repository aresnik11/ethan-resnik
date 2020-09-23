import React from "react";
import { Icon } from "semantic-ui-react";
import Notes from "./Notes";

const Contact = () => {
  return (
    <div className="white-container">
      <h1 className="heading">Get In Touch!</h1>
      <div className="icons">
        <a href="mailto:ethresnik@gmail.com">
          <div>
            <Icon name="mail outline" size="huge" />
            &nbsp;&nbsp;&nbsp;
            <span>ethresnik@gmail.com</span>
          </div>
        </a>
        <a href="tel:1-914-406-6703">
          <div>
            <Icon name="phone square" size="huge" />
            &nbsp;&nbsp;&nbsp;
            <span>914-406-6703</span>
          </div>
        </a>
        <a
          href="https://www.instagram.com/ethresnik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Icon name="instagram" size="huge" />
            &nbsp;&nbsp;&nbsp;
            <span>@ethresnik</span>
          </div>
        </a>
        <a
          href="https://www.facebook.com/ethan.resnik.79"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Icon name="facebook" size="huge" />
            &nbsp;&nbsp;&nbsp;
            <span>Ethan Resnik</span>
          </div>
        </a>
      </div>
      <Notes />
    </div>
  );
};

export default Contact;
