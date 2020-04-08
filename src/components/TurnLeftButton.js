import React from 'react';
import {Button} from '@material-ui/core';

class TurnLeftButton extends React.Component {
    render() { 
        return (
            <Button style={{width: 100, height: 100, backgroundColor: 'blue'}}>Turn Left</Button>
        );
    }
}
 
export default TurnLeftButton;