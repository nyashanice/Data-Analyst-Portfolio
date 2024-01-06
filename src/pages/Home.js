import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Home.css";

export default function Home() {
  return (
    <Container
      fluid
      className="home-bg d-flex align-items-center justify-content-center"
    >
      <Row className="">
        <Col className="">
          <img
            className="home-img mx-auto d-block"
            src="/images/headshot2.jpeg"
            alt=""
          />
        </Col>
        <Col className="text-center align-self-center">
          <div>Nya Tyus</div>
          <div> Data Analyst </div>
          <div>Biology, B.S.</div>
          <div>Full Stack Web Development Bootcamp Graduate</div>
        </Col>
      </Row>
    </Container>
  );
}
