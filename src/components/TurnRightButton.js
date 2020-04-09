import React from 'react';
import {Button, Box} from '@material-ui/core';

class TurnRightButton extends React.Component {

    handleCommand(action){
        this.props.handleCommand(action)
    }

    render() { 
        return (
            <Box border={2} borderColor="black" borderRadius={5} display="flex" justifyContent="center" alignItems="center" bgcolor="yellow">
                <Button style={{width: 100, height: 100}}
                onMouseDown={() => this.handleCommand('rght')}
                onMouseUp={() => this.handleCommand('stop')}>Turn Right</Button>
            </Box>
        );
    }
}
 
export default TurnRightButton;