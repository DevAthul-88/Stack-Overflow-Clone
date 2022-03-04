import React from "react";
import Navbar from "../../Components/Nav/NavbarAuth";
import { Switch, Route, Router } from "wouter";
import Tags from "../../Pages/Tags";
import Questions from "../../Pages/Questions";
import Profile from "../../Pages/Profile";
import MeAnswers from "../../Pages/You.Answers";
import YouQuestions from "../../Pages/You.Questions";
import Settings from "../../Pages/Settings";
import Users from "../../Pages/Users";
import SingleUser from "../../Pages/SingleUser";
import AskQuestion from "../../Pages/AskQuestion";
import SingleQues from "../../Pages/SingleQues";
import EditQues from "../../Pages/EditQues";
import TagsQues from "../../Pages/TagsQues";
import notfound from "../../Pages/notfound";

function Home() {
  return (
    <div className="columns main">
      <div className="column is-0">
        <Navbar />
      </div>

      <div className="wrapper  section container  column  mt-6 ">
        <Switch>
          <Route path="/" component={Questions} />

          <Route path="/edit/q/:id">
            {(params) => <EditQues id={params.id} />}
          </Route>
          <Route path="/question/:id">
            {(params) => <SingleQues id={params.id} />}
          </Route>
          <Route path="/ask" component={AskQuestion} />

          <Route path="/tags" component={Tags} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={Users} />
          <Route path="/users/:id">
            {(params) => <SingleUser id={params.id} />}
          </Route>

          <Route path="/tags/:id">
            {(params) => <TagsQues id={params.id} />}
          </Route>
          <Route path="/questions" component={YouQuestions} />
          <Route path="/answers" component={MeAnswers} />

          <Route path="/settings" component={Settings} />
          <Route path="/:rest*" component={notfound} />
        </Switch>
      </div>
    </div>
  );
}

export default Home;
