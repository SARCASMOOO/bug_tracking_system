import React from 'react';

import {
    CardBody,
    Form
} from "reactstrap";

import RegisterInputGroups from '../RegisterInputGroups/RegisterInputGroups';
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';

const RegisterBody = () => {
    return (
        <CardBody>
            <Form className="form">
                <RegisterInputGroups />
                <TermsAndConditions />
            </Form>
        </CardBody>
    );
}

export default RegisterBody;