import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from '@material-ui/core';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Title from './components/Title';
import HomeComponent from './components/HomeComponent'
import LoginComponent from './components/LoginComponent'
import LogsComponent from './components/LogsComponent';
import UsersComponent from './components/UsersComponent';
import EditUserComponent from './components/EditUserComponent';
import AddUserComponent from './components/AddUserComponent'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      user: {}
    }
  }

  login(user){
    if (this.state.authenticated == false){
      this.setState({
        authenticated: true,
        user: user
      })
    }
  }

  logout(){
    this.setState({
      authenticated: false,
      user: {}
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Title />
          <BrowserRouter>
            <Route path="/" render={(props) => <LoginComponent {...props} login={(user) => this.login(user)}/>} exact></Route>
            <Route path="/home" render={(props) => <HomeComponent {...props} logout={() => this.logout()} user={this.state.user} authenticated={this.state.authenticated}/>} exact></Route>
            <Route path="/logs" render={(props) => <LogsComponent {...props} logout={() => this.logout()} user={this.state.user} authenticated={this.state.authenticated}/>} exact></Route>
            <Route path="/users" render={(props) => <UsersComponent {...props} logout={() => this.logout()} user={this.state.user} authenticated={this.state.authenticated}/>} exact></Route>
            <Route path="/edituser/:id" render={(props) => <EditUserComponent {...props} authenticated={this.state.authenticated}/>} exact></Route>
            <Route path="/adduser" render={(props) => <AddUserComponent {...props} authenticated={this.state.authenticated} />} exact></Route>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}

export default App;
