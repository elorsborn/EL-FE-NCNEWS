import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Topics from "./Components/Topics/Topics";
import Article from "./Components/Article/Article";
import Error404 from "./Components/Errors/Error404";
import Nav from "./Components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <div className="app-main">
        <Nav />
        <Switch>
          <Route path="/articles/404" component={Error404} />
          <Route path="/topics/:topic/404" component={Error404} />
          <Route exact path="/" component={Homepage} />
          <Route path="/topics/:topic/articles" component={Topics} />
          <Route path="/articles/:article_id" component={Article} />
          <Route path="/" component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
