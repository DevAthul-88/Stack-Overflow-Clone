import React from "react";
import Navbar from "../../Components/Nav/NavbarAuth";
import { Switch, Route, Router } from "wouter";
import NestedRoutes from "../../Components/NestedRoutes";
import Tags from "../../Pages/Tags";
import Questions from "../../Pages/Questions";
import Profile from "../../Pages/Profile";

function Home() {
  return (
    <div className="columns ">
      <div className="column">
        <Navbar />
      </div>

      <div className="wrapper  section container  column is-11 mt-6">
        <Switch>
          <Route path="/" component={Questions} />
          <Route path="/tags" component={Tags} />

          <NestedRoutes base="/me">
            <Route path="/profile" component={Profile} />
          </NestedRoutes>
        </Switch>
      </div>
    </div>
  );
}

export default Home;
