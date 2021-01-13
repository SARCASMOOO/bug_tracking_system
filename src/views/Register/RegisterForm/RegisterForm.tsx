import React, { useState } from 'react';
import classnames from "classnames";
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

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

import Requests, { withRequests } from '../../../requests';
import { routePaths } from '../../../routes';

interface Props {
    nameFocus: boolean;
    setNameFocus: (isFocus: boolean) => void;
    emailFocus: boolean;
    setEmailFocus: (isFocus: boolean) => void;
    passFocus: boolean;
    setPassFocus: (isFocus: boolean) => void;
    requests: Requests;
    history: any;
}

interface State {
    username?: string;
    email?: string;
    passwordOne?: string;
    history: any;
}

const RegisterForm = ({ requests, nameFocus, setNameFocus, emailFocus, setEmailFocus, passFocus, setPassFocus, history }: Props) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [passwordOne, setPasswordOne] = useState('');
    const [error, setError] = useState<null | Error>(null);
    const [events, setEvents] = useState<any>({});

    const setInitialState = () => {
        setUsername('');
        setEmail('');
        setPasswordOne('');
    }

    const onSubmit = (event: any) => {
        requests.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then((authUser: any) =>
                requests.user(authUser.user.uid).set({ username, email })
            )
            .then((authUser: any) => {
                history.push(routePaths.dashboard);
                setInitialState();
            })
            .catch((error: Error) => {
                setError(error);
            });

        event.preventDefault();
    };

    const onChange = (event: any) => {
        setEvents({ [event.target.name]: event.target.value });
    };

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


export default compose<Props, any>(
    withRouter,
    withRequests,
)(RegisterForm);