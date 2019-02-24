import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Form
} from "react-bootstrap";

const initialUser = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { ...initialUser }
    };
  }

  onChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    alert("Submmited successfuly.");
    this.setState({
      user: { ...initialUser }
    });
  };

  render() {
    return (
      <Row>
        <Col xs={12}>
          <form onSubmit={this.onSubmit}>
            <Row>
              <Col
                xs={12}
                sm={6}
                md={12}
                lg={6}
                className="d-none d-sm-block d-md-none d-lg-block"
              >
                <img
                  src={require("../assets/images/bg.jpg")}
                  style={{ width: "100%", marginTop: 85 }}
                />
              </Col>
              <Col xs={12} sm={6} md={12} lg={6} className="form-container">
                <Col xs={12}>
                  <h3 className="text-center title-message">Contact Us</h3>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={{ span: 8, offset: 2 }}>
                    <Row>
                      <Col xs={12}>
                        <FormGroup>
                          <FormLabel>First Name</FormLabel>
                          <FormControl
                            placeholder="First Name"
                            onChange={this.onChange}
                            value={this.state.user.firstName}
                            name="firstName"
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl
                            placeholder="Last Name"
                            onChange={this.onChange}
                            value={this.state.user.lastName}
                            name="lastName"
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl
                            placeholder="Email Address"
                            onChange={this.onChange}
                            value={this.state.user.email}
                            name="email"
                            required
                            type="email"
                          />
                        </FormGroup>
                        <FormGroup>
                          <FormLabel>Message</FormLabel>
                          <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Message"
                            onChange={this.onChange}
                            value={this.state.user.message}
                            name="message"
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col xs={12}>
                        <Button
                          variant="primary"
                          block
                          className="login-btn"
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Col>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    );
  }
}
