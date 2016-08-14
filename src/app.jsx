import { debounce } from 'underscore';
import React, { Component } from 'react';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Improve touch events:  http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import AppBar from 'material-ui/AppBar';

import {
    DailyActiveUsers,
    ErrorRate,
    Platforms,
    PopularData,
    TotalStudents,
    UsersOnLatestVersion,
} from './cards/cards';
import classes from './app.css';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#014983',    // Gordon blue
        primary2Color: '#46DBD3',    // Light Teal
        primary3Color: '#838C8D',    // Muted Gray
        accent1Color: '#F2A42C',    // Orange
        accent2Color: 'rgb(238, 238, 238)',    // Light Gray
        accent3Color: '#245D66',    // Dark Aquamarine
        pickerHeaderColor: '#014983',    // Gordon Blue
    },
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.breakpoint = {
            large: 976,
            medium: 656,
        };
        this.state = {windowWidth: window.innerWidth};
    }
    cards = {
        dailyActiveUsers: <DailyActiveUsers key="dailyActiveUsers" />,
        usersOnLatestVersion: (<UsersOnLatestVersion
                               key="usersOnLatestVersion" />),
        totalStudents: <TotalStudents key="totalStudents" />,
        popularData: <PopularData key="popularData" />,
        errorRate: <ErrorRate key="errorRate" />,
        platforms: <Platforms key="platforms" />,
    }
    componentDidMount() {
        window.addEventListener('resize', this.getResizeHandler());
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.getResizeHandler());
    }
    /**
     * Get cards in order for the current screen size
     * @return {Element[]} Cards in correct order for rendering
     */
    getCards() {
        // Three columns
        if (this.state.windowWidth >= this.breakpoint.large) {
            return [
                this.cards.dailyActiveUsers,
                this.cards.usersOnLatestVersion,
                this.cards.totalStudents,
                this.cards.popularData,
                this.cards.errorRate,
                this.cards.platforms,
            ];
        // Two columns
        } else if (this.state.windowWidth >= this.breakpoint.medium) {
            return [
                this.cards.dailyActiveUsers,
                this.cards.usersOnLatestVersion,
                this.cards.popularData,
                this.cards.errorRate,
                this.cards.totalStudents,
                this.cards.platforms,
            ];
        // One column
        } else {
            return [
                this.cards.dailyActiveUsers,
                this.cards.errorRate,
                this.cards.totalStudents,
                this.cards.usersOnLatestVersion,
                this.cards.popularData,
                this.cards.platforms,
            ];
        }
    }
    /**
     * Get window resize handler
     * @return {function} Updates state.windowWidth to the current width of the
     *     window at a maximum rate of once per 500ms
     */
    getResizeHandler() {
        const waitTimeMs = 500;
        return debounce(() => {
            this.setState({windowWidth: window.innerWidth});
        }, waitTimeMs);
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
              <div className={classes.appContainer}>
                <header>
                  <AppBar
                     title="GoCo Dashboard"
                     showMenuIconButton={false}
                     />
                </header>
                <main className={classes.main}>
                  {this.getCards()}
                </main>
              </div>
            </MuiThemeProvider>
        );
    }
}

render(<App />, document.getElementById('app'));
