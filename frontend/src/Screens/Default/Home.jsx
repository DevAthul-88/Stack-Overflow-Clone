import React from "react";
import Navbar from '../../Components/Initial/Navbar'
import { Switch, Route } from "wouter";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import Tags from '../../Pages/Tags'
import Questions from "../../Pages/Questions";

function Home() {
  return (
    <div className="columns">
      <div className="column">
        <Navbar />
      </div>
      <Switch>
        <div className="wrapper container section is-medium column is-10">
          <Route  path="/" component={Questions} />
          <Route path="/tags" component={Tags} />
        </div>
      </Switch>
    </div>
  );
}

export default Home;
