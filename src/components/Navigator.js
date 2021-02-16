import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "./Home"
import First_page from "./First_page"
import How_to_use from "./How_to_use"
const Navigator = () => (
  <main>
    <Switch>
      <Route exact path='/' component={First_page}/>
      <Route path='/Home' component={Home}/>
      <Route path='/How_to_use' component={How_to_use}/>
    </Switch>
  </main>
)


export default Navigator;
