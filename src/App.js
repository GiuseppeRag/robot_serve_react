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


function App() {
  return (
    <div className="App">
      <Container>
    <Title />
    <BrowserRouter>
      <Route path="/" component={LoginComponent} exact></Route>
      <Route path="/home" component={HomeComponent} exact></Route>
      <Route path="/logs" component={LogsComponent} exact></Route>
      <Route path="/users" component={UsersComponent} exact></Route>
      <Route path="/edituser/:id" component={EditUserComponent} exact></Route>
      <Route path="/adduser" component={AddUserComponent} exact></Route>
    </BrowserRouter>
  </Container>,
    </div>
  );
}

export default App;
