import React from 'react';

import colors from '../colors';
import DataCard from './data-card.jsx';
import { PieChart } from '../charts/charts';
import vars from '../vars';

const path = '/statistics/users';

export default class TotalStudents extends DataCard {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        fetch(vars.url + path)
            .then((response) => response.json())
            .then((users) => {
                const usersPercentage = Math.round(users.data.percentage * 100);
                const notUsersPercentage = 100 - usersPercentage;
                this.setState({
                    data: [
                        {name: 'Current Users',
                         value: usersPercentage,
                         unit: '% of students'},
                        {name: 'Not Users',
                         value: notUsersPercentage,
                         unit: '% of students'},
                    ],
                    percentage: usersPercentage,
                });
            }).catch((error) => {
                this.setState({error: error});
            });
    }
    render() {
        if (this.state.percentage) {
            const chart = (<PieChart data={this.state.data}
                           colors={[colors.totalStudentsPie]}
                           backgroundColor={colors.totalStudents}/>);
            return (
                <DataCard backgroundColor={colors.totalStudents}
                          chart={chart}
                          description="Of Total Students"
                          size="large"
                          value={this.state.percentage + '%'} />
            );
        } else if (this.state.error) {
            return (<DataCard error={this.state.error} />);
        } else {
            return (<DataCard loading={true} />);
        }
    }
}
