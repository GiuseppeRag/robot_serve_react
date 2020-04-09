import React from 'react';
import {Box, Container} from '@material-ui/core'

class Title extends React.Component {
    render() { 
        return (
            <Box alignItems="center" 
            display="flex" 
            justifyContent="center" border={3} 
            borderColor="white"
            fontSize={48}
            fontWeight="bold"
            borderRadius={5}
            bgcolor="primary.main"
            marginBottom={5}
            marginTop={3}
            p={2}>
                My Pet Robot
            </Box>
        );
    }
}
 
export default Title