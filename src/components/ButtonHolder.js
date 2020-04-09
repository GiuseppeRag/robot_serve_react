import React from 'react';
import {Grid, Container, Box} from '@material-ui/core';
import FowardButton from './FowardButton'
import TurnLeftButton from './TurnLeftButton';
import TurnRightButton from './TurnRightButton';
import BackButton from './BackButton';

class ButtonHolder extends React.Component {
    state = {
        currentAction: 'Idle'
    }

    changeAction(action) {
        this.setState({
            currentAction: action
        })
    }

    render() {
        return (
            <Container>
            <Grid container spacing={2} style={{width: 350, height: 350}} alignItems="center">
                <Grid container spacing={2}>
                    <Grid item xs={4} spacing={3} style={styles}/>
                    <Grid item xs={4} spacing={3} >
                        <FowardButton onChange={(action) => this.changeAction(action)}/>
                    </Grid>
                    <Grid item xs={4} spacing={3} style={styles}/>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={4} spacing={3}>
                        <TurnLeftButton onChange={(action) => this.changeAction(action)}/>
                    </Grid>
                    <Grid item xs={4} spacing={3}>
                        <Box justifyContent="center" textAlign="center" style={styles}>
                            {this.state.currentAction}
                        </Box>
                    </Grid>
                    <Grid item xs={4} spacing={3}>
                        <TurnRightButton onChange={(action) => this.changeAction(action)}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={4} spacing={3} style={styles}/>
                    <Grid item xs={4} spacing={3}>
                        <BackButton onChange={(action) => this.changeAction(action)}/>
                    </Grid>
                    <Grid item xs={4} spacing={3} style={styles}/>
                </Grid>
            </Grid>
            </Container>
        );
    }
}

const styles = {
    width: 100,
    height: 100
}

export default ButtonHolder;