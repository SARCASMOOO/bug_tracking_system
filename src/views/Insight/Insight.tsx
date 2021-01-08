import React from "react";
import Content from '../../components/UI/Content/Content';
import PerformanceChart from './PerformanceChart/PerformanceChart';
import IssueStats from './IssueStats/IssueStats';

import { Row } from "reactstrap";

class Insight extends React.Component {
    render() {
        return (
            <Content>
                <Row>
                    <PerformanceChart />
                    <IssueStats
                        title='Open Issues'
                        quantitiy={12} description='Number of open issues.'
                        iconName='icon-bulb-63' />
                    <IssueStats
                        title='Closed Issues'
                        quantitiy={12}
                        description='Number of open issues.'
                        iconName='icon-check-2' />
                    <IssueStats
                        title='Overdue Issues'
                        quantitiy={12}
                        description='Number of open issues.'
                        iconName='icon-alert-circle-exc' />
                </Row>
            </Content>
        );
    }
}

export default Insight;
