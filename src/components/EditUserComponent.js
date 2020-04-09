import React from 'react';
import {Box, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import UserInfoForm from './UserInfoForm'

class EditUserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.location.user.username,
            firstname: props.location.user.firstname,
            lastname: props.location.user.lastname,
            password: props.location.user.password
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

    onSave() {
        this.props.history.push('/users')
    }

    onDelete() {
        this.props.history.push('/users')
    }

    render() { 
        return (
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <UserInfoForm 
                    title="Edit User" 
                    changeUsername={(newValue) => this.changeUsername(newValue)} username={this.state.username}
                    changeFirstName={(newValue) => this.changeFirstName(newValue)} firstname={this.state.firstname}
                    changeLastName={(newValue) => this.changeLastName(newValue)} lastname={this.state.lastname}
                    changePassword={(newValue) => this.changeLastName(newValue)} password={this.state.password}/>
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