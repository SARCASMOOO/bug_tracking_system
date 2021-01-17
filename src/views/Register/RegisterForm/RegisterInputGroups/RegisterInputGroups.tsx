import React from 'react';
import RegisterInputGroup from './RegisterInputGroup/RegisterInputGroup';
import validationModule from '../../../../util/validation';

interface IconProps {
    iconName: string;
}

const Icon = ({ iconName }: IconProps) => {
    return (<i className={"tim-icons " + iconName} />);
}

const formFields = [
    {
        placeholder: "Full Name",
        Icon: Icon,
        iconName: 'icon-single-02',
        validCondition: validationModule.isUsernameValid
    },
    {
        placeholder: "Email",
        Icon: Icon,
        iconName: 'icon-email-85',
        type: 'email',
        validCondition: validationModule.isEmailValid
    },
    {
        placeholder: "Password",
        Icon: Icon,
        iconName: 'icon-lock-circle',
        type: 'password',
        validCondition: validationModule.isPasswordValid
    }
];

const RegisterInputGroups = () =>
    <>
        {
            formFields.map(({ placeholder, Icon, iconName, type='text', validCondition}) =>
                <RegisterInputGroup
                    placeholder={placeholder}
                    type={type}
                    validCondition={validCondition}
                >
                    <Icon iconName={iconName} />
                </RegisterInputGroup>
            )
        }
    </>


export default RegisterInputGroups;