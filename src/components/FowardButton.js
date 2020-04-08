import React from 'react';
import {Button} from '@material-ui/core';

class FowardButton extends React.Component {
    render() { 
        return (
            <Button style={{width: 100, height: 100, backgroundColor: 'red'}}>Foward</Button>
        );
    }
}
 
export default FowardButton;