import React from 'react';

import colors from '../colors';
import DataCard from './data-card.jsx';
import { PieChart } from '../charts/charts';
import vars from '../vars';

const path = '/statistics/versions';

export default class UsersOnLatestVersion extends DataCard {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        fetch(vars.url + path)
            .then((response) => response.json())
            .then((versionUsage) => {
                const latestPercentage = Math.round(
                    versionUsage.data.latestPercentage * 100);
                const notLatestPercentage = 100 - latestPercentage;
                this.setState({
                    data: [{name: 'Version ' + versionUsage.data.latestVersion,
                            value: latestPercentage,
                            unit: '% of users',},
                           {name: 'Older Versions',
                            value: notLatestPercentage,
                            unit: '% of users',},],
                    latestPercentage: latestPercentage,
                });
            });
    }
    render() {
        if (this.state.latestPercentage) {
            const chart = (<PieChart data={this.state.data}
                           colors={[colors.latestVersionPie]}
                           backgroundColor={colors.latestVersion}/>);
            return (
                <DataCard backgroundColor={colors.latestVersion}
                          chart={chart}
                          description="Users on Latest Version"
                          size="large"
                          value={this.state.latestPercentage + '%'} />
            );
        } else {
            return (<DataCard loading={true} />);
        }
    }
}
