import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Topics from "./Components/Topics/Topics";
import Article from "./Components/Article/Article";
// import { Button, Card, Row, Col } from "react-materialize";

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/topics/football/articles">
          <button>Football</button>
        </Link>
        <Link to="/topics/cooking/articles">
          <button>Cooking</button>
        </Link>
        <Link to="/topics/coding/articles">
          <button>Coding</button>
        </Link>
        {/* <div>
          <form className="login-form">
            <input type="text" />
            <input type="text" />
            <button>Login</button>
          </form>
        </div> */}
        <Route exact path="/" component={Homepage} />
        <Route path="/topics/:topic/articles" component={Topics} />
        <Route path="/articles/:article_id" component={Article} />
      </div>
    );
  }
}

export default App;
