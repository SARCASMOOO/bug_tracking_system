import React, { useState } from 'react';
import classnames from "classnames";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";



// Get started on click
// Create account on click
// Need help on click
// Email focus
// Pass focus
interface Props {
    emailFocus: boolean;
    passFocus: boolean;
    onClickLogin: () => void;
}

const LoginForm = () => {

    return (
        <Form className="form">
            <Card className="card-login card-white">
                <CardHeader>
                    <img
                        alt="..."
                        src={require("../../../assets/img/card-primary.png")}
                    />
                    <CardTitle tag="h1">Log in</CardTitle>
                </CardHeader>
                <CardBody>
                    <InputGroup
                        className={classnames({
                            "input-group-focus": true
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
                            // onFocus={(e: any) => setFocus({ emailFocus: true })}
                            // onBlur={(e: any) => setFocus({ emailFocus: false })}
                        />
                    </InputGroup>
                    <InputGroup
                        className={classnames({
                            "input-group-focus": true
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
                            // onFocus={(e: any) => setFocus({ passFocus: true })}
                            // onBlur={(e: any) => setFocus({ passFocus: false })}
                        />
                    </InputGroup>
                </CardBody>
                <CardFooter>
                    <Button
                        block
                        className="mb-3"
                        color="primary"
                        href="#pablo"
                        onClick={(e: any) => e.preventDefault()}
                        size="lg"
                    >
                        Get Started
                    </Button>
                    <div className="pull-left">
                        <h6>
                            <a
                                className="link footer-link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Create Account
                        </a>
                        </h6>
                    </div>
                    <div className="pull-right">
                        <h6>
                            <a
                                className="link footer-link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Need Help?
                        </a>
                        </h6>
                    </div>
                </CardFooter>
            </Card>
        </Form>
    );
}

export default LoginForm;