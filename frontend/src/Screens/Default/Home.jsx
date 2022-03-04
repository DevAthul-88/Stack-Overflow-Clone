import React from "react";
import Navbar from "../../Components/Nav/Navbar";
import { Switch, Route } from "wouter";
import Tags from "../../Pages/Tags";
import Users from '../../Pages/Users'
import Questions from "../../Pages/Questions";
import Modal from "../../Components/Modal/Main";
import SingleUser from '../../Pages/SingleUser';
import SingleQues from "../../Pages/SingleQues";
import TagsQues from '../../Pages/TagsQues'
import notfound from "../../Pages/notfound";

function Home() {
  return (
    <div className="columns is-desktop">
      <div className="column is-0">
        <Navbar />
      </div>

      <div className="wrapper  section container    mt-6">
        <Modal />
        <Switch>
          <Route path="/" component={Questions} />
          <Route path="/tags" component={Tags} />
          <Route path="/users" component={Users} />
          <Route path='/tags/:id'>
               {(params) => <TagsQues id={params.id}/>}
          </Route>
          <Route path="/users/:id"> 
          {(params) => <SingleUser id={params.id}/>}
          </Route>
          <Route path="/question/:id"> 
          {(params) => <SingleQues id={params.id}/>}
          </Route>
          <Route path="/:rest*" component={notfound}/>
        </Switch>
      </div>
    </div>
  );
}

export default Home;
