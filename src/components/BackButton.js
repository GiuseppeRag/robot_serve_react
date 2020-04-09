import React from 'react';
import {Button, Box} from '@material-ui/core';


class BackButton extends React.Component {

    handleCommand(action){
        this.props.handleCommand(action)
    }

    render() { 
        return (
            <Box border={2} borderColor="black" borderRadius={5} display="flex" justifyContent="center" alignItems="center" bgcolor="green">
                <Button style={{width: 100, height: 100, border: 1, borderColor: "white"}}
                onMouseDown={() => this.handleCommand('bck')}
                onMouseUp={() => this.handleCommand('stop')}>Backwards</Button>
            </Box>
        );
    }
}
 
export default BackButton;