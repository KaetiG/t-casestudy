import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Semantic UI Components 
import { Dropdown } from 'semantic-ui-react';

class Routes extends Component {
    state = {
        route: "",
    }

    handleRouteSelect = (e, { value }) => {
        this.setState({
            route: value
        })
        console.log({ value })
        this.props.dispatch({ type: 'FETCH_DIRECTIONS', payload: value })
        this.props.dispatch({ type: 'SELECTED_ROUTE', payload: value })
    }
    render() {
        const { value } = this.state.route;
        return (
            <Dropdown
                placeholder='Select Route'
                fluid
                selection
                options={this.props.routes.map((routes) => {
                    return {
                        key: routes.Description,
                        value: routes.Route,
                        text: routes.Description
                    }
                })}
                value={value}
                onChange={this.handleRouteSelect}
            />
        )
    }
}

const mapStateToProps = state => ({
    routes: state.routeReducer
});

export default connect(mapStateToProps)(Routes);