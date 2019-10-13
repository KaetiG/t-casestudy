import React, { Component } from 'react';
import { connect } from 'react-redux'

// import Semantic UI Components 
import { Button, Icon, Header, Grid, Dropdown } from 'semantic-ui-react'

const routeOptions = [
    {key: 'get from API 1', value: 'get from API 1', text: 'get from API 1'},
    {key: 'get from API 2', value: 'get from API 2', text: 'get from API 2'},
    {key: 'get from API 3', value: 'get from API 3', text: 'get from API 3'}
]

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
handleSubmit = () => {
    console.log('submit clicked')
}
    render() {
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
                            options={routeOptions}
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

const mapStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapStateToProps)(Home);