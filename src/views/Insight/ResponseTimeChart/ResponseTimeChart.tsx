import React from 'react';

import { Card, CardHeader, CardBody, CardTitle, Col } from "reactstrap";
import { Line } from "react-chartjs-2";

import { chartExample4 } from "../../../variables/charts.js";

const ResponseTimeChart = () => {
    return (
        <Col sm="12">
            <Card className="card-chart">
                <CardHeader>
                    <h5 className="card-category">Average time issue is open</h5>
                    <CardTitle tag="h3">
                        Response Time
            </CardTitle>
                </CardHeader>
                <CardBody>
                    <div className="chart-area">
                        <Line
                            data={chartExample4.data}
                            options={chartExample4.options}
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}

export default ResponseTimeChart;