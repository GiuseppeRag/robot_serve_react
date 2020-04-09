import React from 'react';
import {Button, Box} from '@material-ui/core';

class TurnLeftButton extends React.Component {

    handleCommand(action){
        this.props.handleCommand(action)
    }

    render() { 
        return (
            <Box border={2} borderColor="black" borderRadius={5} display="flex" justifyContent="center" alignItems="center" bgcolor="blue">
                <Button style={{width: 100, height: 100}}
                onMouseDown={() => this.handleCommand('lft')}
                onMouseUp={() => this.handleCommand('stop')}>Turn Left</Button>
            </Box>
        );
    }
}
 
export default TurnLeftButton;