import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import plant_virus from "../../Assets/Projects/plant_virus.png";
import figma from "../../Assets/Projects/Figma.png";
import blog from "../../Assets/Projects/blog.png";
import Fieldmate from "../../Assets/Projects/Fieldmate.png";
import IOT from "../../Assets/Projects/IOT.png";
import TreeEconomy from "../../Assets/Projects/TreeEconomy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fieldmate}
              isBlog={false}
              title="FieldMate"
              stack=" HTML, CSS, JS, API, Express, Node, PostgreSQL, pgAdmin, Firebase, Bootstrap"
              description="Fieldmate is a comprehensive platform designed to assist farmers with vital agricultural insights and tools. It provides real-time weather updates, forecasts, and alerts to help farmers plan their activities efficiently. The plant disease detection feature uses advanced machine learning to identify diseases from photos and offers treatment suggestions. Fieldmate includes a resource library on modern farming techniques and technologies, such as precision agriculture and smart sensors. It provides region-specific soil and crop information, suggesting the best crops based on local conditions."
              ghLink="https://github.com/Shiv868/FieldMate_Firebase-"
              demoLink="https://fieldmate-da2ff.web.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Dev-Diaries"
              stack="React, Node ,Express, MongoDB, FireBase, Bootstrap"
              description="Dev Diaries is a personal blog platform dedicated to tech stack-related content,providing a space for developers to share and explore knowledge. The blog features data on various programming languages, frameworks, tools, and best practices. Dev Diaries supports markdown for easy blog writing and includes features for categorizing and tagging posts for better discoverability. The platform is built with a modern tech stack, including React.js for the frontend ensuring a seamless and responsive user experience. "
              ghLink="https://github.com/Shiv868/blog_React_new"
              demoLink="https://blog-react868.web.app/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TreeEconomy}
              isBlog={false}
              title="TreeEconomy"
              stack="HTML, CSS, node, Express, Php, Xampp, FireBase "
              description="TreeEconomy is a website where people can donate money for tree planting on special occasions like birthdays and anniversaries. Donations are managed by non-profit organizations that plant trees, allowing busy individuals to contribute to environmental sustainability easily. TreeEconomy provides updates on the tree planting projects, making it a meaningful way to celebrate special moments while supporting reforestation efforts. The platform is designed to be user-friendly, offering a simple and meaningful way for people to give back to the planet through tree planting initiatives."
              ghLink="https://github.com/Shiv868/TreeEconomy_Firebase"
              demoLink="https://shiv868.github.io/TreeEconomy_Firebase/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plant_virus}
              isBlog={false}
              title="Plant Disease Detection AI"
              stack="Machine Learning, pytorch, tensorflow, python, HTML, Bootstrap ,JS"
              description=" used the plant disease dataset from Kaggle to train an image classifier model using both PyTorch and TensorFlow frameworks.the model was trained to classify images into 28 different classes of various plant leaves. This includes detecting both diseased and healthy leaves from 10 unique plant species. Achieved a high accuracy rate of 98%. This means the model can reliably identify and differentiate between healthy and diseased leaves, making it a valuable tool for farmers and agricultural experts to monitor plant health and take timely action against diseases."
              ghLink="https://github.com/Shiv868/plant_disease_detection_ML"
              demoLink="https://shiv868.github.io/plant_disease_detection_ML/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IOT}
              isBlog={false}
              title="IOT based Dashboard"
              stack="Arduino IDE, PostgreSQL, pgAdmin, Chat.js, HTML, CSS, JS"
              description="The IoT-based Dashboard is a project designed to collect, store, and display data from various types of sensors. This platform integrates multiple IoT sensors to gather data such as temperature, humidity, light levels, and more. The collected data is stored in a robust database and can be retrieved for real-time analysis. The dashboard presents this data using various types of visual representations, including charts and graphs, providing users with clear insights. This project is ideal for monitoring and managing environments like smart homes, industrial settings, or agricultural fields."
              ghLink="https://github.com/Shiv868/IOT_php"
              demoLink="https://shiv868.github.io/IOT_org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={figma}
              isBlog={false}
              title="Foodgo"
              stack="Figma, Material UI, Prototyping, Components"
              description="Foodgo is a Figma design and prototype project focused on creating an app for food delivery services. This project utilizes various Figma concepts and techniques to develop a visually appealing and user-friendly interface. Emphasizing good UI/UX design principles, Foodgo aims to streamline the user experience from browsing menus to placing orders. Through this project, advanced Figma features such as interactive components, responsive design and professional prototype. The primary goal is to improve proficiency in Figma while creating an intuitive and efficient food delivery app."
              ghLink="https://www.figma.com/design/1VMU3MAUHAkU8GMDBMTtWr/restaurant-prj?node-id=0-1&t=WbE3QsRJ8OfZbHsg-1"
              demoLink="https://www.figma.com/proto/1VMU3MAUHAkU8GMDBMTtWr/restaurant-prj?node-id=1-584&t=pjyIYBzyDHcqTh19-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A584"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
