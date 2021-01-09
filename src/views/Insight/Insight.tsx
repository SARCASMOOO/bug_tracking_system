import React from "react";
import Content from '../../components/UI/Content/Content';
import PerformanceChart from './PerformanceChart/PerformanceChart';
import IssueStats from './IssueStats/IssueStats';
import { Icons } from '../../models/iconsModel';
import { Row } from "reactstrap";
import ResponseTimeChart from "./ResponseTimeChart/ResponseTimeChart";

const Insight = () => 
        <Content>
            <Row>
                <IssueStats
                    title='Open Issues'
                    quantitiy={12} description='Update number of open issues.'
                    iconName={Icons.iconBulb63} />
                <IssueStats
                    title='Closed Issues'
                    quantitiy={12}
                    description='Update number of closed issues.'
                    iconName={Icons.iconCheck2} />
                <IssueStats
                    title='Overdue Issues'
                    quantitiy={12}
                    description='Update number of overdue issues.'
                    iconName={Icons.iconAlertCircleExc} />
                <PerformanceChart />
            </Row>
            <Row>
                <ResponseTimeChart />
            </Row>
        </Content>


export default Insight;
