import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'


import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Intro from './components/Intro'
import InstIntro from './components/InstIntro'
import Dashboard from './components/Dashboard'
import InstDashboard from './components/InstDashboard'
import ManagePunchcards from './components/ManagePunchcards'
import ManageClasses from './components/ManageClasses'

function App() {
  return (
    <Router>
        <Header />
        <Route exact path='/' component={Home} />
        {/* <Route path='/signup' component={Signup form} /> */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Switch>
          <Route exact path='/signup/intro/3' component={Intro} />
          <Route exact path='/signup/intro/2' component={InstIntro} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/manage-classes' component={ManageClasses}/>
          {/* <Route exact path='/dashboard/instructors' component={InstDashboard} /> */}
          <Route path='/manage-punchcards' component={ManagePunchcards} />
          {/* <Route exact path='/manageclass' component={New class form} /> */}
          {/* <Route path='/manageclass:id' component={New class form} /> */}
        </Switch>


    </Router>
  );
}

export default App;
