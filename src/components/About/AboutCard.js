import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shiva Mohan </span>
            from <span className="purple"> Vishakapatnam, Andhra Pradesh, India.</span>
            <br />
            I am currently persuring<span className="purple"> B.Tech (Information Technology)</span> at <span className="purple"> Vishnu Institute Of Technology, Bhimavaram.</span>
            <br />
            With a keen interest in computers and technology, I constantly seek to expand my knowledge and skills in this rapidly evolving field.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manga/Manhuwa
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "The only way to do great work is to love what you do."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
