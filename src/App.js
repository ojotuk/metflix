import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Home2 from './components/Home2'
import MyList from './components/MyList'
export default function App() {
  return (
    <Switch>
      <Route path="/"  exact component={Home}></Route>
      <Route path="/home"  exact component={Home2}></Route>
      <Route path="/myList"  exact component={MyList}></Route>
    </Switch>
  )
}
