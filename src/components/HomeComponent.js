import React from 'react';
import {Box, Button} from '@material-ui/core';
import ButtonHolder from './ButtonHolder'
import Video from './Video'
import {Link} from 'react-router-dom'
import LoginComponent from './LoginComponent'

class HomeComponent extends React.Component {
    state = {  }
    render() { 
        return (
            <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="row-reverse">
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{marginBottom: 30}}>Login</Button>
                    </Link>
                </Box>
                <Box display="flex">
                    <ButtonHolder />
                    <Video />
                </Box>
            </Box>
        );
    }
}
 
export default HomeComponent;