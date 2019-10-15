import React, { Component } from 'react';
import { connect } from 'react-redux'

// import Semantic UI Components 
import { Dropdown } from 'semantic-ui-react';

class Directions extends Component {
    state = {
        direction: "",
    }
    handleDirectionSelect = (e, { value }) => {
        this.setState({ 
            direction: value })
        console.log({value})
        this.props.dispatch({type: 'FETCH_STOPS', payload: value})
    }
    render() {
        const { value } = this.state.direction;
        return (
            <Dropdown
                placeholder='Select Direction'
                fluid
                selection
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
    directions: state.directionsReducer
});

export default connect(mapStateToProps)(Directions);