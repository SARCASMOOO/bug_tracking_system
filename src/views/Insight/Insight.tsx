import React from "react";
import Content from '../../components/UI/Content/Content';
import PerformanceChart from './PerformanceChart/PerformanceChart';


class Insight extends React.Component {
    render() {
        return (
            <Content>
                <PerformanceChart/>
            </Content>
        );
    }
}

export default Insight;
