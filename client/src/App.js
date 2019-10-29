import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import Reset from './component/Reset/Reset';
import ManageAccount from './component/Home/Manage/ManageAccount';
import ManageApp from './component/Home/Manage/ManageApp';
import ManageDev from './component/Home/Manage/ManageDev';
import Member from './component/Home/Manage/Member';
import Forget from './component/Forget/Forget';
import DemoGame from './component/Home/DemoGame/DemoGame';
import NotMatch from './component/Errors/404';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forget" component={Forget} />
        <Route path="/reset" component={Reset} />
        <Route path="/ManageAccount" component={ManageAccount} />
        <Route path="/ManageApp" component={ManageApp} />
        <Route path="/ManageDev" component={ManageDev} />
        <Route path="/Member" component={Member} />
        <Route path="/game/:id/dashboard" component={DemoGame} />
        <Route component={NotMatch} />
      </Switch>
    </Router>
  );
}

export default App;
