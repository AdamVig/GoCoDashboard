import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import classes from './loader.css';
import colors from '../colors';

const styles = {
    loader: {
        // maxWidth: '50%',
        display: 'inline-block',
        position: 'relative',
        // top: 'auto',
        // left: 'auto',
    },
};

// TODO make loader work on large screen sizes
export default class Loader extends Component {
    render() {
        return (
            <div className={classes.loaderContainer}>
              <RefreshIndicator
                 size={75}
                 left={0}
                 top={25}
                 loadingColor={colors.loaderStroke}
                 status="loading"
                 style={styles.loader}
                 />
            </div>
        );
    }
}
