import React from 'react';
import {Button, Box} from '@material-ui/core';

class FowardButton extends React.Component {

    onChange(action) {
        this.props.onChange(action)
    }

    render() { 
        return (
            <Box border={2} borderColor="black" borderRadius={5} display="flex" justifyContent="center" alignItems="center" bgcolor="red">
                <Button style={{width: 100, height: 100}} 
                onMouseDown={() => this.onChange('Foward')}
                onMouseUp={() => this.onChange('Idle')}>Foward</Button>
            </Box>
        );
    }
}
 
export default FowardButton;