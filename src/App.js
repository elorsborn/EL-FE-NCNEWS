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
      <div className="Background">
        <div className="Navbar-container">
          <Link to="/">
            <div className="Navbar-home">Home</div>
          </Link>
          <div className="Navbar-items">
            <Link to="/topics/football/articles">
              <div className="Navbar-label">Football</div>
            </Link>
            <Link to="/topics/cooking/articles">
              <div className="Navbar-label">Cooking</div>
            </Link>
            <Link to="/topics/coding/articles">
              <div className="Navbar-label">Coding</div>
            </Link>
          </div>
        </div>

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
