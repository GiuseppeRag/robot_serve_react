import React from 'react';
import {Box, Button, Table} from '@material-ui/core'
import {Link} from 'react-router-dom'
import TableView from './TableView'

class LogsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerArray: ['Id', 'Source', 'Username', 'Data', "Timestamp"],
            contentArray: [
                {id: 1, source: 'iOS', username: 'Ben', data: 'foward', timestamp: Date.now()},
                {id: 2, source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 1000},
                {id: 3, source: 'iOS', username: 'Ben', data: 'turn left', timestamp: Date.now() + 2000},
                {id: 4, source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 3000},
                {id: 5, source: 'iOS', username: 'Ben', data: 'foward', timestamp: Date.now() + 4000},
                {id: 6, source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 5000},
                {id: 7, source: 'iOS', username: 'Ben', data: 'turn left', timestamp: Date.now() + 6000},
                {id: 8, source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 7000},
                {id: 9, source: 'iOS', username: 'Ben', data: 'backwards', timestamp: Date.now() + 8000},
                {id: 10, source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 9000}
            ],
            ignore: {
                header: "Id",
                item: "id"
            }
        }
    }
    render() { 
        return (
            <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="row-reverse">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{marginBottom: 20}}>Logout</Button>
                    </Link>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{width: 410, height: 50}}>Home</Button>
                    </Link>
                    <Button variant="contained" style={{width: 410, height: 50}} disabled>Logs</Button>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{width: 410, height: 50}}>Users</Button>
                    </Link>
                </Box>
                <TableView headerArray={this.state.headerArray} contentArray={this.state.contentArray} allowEdit={false} ignoreObject={this.state.ignore}/>
            </Box>
        );
    }
}
 
export default LogsComponent;