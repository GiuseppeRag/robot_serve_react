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