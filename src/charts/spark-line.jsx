import React, { Component, PropTypes } from 'react';
import { Line, LineChart, Tooltip, ResponsiveContainer } from 'recharts';

import colors from '../colors';
import CustomTooltip from './custom-tooltip.jsx';

const margins = { top: 0, right: 0, left: 0, bottom: 0 };

export default class SparkLine extends Component {
    static propTypes = {
        data: PropTypes.array,
    }
    render() {
        return (
            <ResponsiveContainer>
              <LineChart className="spark-line"
                         data={this.props.data}
                         margin={margins}>
                <Line type="monotone"
                      dataKey="value"
                      dot={false}
                      stroke={colors.sparkLineStroke}
                      strokeWidth={3}/>
                <Tooltip content={<CustomTooltip/>} />
              </LineChart>
            </ResponsiveContainer>
        );
    }
}
