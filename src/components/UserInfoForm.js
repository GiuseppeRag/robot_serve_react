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
                                style={{width: 350, margin: 20}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="username" 
                                label="Username" 
                                defaultValue={this.props.username} 
                                value={this.props.username}
                                onChange={(event) => this.props.changeUsername(event.target.value)}/>
                            <TextField 
                                style={{width: 350, margin: 20}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="firstname" 
                                label="First Name" 
                                defaultValue={this.props.firstname} 
                                value={this.props.firstname}
                                onChange={(event) => this.props.changeFirstName(event.target.value)}/>
                            <TextField 
                                style={{width: 350, margin: 20}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="lastname" 
                                label="Last Name" 
                                defaultValue={this.props.lastname} 
                                value={this.props.lastname}
                                onChange={(event) => this.props.changeLastName(event.target.value)}/>
                            <TextField 
                                style={{width: 350, margin: 20}}
                                inputProps={{style: {textAlign: "center"}}}
                                id="password" 
                                label="Password" 
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