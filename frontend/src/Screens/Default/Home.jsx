import React from "react";
import Navbar from "../../Components/Nav/Navbar";
import { Switch, Route } from "wouter";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import Tags from "../../Pages/Tags";
import Questions from "../../Pages/Questions";
import Modal from "../../Components/Modal/Main";

function Home() {
  return (
    <div className="columns ">
      <div className="column">
        <Navbar />
      </div>

      <div className="wrapper  section container  column is-11 mt-6">
        <Modal />
        <Switch>
          <Route path="/" component={Questions} />
          <Route path="/tags" component={Tags} />
        </Switch>
      </div>
    </div>
  );
}

export default Home;
