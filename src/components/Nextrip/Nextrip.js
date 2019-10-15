import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Semantic UI Components 
import { Button, Grid, Table } from 'semantic-ui-react';

class Nextrip extends Component {
    render() {
        return (
            <Grid centered>
                <Grid.Column width={3} color="red">
                    <>
                    </>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Route</Table.HeaderCell>
                                <Table.HeaderCell>Direction</Table.HeaderCell>
                                <Table.HeaderCell>Stop</Table.HeaderCell>
                                <Table.HeaderCell>Gate/Terminal</Table.HeaderCell>
                                <Table.HeaderCell>Next Departure</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.props.nextrip.map((nextrip)=> <Table.Row>
                                <Table.Cell>{nextrip.Route}</Table.Cell>
                                <Table.Cell>{nextrip.RouteDirection}</Table.Cell>
                                <Table.Cell>{nextrip.Description}</Table.Cell>
                                <Table.Cell>{nextrip.Gate}{nextrip.Terminal}</Table.Cell>
                                <Table.Cell>{nextrip.DepartureText}</Table.Cell>
                            </Table.Row>)}
                        </Table.Body>
                    </Table>
                    <Button onClick={()=> {this.props.history.push('/home')}}>Go Back</Button>
                </Grid.Column>
                <Grid.Column width={3} color="blue">
                    <>
                    </>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    routes: state.routeReducer,
    direction: state.directionsReducer,
    selectedRoute: state.singleRouteReducer,
    stops: state.stopsReducer,
    selectedDirection: state.selectedDirectionReducer,
    selectedStop: state.selectedStopReducer,
    nextrip: state.nextripReducer
});

export default connect(mapStateToProps)(Nextrip);