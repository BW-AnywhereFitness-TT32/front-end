import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'


import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Intro from './components/Intro'
import Dashboard from './components/Dashboard'
import ManagePunchcards from './components/ManagePunchcards'

function App() {
  return (
    <Router>
        <Header />
        <Route exact path='/' component={Home} />
        {/* <Route path='/signup' component={Signup form} /> */}
        <Route path='/login' component={Login} />
        <Switch>
          <Route path='/intro' component={Intro} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/punchcards' component={ManagePunchcards} />
          {/* <Route exact path='/manageclass' component={New class form} /> */}
          {/* <Route path='/manageclass:id' component={New class form} /> */}
        </Switch>


    </Router>
  );
}

export default App;
