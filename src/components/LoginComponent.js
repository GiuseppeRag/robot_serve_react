import React from 'react';
import {Paper, TextField, Box, Button, FormControl} from '@material-ui/core';
import {Link} from 'react-router-dom'

class LoginComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username: "User123",
            password: "Pass123"
        }
    }

    changeUsername(event){
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
    }

    onSubmit(username, password) {
        if (username == "User123" && password == "Pass123") {
            this.props.history.push('/logs')
        }
        else {
            console.log('Login Failed')
        }
    }

    render() { 
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <Paper elevation={3} style={{width: 400, height: 300}}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                    <FormControl>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <p>Login As Admin:</p>
                            <TextField 
                                style={{width: 300, margin: 15}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="username" 
                                label="Username" 
                                defaultValue={this.state.username} 
                                value={this.state.username} 
                                onChange={(event) => this.changeUsername(event)} />
                            <TextField
                                style={{width: 300, margin: 15}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="password" 
                                label="Password" 
                                type="password" 
                                defaultValue={this.state.password} 
                                value={this.state.password} 
                                onChange={(event) => this.changePassword(event)} />
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Button label="Back" primary={true} style={{marginTop: 40, marginRight: 25}}>Back</Button>
                                </Link>
                                <Button label="Login" primary={true} style={{marginTop: 40, marginLeft: 25}} onClick={() => this.onSubmit(this.state.username, this.state.password)}>Login</Button>
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