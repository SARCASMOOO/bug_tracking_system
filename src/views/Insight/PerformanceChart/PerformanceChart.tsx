import React from 'react';

import { Row, Col, Card, CardHeader, CardTitle, ButtonGroup, Button, CardBody } from "reactstrap";
import { Line } from "react-chartjs-2";
import classNames from "classnames";
import { chartExample1 } from "../../../variables/charts.js";

const PerformanceChart = () => {
    return (
        <Col xs="12">
            <Card className="card-chart">
                <CardHeader>
                    <Row>
                        <Col className="text-left" sm="6">
                            <h5 className="card-category">Issues Summary</h5>
                            <CardTitle tag="h2">Performance</CardTitle>
                        </Col>
                        <Col sm="6">
                            <ButtonGroup
                                className="btn-group-toggle float-right"
                                data-toggle="buttons"
                            >
                                <Button
                                    color="info"
                                    id="0"
                                    size="sm"
                                    tag="label"
                                    className={classNames("btn-simple", {
                                        active: true
                                    })}
                                    onClick={() => null}
                                >
                                    <input defaultChecked name="options" type="radio" />
                                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                        Open
                                                </span>
                                    <span className="d-block d-sm-none">
                                        <i className="tim-icons icon-single-02" />
                                    </span>
                                </Button>
                                <Button
                                    color="info"
                                    id="0"
                                    size="sm"
                                    tag="label"
                                    className={classNames("btn-simple", {
                                        active: false
                                    })}
                                    onClick={() => null}
                                >
                                    <input defaultChecked name="options" type="radio" />
                                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                        Closed
                                                </span>
                                    <span className="d-block d-sm-none">
                                        <i className="tim-icons icon-single-02" />
                                    </span>
                                </Button>

                                <Button
                                    color="info"
                                    id="0"
                                    size="sm"
                                    tag="label"
                                    className={classNames("btn-simple", {
                                        active: false
                                    })}
                                    onClick={() => null}
                                >
                                    <input defaultChecked name="options" type="radio" />
                                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                        Overdue
                                                </span>
                                    <span className="d-block d-sm-none">
                                        <i className="tim-icons icon-single-02" />
                                    </span>
                                </Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <div className="chart-area">
                        <Line
                            data={chartExample1["data1"]}
                            options={chartExample1.options}
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>

    );
}

export default PerformanceChart;