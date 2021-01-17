import React, { useState } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Card, Col } from "reactstrap";

// import {ErrorContext, withError } from '../../../error';
import Requests, { withRequests } from '../../../requests';
import { routePaths } from '../../../routes';
import RegisterHeader from './RegisterHeader/RegisterHeader';
import RegisterBody from './RegisterBody/RegisterBody';
import RegisterFooter from './RegisterFooter/RegisterFooter';

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

const RegisterForm = ({ requests, nameFocus, setNameFocus, emailFocus, setEmailFocus, passFocus, setPassFocus, history }: Props) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [passwordOne, setPasswordOne] = useState('');
    const [events, setEvents] = useState<any>({});
    const [error, setError] = useState(false);

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
            // .catch((error: Error) => setError(error));

        event.preventDefault();
    };

    const onChange = (event: any) => {
        setEvents({ [event.target.name]: event.target.value });
    };


    return (
            <Col className="mr-auto" md="7">
                <Card className="card-register card-white">
                    <RegisterHeader />
                    <RegisterBody />
                    <RegisterFooter />
                </Card>
            </Col>
    );
}


export default compose<Props, any>(
    withRouter,
    withRequests,
    // withError
)(RegisterForm);