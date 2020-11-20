import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'


import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Intro from './components/Intro'
import InstIntro from './components/unused/InstIntro'
import Dashboard from './components/Dashboard'
import InstDashboard from './components/unused/InstDashboard'
import ManagePunchcards from './components/ManagePunchcards'
import ManageClasses from './components/ManageClasses'
import EditClass from './components/EditClass'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
        <Header />
        <Route exact path='/' component={Home} />
        {/* <Route path='/signup' component={Signup form} /> */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/intro' component={Intro} />        
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/manage-classes' component={ManageClasses}/>
          <PrivateRoute path='/edit-class/:id' component={EditClass}/>
          <PrivateRoute path='/manage-punchcards' component={ManagePunchcards} />
        </Switch>


    </Router>
  );
}

export default App;
