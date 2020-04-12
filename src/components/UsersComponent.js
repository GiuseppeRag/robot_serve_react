import React from 'react';
import {Box, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import TableView from './TableView'
import axios from "axios";

class UsersComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerArray: ['Id', 'Username', 'First Name', 'Last Name', 'Password', '_v', ''],
            contentArray: [
                {_id: 1, username: 'JohnDoe82', firstname: 'John', lastname: 'Doe', password: 'pass1'},
                {_id: 2, username: 'Gragusa69', firstname: 'Giuseppe', lastname: 'Ragusa', password: 'pass2'},
                {_id: 3, username: 'ABCobb', firstname: 'Andrew', lastname: 'Cobb', password: 'pass3'},
                {_id: 4, username: '4rsalan', firstname: 'Arsalan', lastname: 'Farooqui', password: 'pass4'},
            ],
            ignore: {
                header: ['Password', 'Id', "_v"],
                item: ['password', "_id", "__v"]

            },
            isLoading: true
        }
    }

    componentDidMount(){
        if (this.props.authenticated != true) {
            this.props.history.push('/')
        }
        else {
            axios({
                method : "get",
                url :'https://robotserve.herokuapp.com/api/users',
                crossDomain:true
            }).then( res => {
                const logs = res.data;
                this.setState({
                    contentArray: logs,
                    isLoading: false
                });
            }).catch( err => {
                console.log(err)
            });
        }
    }

    render() {
        const {isLoading, contentArray} = this.state;
        console.log("log list",this.state.contentArray);

        if (isLoading){
            return(<p>Loading...</p>)
        } else {
            return (
                <Box display="flex" flexDirection="column">
                    <Box display="flex" flexDirection="row-reverse">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" style={{marginBottom: 20}}>Logout {this.props.user.username}</Button>
                        </Link>
                        <Link to="/adduser" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" style={{marginBottom: 20, marginRight: 10}}>Add User</Button>
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" style={{width: 410, height: 50}}>Home</Button>
                        </Link>
                        <Link to="/logs" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" style={{width: 410, height: 50}}>Logs</Button>
                        </Link>
                        <Button variant="contained" style={{width: 410, height: 50}} disabled>Users</Button>
                    </Box>
                    <TableView headerArray={this.state.headerArray} contentArray={this.state.contentArray} allowEdit={true} ignoreObject={this.state.ignore}/>
                </Box>
            );
        }
    }
}
 
export default UsersComponent;
