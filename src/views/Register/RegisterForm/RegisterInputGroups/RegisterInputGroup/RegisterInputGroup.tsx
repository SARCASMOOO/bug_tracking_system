import React, { useState } from 'react';
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
    validCondition: (inputText: string) => boolean;
}

type onChangeEvent = React.FormEvent<HTMLInputElement>;

const RegisterInputGroup = ({ children, placeholder, type = "text", validCondition }: Props) => {
    const [focus, setFocus] = useState(false);
    const [inputText, setInputText] = useState('');

    // { registerEmailState: "has-danger" }
    const onSubmit = () => {
        // if (error) {
        //     console.log('Error in form');
        // } else {
        //     console.log('No error');
        // }
    };

    const onChange = ((e: onChangeEvent) => {
        setInputText(e.currentTarget.value);
        // setError(validCondition(inputText));
    });

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
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </InputGroup>
    );
}

export default RegisterInputGroup;