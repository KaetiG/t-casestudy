import React from 'react'
import { Header, Icon, Grid } from 'semantic-ui-react'

const AppHeader = () => (
    <Grid>
        <Grid.Row />
        <Grid.Row>
            <Grid.Column width={6}>
                <>
                </>
            </Grid.Column>
            <Grid.Column width={4}>
                <Header as='h2' icon>
                    <Icon 
                        name='bus' 
                        color='blue' />
                    Find Your Way!
                </Header>
            </Grid.Column>
            <Grid.Column width={6}>
                <>
                </>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default AppHeader;