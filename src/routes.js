import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import WizardOne from './components/WizardOne';
import WizardTwo from './components/WizardTwo';
import WizardThree from './components/WizardThree';


export default (
  <Switch>
    <Route component={ Home } exact path="/" />
    <Route component={ Dashboard } path="/dashboard" />
    <Route component={ WizardOne } path="/wizard/1"/>
    <Route component={ WizardTwo } path="/wizard/2"/>
    <Route component={ WizardThree } path="/wizard/3"/>
    {/* <Route component={ WizardFour } path="/wizard/4" />
    <Route component={ WizardFive } path="/wizard/5" />  */}
  </Switch>
)