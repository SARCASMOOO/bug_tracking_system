import React from 'react';

import {
    Button,
    CardFooter
} from "reactstrap";

const RegisterFooter = () =>
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

export default RegisterFooter;