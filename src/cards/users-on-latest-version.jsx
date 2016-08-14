import React from 'react';

import colors from '../colors';
import DataCard from './data-card.jsx';
import mockData from '../mock-data';
import { PieChart } from '../charts/charts';

export default class UsersOnLatestVersion extends DataCard {
    render() {
        const chart = (<PieChart data={mockData.usersOnLatestVersion.data}
                       colors={[colors.latestVersionPie]}
                       backgroundColor={colors.latestVersion}/>);
        return (
            <DataCard backgroundColor={colors.latestVersion}
                      chart={chart}
                      description="Users on Latest Version"
                      size="large"
                      value={mockData.usersOnLatestVersion.percentage + '%'} />
        );
    }
}
