import React from "react";
import { Container, Col } from "reactstrap";
import LoginForm from './LoginForm/LoginForm';

class Login extends React.Component {
  state = {};

  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  render() {
    return (
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <LoginForm />
          </Col>
        </Container>
      </div>
    );
  }
}

export default Login;
