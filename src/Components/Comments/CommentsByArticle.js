import React, { Component } from "react";
import axios from "axios";
import Vote from "../Voting/Vote";
import "./CommentsByArticle.css";
import { Button, Input } from "react-materialize";
import moment from "moment";

class CommentsByArticle extends Component {
  state = {
    commentInput: "",
    comments: []
  };

  fetchCommentsByArticle = async () => {
    const { data } = await axios.get(
      `https://elliot-ncnews.herokuapp.com/api/articles/${
        this.props.match.params.article_id
      }/comments/`
    );
    return data;
  };

  componentDidMount = async () => {
    const data = await this.fetchCommentsByArticle();
    this.setState({ comments: data.comments });
  };

  componentDidUpdate = async prevProps => {
    if (
      prevProps.match.params.article_id !== this.props.match.params.article_id
    ) {
      const { data } = await this.fetchCommentsByArticle();
      this.setState({ comments: data.comments });
    }
  };

  render() {
    const sortedComments = [...this.state.comments].sort((a, b) => {
      return b.created_at - a.created_at;
    });

    return (
      <section className="comments-section">
        <form className="form-container">
          <Input
            success="Comment posted"
            className="submit-container"
            placeholder="Please enter your comment..."
            onChange={this.handleInput}
            value={this.state.commentInput}
          />
          <Button
            className="submit-button"
            type="Submit"
            onClick={this.postComment}
          >
            Submit
          </Button>
        </form>
        {sortedComments.map(comment => {
          return (
            <div className="comments-main" key={comment._id}>
              <div className="comment-body">{comment.body}</div>
              <div className="comment-votes">{comment.votes} likes</div>
              <div className="comment-username">
                Submitted by {comment.created_by.username}{" "}
                {moment(comment.created_at)
                  .startOf("hour")
                  .fromNow()}
              </div>
              {comment.created_by.username === "tickle122" && (
                <Button
                  className="delete-button"
                  onClick={this.handleDeleteClick.bind(null, comment._id)}
                >
                  Delete
                </Button>
              )}
              <Vote comment_id={comment._id} updateVote={this.updateVote} />
            </div>
          );
        })}
      </section>
    );
  }

  updateVote = (direction, id) => {
    const { comments } = this.state;
    const newComments = [...comments];
    const index = newComments.findIndex(({ _id }) => _id === id);
    newComments[index].votes += direction;
    this.setState({ comments: newComments });
  };

  postComment = e => {
    const { comments } = this.state;
    e.preventDefault();
    axios
      .post(
        `https://elliot-ncnews.herokuapp.com/api/articles/${
          this.props.match.params.article_id
        }/comments/`,
        { body: this.state.commentInput }
      )
      .then(res => {
        this.setState({
          comments: [...comments, res.data],
          commentInput: ""
        });
      });
  };

  handleInput = e => {
    e.preventDefault();
    const commentInput = e.target.value;
    this.setState({
      commentInput
    });
  };

  handleDeleteClick = async comment_id => {
    await axios.delete(
      `http://elliot-ncnews.herokuapp.com/api/comments/${comment_id}`
    );
    const newComments = this.state.comments.filter(
      comment => comment._id !== comment_id
    );
    this.setState({ comments: newComments });
  };
}

export default CommentsByArticle;
