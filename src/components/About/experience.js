import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './ProfessionalExperience.css'; // Import custom CSS for styling

function ProfessionalExperience() {
  const experiences = [
    {
      title: "Google Virtual AIML Intern",
      company: "AICTE",
      duration: "Apr 2024 - Present",
      description: "I worked on developing and refining machine learning models, analyzing large datasets, and implementing innovative AI solutions. This virtual internship allowed me to collaborate and enhance my skills in artificial intelligence and machine learning."
    },
    {
      title: "Network Security Intern",
      company: "Fortinet",
      duration: "Dec 2023 - Mar 2024",
      description: "At Fortinet, working remotely. I focus on threat analysis, vulnerability assessment, and implementing security protocols. This internship allowed me to collaborate globally and enhance my cybersecurity skills."
    },
    {
      title: "Full_Stack Developer",
      company: "CodeWay",
      duration: "Jan 2024 - Feb 2024",
      description: "Build and optimized Frontend and server-side applications using React, Node.js and Express. Designed and maintained databases with MongoDB."
    }
  ];

  return (
    <Container className="experience-container">
      <Row xs={1} md={2} lg={3} className="g-4">
        {experiences.map((experience, index) => (
          <Col key={index}>
            <Card className="experience-card">
              <Card.Body>
                <Card.Title>{experience.title}</Card.Title>
                <Card.Subtitle className="mb-2 text">{experience.company}</Card.Subtitle>
                <Card.Text>
                  <strong className="purple">Duration:</strong> {experience.duration}
                  <br />
                  <strong className="purple">Description:</strong> {experience.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProfessionalExperience;
