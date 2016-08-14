import React from 'react';
import { CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';

import colors from '../colors';
import classes from './platforms.css';
import DataCard from './data-card.jsx';
import mockData from '../mock-data';
import { PieChart } from '../charts/charts';

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
    render() {
        const chart = (<PieChart data={mockData.platforms.data}
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
                      mockData.platforms.data.map((entry, index) => (
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
    }
}
