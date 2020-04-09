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
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{marginBottom: 20}}>Logout</Button>
                    </Link>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Button variant="contained" style={{width: 410, height: 50}} disabled>Home</Button>
                    <Link to="/logs" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{width: 410, height: 50}}>Logs</Button>
                    </Link>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{width: 410, height: 50}}>Users</Button>
                    </Link>
                </Box>
                <Box display="flex" marginTop={4}>
                    <ButtonHolder />
                    <Video />
                </Box>
            </Box>
        );
    }
}
 
export default HomeComponent;