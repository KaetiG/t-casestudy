import React, { Component } from 'react';
import { connect } from 'react-redux';
import Direction from './DirectionsDD';
import Stops from './StopsDD';

// import Semantic UI Components 
import { Button, Grid, Dropdown } from 'semantic-ui-react';

class Home extends Component {
state = {
    route: "",
}
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_ROUTES'})
    }

    handleSubmit = () => {
    console.log('submit clicked')
}

handleRouteSelect = (e, { value }) => {
    this.setState({ 
        route: value })
    console.log({value})
    this.props.dispatch({type: 'FETCH_DIRECTIONS', payload: value})
    this.props.dispatch({type: 'SELECTED_ROUTE', payload: value})
}
    render() {
        const { value } = this.state.route;
        return (
            <>
                <Grid centered>
                    <Grid.Column width={6} color="red">
                        <>
                        </>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <h2>Select Route</h2>
                        <Dropdown
                            placeholder='Select Route'
                            fluid
                            selection
                            options={this.props.routes.map((routes)=> {
                                return{
                                    key: routes.Description,
                                    value: routes.Route,
                                    text: routes.Description
                                }})}
                            value={value}
                            onChange={this.handleRouteSelect}
                        />
                        <h2>Select Direction</h2>
                        <Direction />
                        <h2>Select Stop</h2>
                        <Stops />
                        <br />
                        <Button
                        className="submitButton"
                        fluid
                        color="grey"
                        onClick={this.handleSubmit} >Submit</Button>
                    </Grid.Column>
                    <Grid.Column width={6} color="blue">
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