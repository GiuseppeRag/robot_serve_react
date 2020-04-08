import React from 'react';
import {Box} from '@material-ui/core'

class Title extends React.Component {
    render() { 
        return (
            <Box>
                <h1 style={{textAlign:"center", fontSize: 48}}>My Pet Robot</h1>
            </Box>
        );
    }
}
 
export default Title