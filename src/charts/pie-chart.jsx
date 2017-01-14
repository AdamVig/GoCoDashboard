import React, { Component, PropTypes } from 'react';
import { Cell, Pie, PieChart as RePieChart,
         ResponsiveContainer, Tooltip } from 'recharts';

import CustomTooltip from './custom-tooltip';

export default class PieChart extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        colors: PropTypes.array,
        data: PropTypes.array,
    }
    /**
     * Get a color from component properties if exists, otherwise return
     * background color
     * @param {number} index Current index in data array
     * @return {string} Color
     */
    getColor(index) {
        return this.props.colors[index] || this.props.backgroundColor;
    }
    // TODO get ESLint working in Emacs
    render() {
        return (
            <ResponsiveContainer>
              <RePieChart>
                <Pie data={this.props.data}>
                  {
                      // Insert cells with corresponding colors
                      this.props.data.map((entry, index) =>
                                          <Cell key={entry.value}
                                                    fill={this.getColor(index)}/>)
                  }
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </RePieChart>
            </ResponsiveContainer>
        );
    }
}
