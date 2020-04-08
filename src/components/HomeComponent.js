import React from 'react';
import {Container} from '@material-ui/core';
import Title from './Title';
import ButtonHolder from './ButtonHolder'

class HomeComponent extends React.Component {
    state = {  }
    render() { 
        return (
            <Container>
                <ButtonHolder /> 
            </Container>
        );
    }
}
 
export default HomeComponent;