import React from 'react';
import {Box, Button} from '@material-ui/core';
import {Link} from 'react-router-dom'
import UserInfoForm from './UserInfoForm';

class AddUserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            password: ""
        }
    }

    changeUsername(newValue) {
        this.setState({
            username: newValue
        })
    }

    changeFirstName(newValue) {
        this.setState({
            firstname: newValue
        })
    }

    changeLastName(newValue) {
        this.setState({
            lastname: newValue
        })
    }

    changePassword(newValue) {
        this.setState({
            password: newValue
        })
    }

    onAdd() {
        this.props.history.push('/users')
    }

    render() { 
        return (
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <UserInfoForm 
                title="Add User" 
                changeUsername={(newValue) => this.changeUsername(newValue)}
                changeFirstName={(newValue) => this.changeFirstName(newValue)}
                changeLastName={(newValue) => this.changeLastName(newValue)}
                changePassword={(newValue) => this.changeLastName(newValue)}/>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Link to="/users" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" style={{margin: 40, marginBottom: 0}}>Cancel</Button>
                </Link>
                <Button variant="contained" style={{margin: 40, marginBottom: 0}} onClick={() => this.onAdd()}>Add</Button>
            </Box>
        </Box>
        );
    }
}
 
export default AddUserComponent;
