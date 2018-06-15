import React, { Component } from "react";
import axios from "axios";
import Vote from "../Voting/Vote";

class CommentsByArticle extends Component {
  state = {
    commentInput: "",
    comments: []
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
      return b.votes - a.votes;
    });

    if (!sortedComments.length) return <div>Loading...</div>;

    return (
      <section>
        <form>
          <input onChange={this.handleInput} value={this.state.commentInput} />
          <button className="button" type="Submit" onClick={this.postComment}>
            Submit your comment
          </button>
        </form>
        {sortedComments.map((comment, i) => {
          return (
            <div key={i}>
              <div>Votes: {comment.votes}</div>
              <Vote comment_id={comment._id} updateVote={this.updateVote} />
              <div>{comment.body}</div>
              <div>Submitted by {comment.created_by.username}</div>
              {comment.created_by.username === "tickle122" && (
                <button
                  onClick={this.handleDeleteClick.bind(null, comment._id)}
                >
                  Delete
                </button>
              )}
            </div>
          );
        })}
      </section>
    );
  }

  fetchCommentsByArticle = async () => {
    const { data } = await axios.get(
      `https://elliot-ncnews.herokuapp.com/api/articles/${
        this.props.match.params.article_id
      }/comments/`
    );
    return data;
  };

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
          comments: [...comments, res.data]
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
