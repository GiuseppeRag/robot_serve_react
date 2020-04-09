import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Container} from '@material-ui/core';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Title from './components/Title';
import HomeComponent from './components/HomeComponent'
import LoginComponent from './components/LoginComponent'
import LogsComponent from './components/LogsComponent';
import UsersComponent from './components/UsersComponent';
import EditUserComponent from './components/EditUserComponent';
import AddUserComponent from './components/AddUserComponent'

ReactDOM.render(
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
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
