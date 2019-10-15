import React, { Component } from 'react';
import { connect } from 'react-redux';
import Direction from './DirectionsDD';
import Stops from './StopsDD';
import Routes from './RoutesDD';

// import Semantic UI Components 
import { Button, Grid } from 'semantic-ui-react';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_ROUTES'})
    }

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
                        <Routes />
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