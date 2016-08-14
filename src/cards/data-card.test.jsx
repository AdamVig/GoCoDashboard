import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { CardMedia } from 'material-ui/Card';

import colors from '../colors';
import DataCard from './data-card.jsx';
import mockData from '../mock-data';
import { SparkLine } from '../charts/spark-line.jsx';

describe('Data card', () => {x
    it('should contain CardMedia', () => {
        const card = (<DataCard backgroundColor={colors.dailyActiveUsers}
                      chart={<SparkLine data={mockData.dailyActiveUsers.data} />}
                      description="Daily Active Users"
                      value={last(mockData.dailyActiveUsers.data).value} />)
        const dataCard = shallow(card);
        expect(dataCard.contains(<CardMedia />)).to.be.true();
    });
});
