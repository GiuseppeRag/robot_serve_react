import React from 'react';
import {Button, Box} from '@material-ui/core';

class FowardButton extends React.Component {

    handleCommand(action){
        this.props.handleCommand(action)
    }

    render() { 
        return (
            <Box border={2} borderColor="black" borderRadius={5} display="flex" justifyContent="center" alignItems="center" bgcolor="red">
                <Button style={{width: 100, height: 100}} 
                onMouseDown={() => this.handleCommand('fwd')}
                onMouseUp={() => this.handleCommand('stop')}>Foward</Button>
            </Box>
        );
    }
}
 
export default FowardButton;