import React, { createContext, useReducer }from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './utility/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map';
import Home from './components/Home';
import Login from './components/Login';
import Signin from './components/Signin'
import Logout from './components/Logout';
import { initialState, reducer} from "../src/reducer/useReducer"

export const UserContext = createContext();

const Routing = () => {

  return (
    <Switch>
    <Route exact path="/" component={ Home }/>
    <Route exact path="/Login" component={ Login }/>
    <Route exact path="/Signin" component={ Signin }/>
    <Route exact path="/Logout" component={ Logout }/>
    <Redirect to="/" />
    </Switch>
  )
}

const BookApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
      <NavBar />
        <Routing />
      </UserContext.Provider>
    </>
  )
}

export default BookApp;
