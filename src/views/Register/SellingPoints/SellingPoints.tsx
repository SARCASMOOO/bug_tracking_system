import React from 'react';

import { Col } from "reactstrap";

const SellingPoints = () => {
    return (
        <Col className="ml-auto" md="5">
            <div className="info-area info-horizontal mt-5">
                <div className="icon icon-warning">
                    <i className="tim-icons icon-wifi" />
                </div>
                <div className="description">
                    <h3 className="info-title">Connectivity</h3>
                    <p className="description">
                        Get more done by efficiently managing your projects.
                        Having a clear goal can improve direction in your project
                        and help you get more done!
                    </p>
                </div>
            </div>
            <div className="info-area info-horizontal">
                <div className="icon icon-primary">
                    <i className="tim-icons icon-triangle-right-17" />
                </div>
                <div className="description">
                    <h3 className="info-title">Simplicity</h3>
                    <p className="description">
                        This website was built with simplicity in mind.
                        By making our tools easy to use you can get started faster.
            </p>
                </div>
            </div>
            <div className="info-area info-horizontal">
                <div className="icon icon-info">
                    <i className="tim-icons icon-trophy" />
                </div>
                <div className="description">
                    <h3 className="info-title">Tailored</h3>
                    <p className="description">
                        This website is hancrafted with developer expierance
                        in mind. We hope by solving common issues found in project
                        management. We can help make an impact on software and
                        augment its growth.
            </p>
                </div>
            </div>
        </Col>
    );
}

export default SellingPoints;