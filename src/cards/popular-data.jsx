import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { sortBy } from 'underscore';

import classes from './data-card.css';
import Loader from '../components/loader.jsx';
import vars from '../vars';

const numListItems = 6;
const path = '/statistics/usage';

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
    cardTitleContainer: {
        paddingBottom: '0',
    },
};

export default class PopularData extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    /**
     * Convert object in form {endpoint: numberOfRequests} to list
     */
    componentDidMount() {
        fetch(vars.url + path)
            .then((response) => response.json())
            .then((usage) => {
                usage = Object.keys(usage.data)
                    .map((name) => {
                        return {name: name, value: usage.data[name]};
                    });
                usage = sortBy(usage, 'value');
                usage = usage.reverse()
                    .slice(0, numListItems);
                this.setState({usage: usage});
            });
    }
    render() {
        let cardContents = (
            <Loader />
        );
        if (this.state.usage) {
            cardContents = (
                <CardText style={styles.cardText}>
                  <ol>
                    {this.state.usage.map((el) =>
                    <li key={el.name}>{el.name}</li>)}
                </ol>
                    </CardText>
            );
        }
        return (
            <Card className={`${classes.card} ${classes.medium}`}>
              <CardTitle title="Popular Data"
                         titleStyle={styles.cardTitle}
                         style={styles.cardTitleContainer}/>
              {cardContents}
            </Card>
        );
    }
}
