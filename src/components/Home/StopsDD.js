import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// import Semantic UI Components 
import { Button, Dropdown } from 'semantic-ui-react';

class Stops extends Component {
    state = {
        stop: ""
    }
    handleStopSelect = (e, { value }) => {
        this.props.dispatch({ type: 'SELECTED_STOP', payload: value })
        const tripData = { route: this.props.selectedRoute, direction: this.props.selectedDirection, stop: value }
        console.log(value)
        this.props.dispatch({ type: 'FETCH_NEXTRIP', payload: tripData })
        //dispatches send properties to reducers/sagas, 
        //which send the same properties to the server side that communicate with the API
    }
    handleSubmit = () => {
        this.props.history.push('/nextrip')
        //this brings user to the nextrip page
    }
    render() {
        const { value } = this.state.stop;
        return (
            <>
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
                //for each stop in the array, they are listed as the options in the dropdown
                />
                <br />
                {this.props.selectedStop ?
                    <Button
                        className="submitButton"
                        fluid
                        color="grey"
                        onClick={this.handleSubmit} >Submit</Button>

                    :
                    <Button
                        className="submitButton"
                        fluid
                        color="grey"
                        disabled
                    >Submit</Button>
                    //this ternary disables the submit button until a stop is chosen. 
                    //I chose this condition because the stops do not show until the other 2 fields are chosen
                    //that way all three pieces of info needed for nextrip info is sent 
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    routes: state.routeReducer,
    direction: state.directionsReducer,
    selectedRoute: state.singleRouteReducer,
    stops: state.stopsReducer,
    selectedDirection: state.selectedDirectionReducer,
    selectedStop: state.selectedStopReducer
});

export default withRouter(connect(mapStateToProps)(Stops));