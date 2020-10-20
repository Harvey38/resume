import React from 'react';

import './static/scss/app.scss';
import 'react-router-dom';
// import Contact from './components/presentation/contact';
import LandingPage from './components/presentation/landingPage';
import GettingStarted from './components/presentation/gettingstarted'
import Header from './components/presentation/header';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/presentation/contact'

function App() {
  return (

    <div>
     <Header></Header>
     <Switch>
     <Route path='/gs' component={GettingStarted}></Route>
     <Route path='/contact' component={Contact}></Route>
      <Route path='/' component={LandingPage}></Route>
      </Switch>
    </div>
   
  );
}

export default App;
