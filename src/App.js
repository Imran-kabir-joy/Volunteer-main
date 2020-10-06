import React, { createContext, useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RegesteredVoluntary from "./components/RegesteredVoluntary/RegesteredVoluntary";
import Header from "./components/Header/Header";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AddEvent from "./components/AdminPanel/AddEvent";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [voluntary, setVoluntary] = useState({
    name:"",
    email:"",
    date:"",
    description:"",
    work:""
  });
  const [voluntaryActivity,setVoluntaryActivity] = useState([])

  return (
    <UserContext.Provider
      value={{
        value: [loggedInUser, setLoggedInUser],
        value2: [voluntary, setVoluntary],
        value3: [voluntaryActivity,setVoluntaryActivity]
      }}
    >
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/register/:voluntaryWork">
            <Register></Register>
          </PrivateRoute>

          <Route path="/registedVoluntary">
            <RegesteredVoluntary></RegesteredVoluntary>
          </Route>

          <Route path="/adminPanel">
            <AdminPanel></AdminPanel>
          </Route>

          <Route path="/addEvent">
            <AddEvent></AddEvent>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
