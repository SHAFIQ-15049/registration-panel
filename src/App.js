import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPanelComponent from './mycomponents/LoginPanelComponent';
import RegistrationPanelComponent from './mycomponents/RegistrationPanelComponent';

function App() {
  return (
    <div >
      <Router>
        <div className="container">
            <Switch>
                <Route path="/" exact component={LoginPanelComponent}></Route>
                <Route path="/login"  component={LoginPanelComponent}></Route>
                <Route path="/register"  component={RegistrationPanelComponent}></Route>
                
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
