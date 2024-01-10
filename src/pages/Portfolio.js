import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/images/basketball.jpg" />
        <Card.Body>
          <Card.Title>NBA Eastern Conference Stats</Card.Title>
          <Card.Text>
            <div>
              This analysis allows basketball fans to compare the statistics of
              the NBA Eastern Conference teams and players for the 2022-23
              season.
            </div>
            <div>
              This project was created using Google Sheets and Google Slides.
            </div>
          </Card.Text>
          <Link to="/NBA-Stats">
            <Button variant="light">Slam dunk!</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/images/travel.jpg" />
        <Card.Body>
          <Card.Title>Travel Expense Tracker</Card.Title>
          <Card.Text>
            <div>
              This command line application allows users to keep track of their
              trips and expenses over the year with the ability to create, read,
              update, and delete data.
            </div>
            <div>This project was created using MySQL and Python.</div>
          </Card.Text>
          <Link to="/Travel-Expense-Tracker">
          <Button variant="light">Bon voyage!</Button>
          </Link>
        </Card.Body>
      </Card>
      {/* <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card> */}
    </CardGroup>
  );
}
