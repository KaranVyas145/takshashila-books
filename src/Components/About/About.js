import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faMailchimp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about-container">
      <h2>About us</h2>
      <div className="content">
        <p>
          Takashila is one of the most popular e-book readers which offers a
          vast library to the users. It comes with an extensive selection of
          books which gives you access to a wide variety of genres{" "}
        </p>
        <p>
          Download free books, and maintain your personal library and read at
          your convenience using the built-in ebook reader as well as English
          dictionary.
        </p>
        <p>
          Fiction, History, Career, Suspense & Thriller, Religion &
          Spirituality, Humor, Romance, Biographies, Current Affairs, Politics,
          Business & Economics, Political Science, Self Help, Philosophy,
          Automotive, Lifestyle, Literature, Family & Relationships, Astrology &
          more
        </p>
      </div>
      <div className="social-media">
        <div className="icon">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default About;
