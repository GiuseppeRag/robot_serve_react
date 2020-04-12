import React from 'react';
import {Box, Button} from '@material-ui/core'
import {Link, useParams} from 'react-router-dom'
import UserInfoForm from './UserInfoForm'
import  axios from 'axios'


class EditUserComponent extends React.Component {
    constructor(props) {
        super(props)
        console.log("user props", props.location.user)
        this.state = {
            id : props.location.user._id,
            username: props.location.user.username,
            firstname: props.location.user.fname,
            lastname: props.location.user.lname,
            password: props.location.user.password,
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

    onSave() {
        if (!this.state.usernameError.hasError && !this.state.firstNameError.hasError && !this.state.lastNameError.hasError && !this.state.passwordError.hasError) {
            const user = {
                id : this.state.id,
                username : this.state.username,
                fname : this.state.firstname,
                lname : this.state.lastname,
                password : this.state.password
            }
            console.log("saving user : ", user)
            axios.post("https://robotserve.herokuapp.com/api/updateuser", null, {params : user})
                .then( res => {
                        console.log(res)
                        this.props.history.push('/users')
                })
        }
    }

    onDelete() {
        const user = {
            id : this.state.id,
            username : this.state.username,
            fname : this.state.firstname,
            lname : this.state.lastname,
            password : this.state.password
        }
        if (user.username !== "root"){
        axios.post("https://robotserve.herokuapp.com/api/deluser", null, {params : user})
            .then( res => {
                    console.log(res)
                    this.props.history.push('/users')
            })
        }
    }

    render() { 
        return (
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <UserInfoForm 
                    title="Edit User" 
                    changeUsername={(newValue) => this.changeUsername(newValue)} username={this.state.username} usernameError={this.state.usernameError}
                    changeFirstName={(newValue) => this.changeFirstName(newValue)} firstname={this.state.firstname} firstNameError={this.state.firstNameError}
                    changeLastName={(newValue) => this.changeLastName(newValue)} lastname={this.state.lastname} lastNameError={this.state.lastNameError}
                    changePassword={(newValue) => this.changePassword(newValue)} password={this.state.password} passwordError={this.state.passwordError}/>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{margin: 40, marginBottom: 0}}>Cancel</Button>
                    </Link>
                    <Button variant="contained" style={{margin: 40, marginBottom: 0}} onClick={() => this.onSave()}>Save</Button>
                    <Button variant="contained" style={{margin: 40, marginBottom: 0}} onClick={() => this.onDelete()}>Delete</Button>
                </Box>
            </Box>
        );
    }
}
 
export default EditUserComponent;
