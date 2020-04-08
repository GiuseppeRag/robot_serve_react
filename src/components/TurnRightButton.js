import React from 'react';
import {Button} from '@material-ui/core';

class TurnRightButton extends React.Component {
    render() { 
        return (
            <Button style={{width: 100, height: 100, backgroundColor: 'yellow'}}>Turn Right</Button>
        );
    }
}
 
export default TurnRightButton;