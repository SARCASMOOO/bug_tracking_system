import React from 'react';
import classnames from "classnames";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col
} from "reactstrap";

interface Props {
    nameFocus: boolean;
    setNameFocus: (isFocus: boolean) => void;
    emailFocus: boolean;
    setEmailFocus: (isFocus: boolean) => void;
    passFocus: boolean;
    setPassFocus: (isFocus: boolean) => void;
}

const RegisterForm = ({ nameFocus, setNameFocus, emailFocus, setEmailFocus, passFocus, setPassFocus }: Props) => {
    return (
        <Col className="mr-auto" md="7">
            <Card className="card-register card-white">
                <CardHeader>
                    <CardImg
                        alt="..."
                        src={require("../../../assets/img/card-primary.png")}
                    />
                    <CardTitle tag="h4">Register</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form className="form">
                        <InputGroup
                            className={classnames({
                                "input-group-focus": nameFocus
                            })}
                        >
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="tim-icons icon-single-02" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Full Name"
                                type="text"
                                onFocus={(e: Event) => setNameFocus(true)}
                                onBlur={(e: Event) => setNameFocus(false)}
                            />
                        </InputGroup>
                        <InputGroup
                            className={classnames({
                                "input-group-focus": emailFocus
                            })}
                        >
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="tim-icons icon-email-85" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Email"
                                type="text"
                                onFocus={(e: Event) => setEmailFocus(true)}
                                onBlur={(e: Event) => setEmailFocus(false)}
                            />
                        </InputGroup>
                        <InputGroup
                            className={classnames({
                                "input-group-focus": passFocus
                            })}
                        >
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="tim-icons icon-lock-circle" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Password"
                                type="text"
                                onFocus={(e: Event) => setPassFocus(true)}
                                onBlur={(e: Event) => setPassFocus(false)}
                            />
                        </InputGroup>
                        <FormGroup check className="text-left">
                            <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />I agree to the{" "}
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                    terms and conditions
                          </a>
                          .
                        </Label>
                        </FormGroup>
                    </Form>
                </CardBody>
                <CardFooter>
                    <Button
                        className="btn-round"
                        color="primary"
                        href="#pablo"
                        onClick={(e: Event) => e.preventDefault()}
                        size="lg"
                    >
                        Get Started
                    </Button>
                </CardFooter>
            </Card>
        </Col>
    );
}

export default RegisterForm;