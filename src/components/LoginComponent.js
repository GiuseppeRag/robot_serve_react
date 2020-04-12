import React from 'react';
import {Paper, TextField, Box, Button, FormControl} from '@material-ui/core';
//import {Link} from 'react-router-dom'
import axios from 'axios'

class LoginComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            msg: "",
            usernameError: {
                hasError: false,
                message: ""
            },
            passwordError: {
                hasError: false,
                message: ""
            }
        }
    }

    changeUsername(event){
        let hasError
        let message
        if (event.target.value == ""){
            hasError = true
            message = "Username cannot be left blank"
        }
        this.setState({
            username: event.target.value,
            usernameError: {
                hasError: hasError,
                message: message
            }
        })
        console.log(event.target.value)
    }

    changePassword(event) {
        let hasError
        let message
        if (event.target.value == ""){
            hasError = true
            message = "Password cannot be left blank"
        }
        this.setState({
            password: event.target.value,
            passwordError: {
                hasError: hasError,
                message: message
            }
        })
        console.log(event.target.value)
    }

    onSubmit(username, password) {
        if (!this.state.usernameError.hasError && !this.state.passwordError.hasError) {
            axios.post("https://robotserve.herokuapp.com/api/login", null, {params : {username : username, password : password}})
            .then( res => {
                if (res.data.login){
                    this.props.login({username: username})
                    this.props.history.push('/home')
                } else {
                    this.setState({msg: "Invalid Username or Password"})
                    console.log('Login Failed')
                }
            })
        }
    }

    render() { 
        const { msg } = this.state;
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <Paper elevation={3} style={{width: 400}}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                    <FormControl>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <p>Login:</p>
                            <TextField
                                error={this.state.usernameError.hasError}
                                helperText={this.state.usernameError.message}
                                style={{width: 300, margin: 15}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="username" 
                                label="Username" 
                                defaultValue={this.state.username} 
                                value={this.state.username} 
                                onChange={(event) => this.changeUsername(event)} />
                            <TextField
                                error={this.state.passwordError.hasError}
                                helperText={this.state.passwordError.message}
                                style={{width: 300, margin: 15}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="password" 
                                label="Password" 
                                type="password" 
                                defaultValue={this.state.password} 
                                value={this.state.password} 
                                onChange={(event) => this.changePassword(event)} />
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Button label="Login" primary={true} style={{marginTop: 40, marginBottom: 20}} onClick={() => this.onSubmit(this.state.username, this.state.password)}>Login</Button>
                            </Box>
                        </Box>
                    </FormControl>
                    </Box>
                </Paper>
            </Box>
        );
    }
}
 
export default LoginComponent;