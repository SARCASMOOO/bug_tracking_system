import React, { useState } from "react";
import { Container, Row } from "reactstrap";

import SellingPoints from './SellingPoints/SellingPoints';
import RegisterForm from './RegisterForm/RegisterForm';
import { useComponentDidMount, useComponentWillUnmount } from '../../common/useEffectWithName';

const Register = () => {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  useComponentDidMount(
    () => {
      document.body.classList.toggle("register-page");
    }
  );

  useComponentWillUnmount(
    () => {
      document.body.classList.toggle("register-page");
    }
  )

  return (
    <div className="content">
      <Container>
        <Row>
          <SellingPoints />
          <RegisterForm
            nameFocus={nameFocus}
            setNameFocus={setNameFocus}
            emailFocus={emailFocus}
            setEmailFocus={setEmailFocus}
            passFocus={passFocus}
            setPassFocus={setPassFocus}
          />
        </Row>
      </Container>
    </div>
  );
}


export default Register;
