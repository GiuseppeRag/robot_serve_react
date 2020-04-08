import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Container} from '@material-ui/core';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Title from './components/Title';
import HomeComponent from './components/HomeComponent'

ReactDOM.render(
  <Container>
    <Title />
    <BrowserRouter>
      <Route path="/" component={HomeComponent}></Route>
    </BrowserRouter>
  </Container>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
