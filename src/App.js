import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import MyList from './components/MyList'
export default function App() {
  return (
    <Switch>
      <Route path="/"  exact component={Home}></Route>
      <Route path="/myList"  exact component={MyList}></Route>
    </Switch>
  )
}
