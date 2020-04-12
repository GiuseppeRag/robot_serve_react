import React from 'react';
import {Box, Paper, FormControl, TextField} from '@material-ui/core'

class UserInfoForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() { 
        return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Paper elevation={3} style={{width: 500}}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <FormControl>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <h4>{this.props.title}</h4>
                            <TextField
                                error={this.props.usernameError.hasError}
                                helperText={this.props.usernameError.message} 
                                style={{width: 350, margin: 20}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="username" 
                                label="Username" 
                                defaultValue={this.props.username} 
                                value={this.props.username}
                                onChange={(event) => this.props.changeUsername(event.target.value)}/>
                            <TextField
                                error={this.props.firstNameError.hasError}
                                helperText={this.props.firstNameError.message}
                                style={{width: 350, margin: 20}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="firstname" 
                                label="First Name" 
                                defaultValue={this.props.firstname} 
                                value={this.props.firstname}
                                onChange={(event) => this.props.changeFirstName(event.target.value)}/>
                            <TextField 
                                error={this.props.lastNameError.hasError}
                                helperText={this.props.lastNameError.message}
                                style={{width: 350, margin: 20}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="lastname" 
                                label="Last Name" 
                                defaultValue={this.props.lastname} 
                                value={this.props.lastname}
                                onChange={(event) => this.props.changeLastName(event.target.value)}/>
                            <TextField 
                                error={this.props.passwordError.hasError}
                                helperText={this.props.passwordError.message}
                                style={{width: 350, margin: 20}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="password" 
                                label="Password"
                                type="password"
                                defaultValue={this.props.password} 
                                value={this.props.password}
                                onChange={(event) => this.props.changePassword(event.target.value)}/>
                        </Box>
                    </FormControl>
                </Box>
            </Paper>
        </Box>
        );
    }
}
 
export default UserInfoForm;