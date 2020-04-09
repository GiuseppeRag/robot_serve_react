import React from 'react';
import {Button, Box} from '@material-ui/core';

class BackButton extends React.Component {

    onChange(action) {
        this.props.onChange(action)
    }

    render() { 
        return (
            <Box border={2} borderColor="black" borderRadius={5} display="flex" justifyContent="center" alignItems="center" bgcolor="green">
                <Button style={{width: 100, height: 100, border: 1, borderColor: "white"}}
                onMouseDown={() => this.onChange('Backwards')}
                onMouseUp={() => this.onChange('Idle')}>Backwards</Button>
            </Box>
        );
    }
}
 
export default BackButton;