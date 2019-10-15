import React, { Component } from 'react';
import { connect } from 'react-redux'

// import Semantic UI Components 
import { Dropdown } from 'semantic-ui-react';

class Stops extends Component {
    state = {
        stop: ""
    }
    handleStopSelect = (e, { value }) => {
        //const tripData = {route: this.props.selectedRoute, direction: this.props.selectedDirection, stop: value}
        console.log(value)
        //this.props.dispatch({type: 'FETCH_NEXTRIP', payload: tripData})
    }
    render() {
        const { value } = this.state.stop;
        return (
            <Dropdown
                placeholder='Select Stop'
                fluid
                selection
                options={this.props.stops.map((stop) => {
                    return {
                        key: stop.Value,
                        value: stop.Value,
                        text: stop.Text
                    }
                })}
                value={value}
                onChange={this.handleStopSelect}
            />
        )
    }
}

const mapStateToProps = state => ({
    routes: state.routeReducer,
    direction: state.directionsReducer,
    selectedRoute: state.singleRouteReducer,
    stops: state.stopsReducer
});

export default connect(mapStateToProps)(Stops);