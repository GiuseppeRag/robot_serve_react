import React from 'react';
import {Box, Button} from '@material-ui/core';
import ButtonHolder from './ButtonHolder'
import Video from './Video'
import {Link} from 'react-router-dom'
import LoginComponent from './LoginComponent'
import socketIOClient  from 'socket.io-client';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {socket : socketIOClient('https://robotserve.herokuapp.com/')};
        this.handleCommand=this.handleCommand.bind(this);
      }
  
    componentDidMount(){
        if (this.props.authenticated != true) {
            this.props.history.push('/')
        }
    }

    handleCommand(drive){
        console.log ("command : ", drive)
        let socket = this.state.socket;
        let source = "React App"
        socket.emit("cmd", {drive : drive, source : source, username : this.props.user.username})
    }
    
    render() { 
        return (     
            <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="row-reverse">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{marginBottom: 20}} onClick={() => this.props.logout()}>Logout {this.props.user.username}</Button>
                    </Link>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Button variant="contained" style={{width: 410, height: 50}} disabled>Home</Button>
                    <Link to="/logs" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{width: 410, height: 50}}>Logs</Button>
                    </Link>
                    <Link to="/users" style={{textDecoration: 'none' }}>
                        <Button variant="contained" style={{width: 410, height: 50}}>Users</Button>
                    </Link>
                </Box>
                <Box display="flex" style={{width: 640, height: 480}} marginTop={4}>
                    <ButtonHolder handleCommand={this.handleCommand} />
                    <Video />
                </Box>
            </Box>//*/
        );
    }
}
 
export default HomeComponent;