import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Login, Register, Profile, Files } from 'components';
import 'styling/semantic.less';
import './App.css'

export default class App extends React.Component {
  render(){
    return(
      <Router>
        <Layout>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/files" component={Files} />
        </Layout>
      </Router>
    )
  }
}

