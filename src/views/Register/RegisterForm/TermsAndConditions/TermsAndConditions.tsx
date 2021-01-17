import React from 'react';

import {
    Label,
    FormGroup,
    Input
} from "reactstrap";

const TermsAndConditions = () => {
    return (
        <FormGroup check className="text-left">
            <Label check>
                <Input type="checkbox" />
                <span className="form-check-sign" />I agree to the{" "}
                <a href="#pablo" onClick={e => e.preventDefault()}>
                    terms and conditions
                </a>.
            </Label>
        </FormGroup>
    );
}

export default TermsAndConditions;