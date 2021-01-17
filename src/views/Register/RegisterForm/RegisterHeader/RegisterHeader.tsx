import React from 'react';

import {
    CardHeader,
    CardImg,
    CardTitle
} from "reactstrap";

const RegisterFooter = () => {
    return (
        <CardHeader>
            <CardImg
                alt="..."
                src={require("../../../../assets/img/card-primary.png")}
            />
            <CardTitle tag="h4">Register</CardTitle>
        </CardHeader>
    );
}

export default RegisterFooter;