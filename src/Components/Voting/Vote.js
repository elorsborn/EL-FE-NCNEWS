import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-materialize";
import "./Vote.css";

class Vote extends Component {
  render() {
    return (
      <div className="buttons">
        <Button
          className="vote-up"
          value={"up"}
          onClick={e => this.handleVoteClick(e)}
        >
          +
        </Button>
        <p className="button-space" />
        <Button
          className="vote-down"
          value={"down"}
          onClick={e => this.handleVoteClick(e)}
        >
          -
        </Button>
      </div>
    );
  }

  handleVoteClick = async event => {
    let path = "https://elliot-ncnews.herokuapp.com/api/";
    const vote = event.target.value;
    const collection = this.props.article_id ? "articles" : "comments";
    const id = this.props.article_id
      ? this.props.article_id
      : this.props.comment_id;
    path += `${collection}/${id}?vote=${vote}`;

    const { data } = await axios.put(path);
    this.props.updateVote(vote === "up" ? 1 : vote === "down" ? -1 : 0, id);
    return data;
  };
}

export default Vote;
