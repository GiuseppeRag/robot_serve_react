import React from 'react';
import {Box, Button, Table} from '@material-ui/core'
import {Link} from 'react-router-dom'
import TableView from './TableView'

class LogsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerArray: ['Source', 'Username', 'Data', "Timestamp"],
            contentArray: [
                {source: 'iOS', username: 'Ben', data: 'foward', timestamp: Date.now()},
                {source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 1000},
                {source: 'iOS', username: 'Ben', data: 'turn left', timestamp: Date.now() + 2000},
                {source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 3000},
                {source: 'iOS', username: 'Ben', data: 'foward', timestamp: Date.now() + 4000},
                {source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 5000},
                {source: 'iOS', username: 'Ben', data: 'turn left', timestamp: Date.now() + 6000},
                {source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 7000},
                {source: 'iOS', username: 'Ben', data: 'backwards', timestamp: Date.now() + 8000},
                {source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 9000}
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
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Button variant="contained" style={{width: 620, height: 50}} disabled>Logs</Button>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{width: 620, height: 50}}>Users</Button>
                    </Link>
                </Box>
                <TableView headerArray={this.state.headerArray} contentArray={this.state.contentArray} allowEdit={false}/>
            </Box>
        );
    }
}
 
export default LogsComponent;