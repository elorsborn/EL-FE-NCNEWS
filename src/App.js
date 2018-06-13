import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Topics from "./Components/Topics";

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

        <h1>My piece of shit app</h1>
        <Route path="/topics" component={Topics} />
        <Route exact path="/" component={Homepage} />
      </div>
    );
  }
}

export default App;
