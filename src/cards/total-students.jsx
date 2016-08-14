import React from 'react';

import colors from '../colors';
import DataCard from './data-card.jsx';
import mockData from '../mock-data';
import { PieChart } from '../charts/charts';

export default class TotalStudents extends DataCard {
    render() {
        const chart = (<PieChart data={mockData.totalStudents.data}
                       colors={[colors.totalStudentsPie]}
                       backgroundColor={colors.totalStudents}/>);
        return (
            <DataCard backgroundColor={colors.totalStudents}
                      chart={chart}
                      description="Of Total Students"
                      size="large"
                      value={mockData.totalStudents.percentage + '%'} />
        );
    }
}
