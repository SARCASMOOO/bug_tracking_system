import React, { useEffect, useState } from "react";
import { Container, Col } from "reactstrap";
import LoginForm from './LoginForm/LoginForm';
import { useComponentDidMount, useComponentWillUnmount } from '../../hooks/useEffectWithName';

interface State {
  emailFocus?: boolean;
  passFocus?: boolean;
}

const Login = () => {
  const [focus, setFocus] = useState<State>({ emailFocus: false, passFocus: false });

  useComponentDidMount(() => {
    document.body.classList.toggle("login-page");
    console.log('Component mounted.');

  });

  useComponentWillUnmount(() => {
    document.body.classList.toggle("login-page");
    console.log('Component will unmount');

  });


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

export default Login;
