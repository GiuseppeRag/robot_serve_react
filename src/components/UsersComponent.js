import React from 'react';
import {Box, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import TableView from './TableView'

class UsersComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerArray: ['Id', 'Username', 'First Name', 'Last Name', 'Password', ''],
            contentArray: [
                {id: 1, username: 'JohnDoe82', firstname: 'John', lastname: 'Doe', password: 'pass1'},
                {id: 2, username: 'Gragusa69', firstname: 'Giuseppe', lastname: 'Ragusa', password: 'pass2'},
                {id: 3, username: 'ABC-obb', firstname: 'Andrew', lastname: 'Cobb', password: 'pass3'},
                {id: 4, username: '4rsalan', firstname: 'Arsalan', lastname: 'Farooqui', password: 'pass4'},
            ]
        }
    }

    render() { 
        return (
            <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row-reverse">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" style={{marginBottom: 20}}>Logout</Button>
                </Link>
                <Link to="/adduser" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" style={{marginBottom: 20, marginRight: 10}}>Add User</Button>
                </Link>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Link to="/logs" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" style={{width: 620, height: 50}}>Logs</Button>
                </Link>
                <Button variant="contained" style={{width: 620, height: 50}} disabled>Users</Button>
            </Box>
            <TableView headerArray={this.state.headerArray} contentArray={this.state.contentArray} allowEdit={true}/>
        </Box>
        );
    }
}
 
export default UsersComponent;