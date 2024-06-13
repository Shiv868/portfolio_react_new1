import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiPostman,
  SiFigma,
  SiVisualstudiocode,
  SiAmazonaws,
  SiOpenai,
  SiWindowsterminal,
  SiWireshark,
} from "react-icons/si";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiAmazonaws />, name: "Amazon AWS" },
    { icon: <SiOpenai />, name: "OpenAI" },
    { icon: <SiWindowsterminal />, name: "Windows Terminal" },
    { icon: <SiWireshark />, name: "Wireshark" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
          >
            <div>{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
