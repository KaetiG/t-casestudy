import React, { Component } from 'react';
import { connect } from 'react-redux'

// import Semantic UI Components 
import { Dropdown } from 'semantic-ui-react';

class Directions extends Component {
    state = {
        direction: ""
    }
    handleDirectionSelect = (e, { value }) => {
        const stopData = { route: this.props.selectedRoute, direction: value }
        console.log(value, this.props.selectedRoute)
        this.props.dispatch({ type: 'FETCH_STOPS', payload: stopData })
        this.props.dispatch({ type: 'SELECTED_DIRECTION', payload: value })
        //dispatches send properties to reducers/sagas, 
        //which send the same properties to the server side that communicate with the API
    }
    render() {
        const { value } = this.state.direction;
        return (
            <Dropdown
                placeholder='Select Direction'
                fluid
                selection
                //for each stop in the array, they are listed as the options in the dropdown
                options={this.props.directions.map((direction) => {
                    return {
                        key: direction.Value,
                        value: direction.Value,
                        text: direction.Text
                    }
                })}
                value={value}
                onChange={this.handleDirectionSelect}
            />
        )
    }
}

const mapStateToProps = state => ({
    routes: state.routeReducer,
    directions: state.directionsReducer,
    selectedRoute: state.singleRouteReducer
});

export default connect(mapStateToProps)(Directions);