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
          <div className="home-name">NYA TYUS</div>
          <span className="home-title m-2 p-2">
            {" "}
            Data Analyst, Web Developer{" "}
          </span>
          <div className="home-txt m-2">Bachelor of Science in Biology</div>
          <div className="home-txt">
            Full Stack Web Development Bootcamp Graduate
          </div>
        </Col>
      </Row>
    </Container>
  );
}