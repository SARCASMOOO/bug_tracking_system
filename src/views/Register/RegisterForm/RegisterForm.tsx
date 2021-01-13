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
    Col
} from "reactstrap";

import Requests, { withRequests } from '../../../requests';
import { routePaths } from '../../../routes';
import RegisterInputGroup from './RegisterInputGroup/RegisterInputGroup';

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

interface IconProps {
    iconName: string;
}

const Icon = ({ iconName }: IconProps) => {
    return (<i className={"tim-icons " + iconName} />);
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
            .catch((error: Error) => setError(error));

        event.preventDefault();
    };

    const onChange = (event: any) => {
        setEvents({ [event.target.name]: event.target.value });
    };

    const formFields = [
        {
            placeholder: "Full Name",
            Icon: Icon,
            iconName: 'icon-single-02'
        },
        {
            placeholder: "Full Name",
            Icon: Icon,
            iconName: 'icon-email-85'
        },
        {
            placeholder: "Full Name",
            Icon: Icon,
            iconName: 'icon-lock-circle'
        }
    ];

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
                        {
                            formFields.map(({ placeholder, Icon, iconName }) =>
                                <RegisterInputGroup
                                    placeholder={placeholder}
                                    type='text'
                                >
                                    <Icon iconName={iconName} />
                                </RegisterInputGroup>
                            )
                        }
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