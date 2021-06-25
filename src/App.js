import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser]  = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser] }>
      <Home></Home>
      
    </UserContext.Provider>
  );
}

export default App;
