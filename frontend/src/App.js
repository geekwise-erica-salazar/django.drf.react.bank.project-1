import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Branch from "./components/Branch";
import Header from "./components/Layout/header";
import Login from "./components/accounts/login";
import Register from "./components/accounts/register";


class App extends Component {
  componentDidMount() {

  };

  render(){
    return(
      <Router>
        <Header/>
        <Route exact path="/" component={Branch}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>

    </Router> 
    );
  }
}

export default App;
