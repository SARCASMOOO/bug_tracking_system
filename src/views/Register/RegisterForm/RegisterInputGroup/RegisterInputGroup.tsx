import React, { ComponentType, useState } from 'react';
import classnames from "classnames";

import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";

interface Props {
    children: JSX.Element;
    placeholder: string;
    type: string;
}

const RegisterInputGroup = ({children, placeholder, type="text"}: Props) => {
    const [focus, setFocus] = useState(false);

    return (
        <InputGroup className={classnames({ "input-group-focus": focus })}>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                    {children}
                </InputGroupText>
            </InputGroupAddon>
            <Input
                placeholder={placeholder}
                type={type}
                onFocus={(e: Event) => setFocus(true)}
                onBlur={(e: Event) => setFocus(false)}
            />
        </InputGroup>
    );
}

export default RegisterInputGroup;