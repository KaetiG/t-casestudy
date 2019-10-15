import React, { Component } from 'react';
import { connect } from 'react-redux';
//imports for components to display
//this declutters and keeps code clean and easier to read and follow
import Direction from './DirectionsDD';
import Stops from './StopsDD';
import Routes from './RoutesDD';

// import Semantic UI Components 
import { Grid } from 'semantic-ui-react';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ROUTES' })
        //when app is loaded, the routes are automatically populated into the routes dropdown
    }

    render() {
        return (
            //I used semantic ui so that I could build styling into the code instead of saving it until the end 
            <>
                <Grid centered>
                    <Grid.Column width={5} color="red">
                        <>
                        </>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <h2>Select Route</h2>
                        <Routes />
                        <h2>Select Direction</h2>
                        <Direction />
                        <h2>Select Stop</h2>
                        <Stops />
                    </Grid.Column>
                    <Grid.Column width={5} color="blue">
                        <>
                        </>
                    </Grid.Column>
                    <Grid.Row color="yellow">
                        <>
                        </>
                    </Grid.Row>
                </Grid>
            </>
        )
    }
}

const mapStateToProps = state => ({
    routes: state.routeReducer
});

export default connect(mapStateToProps)(Home);