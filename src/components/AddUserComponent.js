import React from 'react';
import {Box, Button} from '@material-ui/core';
import {Link} from 'react-router-dom'
import UserInfoForm from './UserInfoForm';
import axios from "axios";

class AddUserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            password: "",
            usernameError: {
                hasError: false,
                message: ""
            },
            firstNameError: {
                hasError: false,
                message: ""
            },
            lastNameError: {
                hasError: false,
                message: ""
            },
            passwordError: {
                hasError: false,
                message: ""
            }
        }
    }

    componentDidMount() {
        if (this.props.authenticated != true) {
            this.props.history.push('/')
        }
    }

    changeUsername(newValue) {
        let hasError
        let message
        if (newValue == "") {
            hasError = true
            message = "Username cannot be left blank"
        }
        this.setState({
            username: newValue,
            usernameError: {
                hasError: hasError,
                message: message
            }
        })
    }

    changeFirstName(newValue) {
        let hasError
        let message
        if (newValue == "") {
            hasError = true
            message = "First Name cannot be left blank"
        }
        else if (!/^[a-zA-Z]+$/.test(newValue)) {
            hasError = true
            message = "First Name can only contain letters"
        }
        this.setState({
            firstname: newValue,
            firstNameError: {
                hasError: hasError,
                message: message
            }
        })
    }

    changeLastName(newValue) {
        let hasError
        let message
        if (newValue == "") {
            hasError = true
            message = "Last Name cannot be left blank"
        }
        else if (!/^[a-zA-Z]+$/.test(newValue)) {
            hasError = true
            message = "Last Name can only contain letters"
        }
        this.setState({
            lastname: newValue,
            lastNameError: {
                hasError: hasError,
                message: message
            }
        })
    }

    changePassword(newValue) {
        let hasError
        let message
        if (newValue == "") {
            hasError = true
            message = "Password cannot be left blank"
        }
        this.setState({
            password: newValue,
            passwordError: {
                hasError: hasError,
                message: message
            }
        })
    }

    onAdd() {
        if (!this.state.usernameError.hasError && !this.state.firstNameError.hasError && !this.state.lastNameError.hasError && !this.state.passwordError.hasError) {
            const user = {
                id : this.state.id,
                username : this.state.username,
                fname : this.state.firstname,
                lname : this.state.lastname,
                password : this.state.password
            }
            if (user.username !== "root"){
                axios.post("https://robotserve.herokuapp.com/api/adduser", null, {params : user})
                    .then( res => {
                        console.log(res);
                        this.props.history.push('/users')
                })
            }
        }
    }

    render() { 
        return (
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <UserInfoForm 
                title="Add User" 
                changeUsername={(newValue) => this.changeUsername(newValue)} usernameError={this.state.usernameError}
                changeFirstName={(newValue) => this.changeFirstName(newValue)} firstNameError={this.state.firstNameError}
                changeLastName={(newValue) => this.changeLastName(newValue)} lastNameError={this.state.lastNameError}
                changePassword={(newValue) => this.changePassword(newValue)} passwordError={this.state.passwordError}/>
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
