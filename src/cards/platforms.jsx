import React from 'react';
import { CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';

import colors from '../colors';
import classes from './platforms.css';
import DataCard from './data-card.jsx';
import { PieChart } from '../charts/charts';
import vars from '../vars';

const path = '/statistics/platforms';

const styles = {
    chip: {
        display: 'inline-block',
        textAlign: 'center',
        margin: '2.5%',
        width: '45%',
    },
    chipText: {
        color: colors.chipText,
        fontSize: '1.5em',
    },
}

export default class Platforms extends DataCard {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        fetch(vars.url + path)
            .then((response) => response.json())
            .then((platformUsage) => {
                const platformUsageData = platformUsage.data.map((platform) => {
                    platform.value = Math.round(platform.percentage * 100);
                    return platform;
                });
                this.setState({data: platformUsageData});
            });
    }
    render() {
        if (this.state.data) {
            const chart = (<PieChart data={this.state.data}
                           colors={colors.platformsPie}
                           backgroundColor={colors.platforms}/>);

            return (
                <DataCard backgroundColor={colors.platforms}
                          chart={chart}
                          size="large">
                  <CardText>
                    <span className={classes.title}>Platforms</span>
                    <div>
                      {
                          this.state.data.map((entry, index) => (
                              <Chip backgroundColor={colors.platformsPie[index]}
                                    key={entry.name}
                                    labelStyle={styles.chipText}
                                    style={styles.chip}>
                                {entry.name}
                              </Chip>))
                      }
                </div>
                    </CardText>
                    </DataCard>
            );
        } else {
            return (<DataCard loading={true} />);
        }

    }
}
