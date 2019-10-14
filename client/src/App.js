import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import Reset from './component/Reset/Reset';
import ManageAccount from './component/Home/Manage/ManageAccount';
import ManegeApp from './component/Home/Manage/ManageApp';
import ManageDev from './component/Home/Manage/ManageDev';
import Member from './component/Home/Manage/Member';
import Forget from './component/Forget/Forget';
import DemoGame from './component/Home/DemoGame/DemoGame';
import NotMatch from './component/Errors/404';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forget" component={Forget} />
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/ManageAccount" component={ManageAccount} />
        <Route exact path="/ManegeApp" component={ManegeApp} />
        <Route exact path="/ManageDev" component={ManageDev} />
        <Route exact path="/Member" component={Member} />
        <Route exact path="/Game/:id/Dashboard" component={DemoGame} />
        <Route component={NotMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
