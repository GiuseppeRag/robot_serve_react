import React from 'react';
import {Box, Button, Table} from '@material-ui/core'
import {Link} from 'react-router-dom'
import TableView from './TableView'
import axios from 'axios'


class LogsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerArray: ['Id', 'Source', 'Username', 'Data', "Created At", "Updated At", "_v"],
            contentArray: [
                {_id: 1, source: 'iOS', username: 'Ben', data: 'foward', timestamp: Date.now()},
                {_id: 2, source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 1000},
                {_id: 3, source: 'iOS', username: 'Ben', data: 'turn left', timestamp: Date.now() + 2000},
                {_id: 4, source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 3000},
                {_id: 5, source: 'iOS', username: 'Ben', data: 'foward', timestamp: Date.now() + 4000},
                {_id: 6, source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 5000},
                {_id: 7, source: 'iOS', username: 'Ben', data: 'turn left', timestamp: Date.now() + 6000},
                {_id: 8, source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 7000},
                {_id: 9, source: 'iOS', username: 'Ben', data: 'backwards', timestamp: Date.now() + 8000},
                {_id: 10, source: 'iOS', username: 'Ben', data: 'stop', timestamp: Date.now() + 9000}
            ],
            //*/
            ignore: {
                header: "Id",
                item: "_id",
                header: "_v",
                item: "__v"
            },
            isLoading : true
        }

    }

    componentDidMount(){
        axios({
            method : "get",
            url :'https://robotserve.herokuapp.com/api/logs',
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

    render() {
        const {isLoading, contentArray} = this.state;
        console.log("log list",this.state.contentArray);

        if (isLoading){
            return(<p>Loading...</p>)
        } else{
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
}
 
export default LogsComponent;
