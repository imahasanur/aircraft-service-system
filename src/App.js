import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/UserComponent/Booking/Booking';
import UserAction from './components/UserComponent/UserAction/UserAction';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser]  = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser] }>
      <Router>
        <Switch>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/booking/:bookingId">
            <UserAction></UserAction>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>    
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      
      
    </UserContext.Provider>
  );
}

export default App;
