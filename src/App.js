import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Topics from "./Components/Topics/Topics";
import Article from "./Components/Article/Article";

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Home</button>
          {/* turn this into an image with a link to home */}
        </Link>
        <Link to="/topics/football">
          <button>Football</button>
        </Link>
        <Link to="/topics/cooking">
          <button>Cooking</button>
        </Link>
        <Link to="/topics/coding">
          <button>Coding</button>
        </Link>
        <div>
          <form className="login-form">
            <input type="text" />
            <input type="text" />
            <button>Login</button>
          </form>
        </div>
        <Route path="/topics/:topic/" component={Topics} />
        <Route exact path="/" component={Homepage} />
        <Route path="/articles/:article_id" component={Article} />
      </div>
    );
  }
}

export default App;
