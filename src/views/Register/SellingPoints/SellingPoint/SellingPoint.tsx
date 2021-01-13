import { string } from 'prop-types';
import React, { Children } from 'react';

interface Props {
    description: string;
    title: string;
    children: JSX.Element;
}

const SellingPoint = ({ description, title, children }: Props) => {
    return (
        <div className="info-area info-horizontal mt-5">
            {children}
            <div className="description">
                <h3 className="info-title">{title}</h3>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>);
}

export default SellingPoint;