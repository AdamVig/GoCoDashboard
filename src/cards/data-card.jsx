import React, { Component, PropTypes } from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

import classes from './data-card.css';
import Loader from '../components/loader.jsx';

const styles = {
    cardSubtitle: {
        fontSize: '1.25em',
        fontWeight: 300,
    },
    cardTitle: {
        fontSize: '3.25em',
        fontWeight: 500,
        lineHeight: '1em',
    },
};

export default class DataCard extends Component {
    static defaultProps = {
        size: 'small',
    }
    static propTypes = {
        backgroundColor: PropTypes.string,
        chart: PropTypes.element,
        children: PropTypes.object,
        description: PropTypes.string,
        size: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    }
    render() {
        if (this.props.loading) {
            return (
                <Card className={`${classes.card} ${classes[this.props.size]}`}>
                  <Loader />
                </Card>
            );
        } else if (this.props.error) {
            return (
                <Card className={`${classes.card} ${classes[this.props.size]}`}>
                  <CardTitle title="Error"
                             subtitle={this.props.error.message}
                             titleStyle={styles.cardTitle}
                             subtitleStyle={styles.cardSubtitle} />
                </Card>
            );
        } else {
            return (
                <Card className={`${classes.card} ${classes[this.props.size]}`}>
                  <CardMedia className={classes.cardChart}
                             style={{backgroundColor: this.props.backgroundColor}}>
                    { this.props.chart }
                  </CardMedia>
                  {
                      this.props.value &&
                          <CardTitle title={this.props.value}
                                         subtitle={this.props.description}
                                         titleStyle={styles.cardTitle}
                                         subtitleStyle={styles.cardSubtitle} />
                          }
                          {this.props.children}
                </Card>
            );
        }
    }
}
