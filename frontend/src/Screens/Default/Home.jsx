import React from "react";
import Navbar from '../../Components/Nav/Navbar'
import { Switch, Route } from "wouter";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import Tags from '../../Pages/Tags'
import Questions from "../../Pages/Questions";


function Home() {
  return (
    <div className="columns ">
      <div className="column">
        <Navbar />
      </div>
      <Switch>
        <div className="wrapper  section container  column is-11 mt-6">
          <Route  path="/" component={Questions} />
          <Route path="/tags" component={Tags} />
        </div>
      </Switch>
    </div>
  );
}

export default Home;
