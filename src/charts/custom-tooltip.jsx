import React, { Component, PropTypes } from 'react';

import classes from './custom-tooltip.css';

export default class CustomTooltip extends Component {
    static propTypes = {
        active: PropTypes.bool,
        type: PropTypes.string,
        payload: PropTypes.array,
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }
    render() {
        const { active } = this.props;

        if (active) {
            const payload = this.props.payload[0].payload;
            let content = `${payload.name} - ${payload.value}`;

            // Decide whether or not to add a space before unit
            if (payload.unit.startsWith('%')) {
                content += `${payload.unit}`;
            } else {
                content += ` ${payload.unit}`;
            }
            return (
                <div className={classes.tooltip}>
                  <p className={classes.label}>
                    {content}
                  </p>
                </div>
            );
        }

        return null;
    }
}
