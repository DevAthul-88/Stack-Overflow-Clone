import React from "react";
import Navbar from "../../Components/Nav/Navbar";
import { Switch, Route } from "wouter";
import Tags from "../../Pages/Tags";
import Users from '../../Pages/Users'
import Questions from "../../Pages/Questions";
import Modal from "../../Components/Modal/Main";
import SingleUser from '../../Pages/SingleUser'

function Home() {
  return (
    <div className="columns is-multiline">
      <div className="column">
        <Navbar />
      </div>

      <div className="wrapper  section container  column mt-6">
        <Modal />
        <Switch>
          <Route path="/" component={Questions} />
          <Route path="/tags" component={Tags} />
          <Route path="/users" component={Users} />
          <Route path="/users/:id"> 
          {(params) => <SingleUser id={params.id}/>}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Home;
