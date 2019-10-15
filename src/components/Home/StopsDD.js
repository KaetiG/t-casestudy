import React, { Component } from 'react';
import { connect } from 'react-redux'

// import Semantic UI Components 
import { Button, Dropdown } from 'semantic-ui-react';

class Stops extends Component {
    state = {
        stop: ""
    }
    handleStopSelect = (e, { value }) => {
        this.props.dispatch({type: 'SELECTED_STOP', payload: value})
        const tripData = {route: this.props.selectedRoute, direction: this.props.selectedDirection, stop: value}
        console.log(value)
        this.props.dispatch({type: 'FETCH_NEXTRIP', payload: tripData})
    }
    handleSubmit = () => {
        console.log('submit clicked')
        
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

export default connect(mapStateToProps)(Stops);