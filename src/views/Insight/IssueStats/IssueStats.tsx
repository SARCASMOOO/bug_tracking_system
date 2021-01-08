import React from 'react';

import { Row, Col, Card, CardTitle, CardBody, CardFooter } from "reactstrap";
import {Icons} from '../../../models/iconsModel';

interface Props {
    title: string;
    quantitiy: number; 
    description: string;
    iconName: Icons;
}

const IssueStats = ({title, quantitiy, description, iconName}: Props) => {
    return (
        <Col lg="3" md="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col xs="5">
                <div className="info-icon text-center icon-success">
                  <i className={"tim-icons " + iconName} />
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">{title}</p>
                  <CardTitle tag="h3">{quantitiy}</CardTitle>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="tim-icons icon-refresh-01" /> 
              {description}
            </div>
          </CardFooter>
        </Card>
      </Col>
    );
}

export default IssueStats;