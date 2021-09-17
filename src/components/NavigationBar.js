import React, { Component } from "react";
import { Navbar, Form, Col, Row, Button, Modal } from "react-bootstrap";
import "./Nav.css";
import logo from "../assets/img/logo.png";
class NavigationBar extends Component {
  state = {
    showmodel: false,
  };
  handleShow = (event) => {
    event.preventDefault();
    this.setState({
      showmodel: true,
    });
  };
  hideShow = () => {
    this.setState({
      showmodel: false,
    });
  };
  render() {
    return (
      <div>
        <Navbar bg="light" style={{ height: "100px", paddingTop: "0px" }}>
          <Navbar.Brand href="#home">
            <img className="logoclass" src={logo}></img>
          </Navbar.Brand>
          <Form style={{ right: "0%", position: "fixed", marginRight: " 6%" }}>
            <Row className="align-items-center">
              <Col xs="auto" className="my-1">
                <Form.Label
                  className="me-sm-2"
                  htmlFor="inlineFormCustomSelect"
                  visuallyHidden
                >
                  Preference
                </Form.Label>
                <Form.Select
                  className="me-sm-2 languageSelect"
                  id="inlineFormCustomSelect"
                >
                  <option style={{ backgroundColor: "silver" }} value="1">
                    English
                  </option>
                  <option style={{ backgroundColor: "silver" }} value="2">
                    हिंदी
                  </option>
                </Form.Select>
              </Col>
              <Col xs="auto" className="my-1">
                <Button
                  className="signInbutton"
                  type="submit"
                  onClick={this.handleShow}
                >
                  Sign In
                </Button>
              </Col>
            </Row>
          </Form>
          <Modal show={this.state.showmodel} onHide={this.hideShow}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.hideShow}>
            Cancel
          </Button>
          <Button variant="primary" style={{backgroundColor: 'rgb(229, 9, 20)'}} onClick={this.hideShow}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
