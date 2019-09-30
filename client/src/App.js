import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
import Register from './component/Register';
import Reset from './component/Reset';
import ManageAccount from './component/ManageAccount';
import ManegeApp from './component/ManageApp';
import ManageDev from './component/ManageDev';
import Member from './component/Member';
import Forgot from './component/Forgot';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot" component={Forgot} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/ManageAccount" component={ManageAccount} />
          <Route exact path="/ManegeApp" component={ManegeApp} />
          <Route exact path="/ManageDev" component={ManageDev} />
          <Route exact path="/Member" component={Member} />
        </Router>
    </div>
  );
}

export default App;
