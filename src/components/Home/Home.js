import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        return (
            <>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapStateToProps)(Home);