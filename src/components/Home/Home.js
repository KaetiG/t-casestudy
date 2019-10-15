import React, { Component } from 'react';
import { connect } from 'react-redux'

// import Semantic UI Components 
import { Button, Grid, Dropdown } from 'semantic-ui-react';



const directionOptions = [
    {key: 'North', value: 'North', text: 'North'},
    {key: 'South', value: 'South', text: 'South'},
    {key: 'East', value: 'East', text: 'East'},
    {key: 'West', value: 'West', text: 'West'}
]

const stopOptions = [
    {key: '1', value: '1', text: '1'},
    {key: '2', value: '2', text: '2'},
    {key: '3', value: '3', text: '3'},
    {key: '4', value: '4', text: '4'}
]

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
                        <Dropdown
                            placeholder='Select Direction'
                            fluid
                            selection
                            options={directionOptions}
                        />
                        <h2>Select Stop</h2>
                        <Dropdown
                            placeholder='Select Stop'
                            fluid
                            selection
                            options={stopOptions}
                        />
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