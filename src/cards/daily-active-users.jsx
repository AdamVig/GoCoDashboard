import { last } from 'underscore';
import React from 'react';

import colors from '../colors';
import DataCard from './data-card.jsx';
import mockData from '../mock-data';
import { SparkLine } from '../charts/charts';

export default class DailyActiveUsers extends DataCard {
    render() {
        return (
            <DataCard backgroundColor={colors.dailyActiveUsers}
                      chart={<SparkLine data={mockData.dailyActiveUsers.data} />}
                      description="Daily Active Users"
                      value={last(mockData.dailyActiveUsers.data).value} />
        );
    }
}
