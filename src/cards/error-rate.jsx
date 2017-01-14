import React from 'react';

import colors from '../colors';
import DataCard from './data-card.jsx';
import mockData from '../mock-data';
import { SparkLine } from '../charts/charts';

export default class ErrorRate extends DataCard {
    render() {
        const totalErrors = mockData.errorRate.data.reduce(
            (sum, point) => {
                if (typeof sum === 'object') {
                    sum = 0;
                }
                return sum + point.value
            });
        const errorRate = `${totalErrors / mockData.errorRate.total * 100}%`
        return (
            <DataCard backgroundColor={colors.errorRate}
                      chart={<SparkLine data={mockData.errorRate.data} />}
                      description="Error Rate"
                      value={errorRate} />
        );
    }
}
