import React from 'react';

import { Col } from "reactstrap";
import SellingPoint from './SellingPoint/SellingPoint';

const sellingPoints = [
    {
        title: 'Tracking',
        description: `Manage your project and track issues.`,
        classes: 'mt-5',
        iconType: 'icon-info',
        iconName: 'icon-trophy'
    },
    {
        title: 'Simplicity',
        description: `This website was built with simplicity in mind.
        By making our tools easy to use you can get started faster.`,
        iconType: 'icon-primary',
        iconName: 'icon-triangle-right-17'
    },
    {
        title: 'Productivity',
        description: `This website is hancrafted with developer expierance
        in mind. We hope by solving common issues found in project
        management. We can help make an impact on software and
        augment its growth.`,
        iconType: 'icon-warning',
        iconName: 'icon-wifi'
    }
];

const SellingPoints = () =>
    <Col className="ml-auto" md="5">
        {
            sellingPoints.map(({ title, description, classes, iconName="", iconType="" }) => (
                <SellingPoint
                    title={title}
                    description={description}
                    iconName={iconName}
                    iconType={iconType}
                    classes={classes} />
            ))
        }
    </Col>


export default SellingPoints;