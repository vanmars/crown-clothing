import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import  { Route, Switch } from 'react-router-dom';

const HatsPage = () => {
  return ( 
    <h1>Hats Page</h1>
   );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
