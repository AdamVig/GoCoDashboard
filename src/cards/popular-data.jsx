import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';

import mockData from '../mock-data';
import classes from './data-card.css';

const styles = {
    cardText: {
        fontSize: '1.5em',
        fontWeight: 300,
        padding: 0,
    },
    cardTitle: {
        fontSize: '2em',
        fontWeight: 500,
    },
};

export default class PopularData extends Component {
    render() {
        return (
            <Card className={`${classes.card} ${classes.medium}`}>
              <CardTitle title="Popular Data"
                         titleStyle={styles.cardTitle} />
              <CardText style={styles.cardText}>
                <ol>
                  {mockData.popularData.data.map((name) =>
                  <li key={name}>{name}</li>)}
                </ol>
              </CardText>
            </Card>
        );
    }
}
