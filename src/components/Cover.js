import React, { Component } from "react";
import { Card, Button, Row, Col, FormControl } from "react-bootstrap";
import "./Cover.css";
class Cover extends Component {
  render() {
    const buttonlabel = "Get Started >";
    return (
      <Card className="text-center">
        <Card.Body>
          <Card.Title className="cardtitle">Unlimited movies, TV</Card.Title>
          <Card.Title className="cardtitle">shows and more.</Card.Title>
          <Card.Text style={{ fontSize: "1.625rem", color: "white",textShadow: "0 2px black" }}>
            Watch anywhere. Cancel anytime.
          </Card.Text>
          <Card.Text
            style={{
              color: "white",
              maxWidth: "none",
              paddingBottom: "20px",
              fontSize: "1.14rem",
              fontWeight: "500",
              textShadow: "0 1px black"
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Card.Text>
          <Row  className="rowclass">
            <Col sm={8} className="col1">
              <FormControl
              className="emailfield"
                placeholder="Email address"
                aria-label="Email address"
                aria-describedby="basic-addon2"
              />
            </Col>
            <Col sm={4}  className="col2">
              <Button
               className="startbutton"
                variant="outline-secondary"
                id="button-addon2"
              >
                {buttonlabel}
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Cover;
