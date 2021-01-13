import React from 'react';

import { Col } from "reactstrap";
import SellingPoint from './SellingPoint/SellingPoint';

const Icon = () => (
    <div className="icon icon-warning">
        <i className="tim-icons icon-wifi" />
    </div>
);

const sellingPoints = [
    {
        title: 'Connectivity',
        description: "Connectivity"
    },
    {
        title: 'Simplicity',
        description: `This website was built with simplicity in mind.
        By making our tools easy to use you can get started faster.`
    },
    {
        title: 'Connectivity',
        description: `This website is hancrafted with developer expierance
        in mind. We hope by solving common issues found in project
        management. We can help make an impact on software and
        augment its growth.`
    }
];

const SellingPoints = () => 
        <Col className="ml-auto" md="5">
            {
                sellingPoints.map(({ title, description }) => (
                    <SellingPoint title={title} description={description}>
                        <Icon />
                    </SellingPoint>
                ))
            }
        </Col>


export default SellingPoints;