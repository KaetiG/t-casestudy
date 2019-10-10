import React, { Component } from 'react';
import { connect } from 'react-redux'

// import Semantic UI Components 
import { Button, Icon, Header, Grid } from 'semantic-ui-react'

class Home extends Component {
    render(){
        return (
            <>
            <Grid>
                <Grid.Column width={6}>
                    <>
                    </>
                </Grid.Column>
                <Grid.Column width={4}>
                    Drop downs here
                </Grid.Column>
                <Grid.Column width={6}>
                    <>
                    </>
                </Grid.Column>
            </Grid>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapStateToProps)(Home);