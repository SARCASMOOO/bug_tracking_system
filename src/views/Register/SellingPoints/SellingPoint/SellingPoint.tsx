import React from 'react';

interface Props {
    description: string;
    title: string;
    classes?: string;
    iconType: string;
    iconName: string;
}

interface IconProps {
    iconType: string;
    iconName: string;
}

const Icon = ({ iconType = "", iconName = "" }: IconProps) => (
    <div className={"icon " + iconType}>
        <i className={"tim-icons " + iconName} />
    </div>
);

const SellingPoint = ({ description, title, iconType, iconName, classes = '' }: Props) => {
    return (
        <div className={"info-area info-horizontal " + classes}>
            <Icon iconType={iconType} iconName={iconName} />
            <div className="description">
                <h3 className="info-title">{title}</h3>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>);
}

export default SellingPoint;