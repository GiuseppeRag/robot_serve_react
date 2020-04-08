import React from 'react';
import {Button} from '@material-ui/core';

class BackButton extends React.Component {
    render() { 
        return (
            <Button style={{width: 100, height: 100, backgroundColor: 'green'}}>Backwards</Button>
        );
    }
}
 
export default BackButton;