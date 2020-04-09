import React from 'react';
import {Button, Box} from '@material-ui/core';

class TurnLeftButton extends React.Component {

    onChange(action){
        this.props.onChange(action)
    }

    render() { 
        return (
            <Box border={2} borderColor="black" borderRadius={5} display="flex" justifyContent="center" alignItems="center" bgcolor="blue">
                <Button style={{width: 100, height: 100}}
                onMouseDown={() => this.onChange('Turn Left')}
                onMouseUp={() => this.onChange('Idle')}>Turn Left</Button>
            </Box>
        );
    }
}
 
export default TurnLeftButton;