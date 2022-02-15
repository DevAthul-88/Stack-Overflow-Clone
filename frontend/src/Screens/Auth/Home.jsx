import React from "react";
import Navbar from "../../Components/Nav/NavbarAuth";
import { Switch, Route, Router } from "wouter";
import NestedRoutes from "../../Components/NestedRoutes";
import Tags from "../../Pages/Tags";
import Questions from "../../Pages/Questions";
import Profile from "../../Pages/Profile";
import MeAnswers from "../../Pages/You.Answers";
import YouQuestions from "../../Pages/You.Questions";
import Settings from "../../Pages/Settings";
import Users from '../../Pages/Users';
import SingleUser from '../../Pages/SingleUser'


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
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={Users} />
          <Route path="/users/:id"> 
          {(params) => <SingleUser id={params.id}/>}
          </Route>
          <NestedRoutes base="/profile">
            <Route path="/questions" component={YouQuestions} />
            <Route path="/answers" component={MeAnswers} />
            <Route path="/settings" component={Settings} />
          </NestedRoutes>
        </Switch>
      </div>
    </div>
  );
}

export default Home;
