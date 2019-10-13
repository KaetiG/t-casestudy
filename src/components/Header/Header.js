import React from 'react'
import { Header, Icon, Grid } from 'semantic-ui-react'

const AppHeader = () => (
    <Grid textAlign="center">
        <Grid.Row />
        <Grid.Row>
            <Grid.Column width={6} color="yellow">
                <>
                </>
            </Grid.Column>
            <Grid.Column width={4} color="yellow">
                <Header as='h1' icon color='blue'>
                    <Icon 
                        name='bus' 
                        color='blue' />
                    Find Your Way!
                </Header>
            </Grid.Column>
            <Grid.Column width={6} color="yellow">
                <>
                </>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default AppHeader;