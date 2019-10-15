import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Semantic UI Components 
import { Button, Grid } from 'semantic-ui-react';

class Nextrip extends Component {
    render(){
        return(
            <Grid centered>
                mapped times for nextrip
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    routes: state.routeReducer,
    direction: state.directionsReducer,
    selectedRoute: state.singleRouteReducer,
    stops: state.stopsReducer
});

export default connect(mapStateToProps)(Nextrip);