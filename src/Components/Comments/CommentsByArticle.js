import React from "react";
import axios from "axios";
import Vote from "../Voting/Vote";

class CommentsByArticle extends React.Component {
  state = {
    comments: []
  };
  // componentDidMount = async () => {
  //   const data = await this.fetchCommentsByArticle();
  //   // this.setState({ comments });
  // };

  componentDidUpdate = async prevProps => {
    if (prevProps.article_id !== this.props.article_id) {
      const { comments } = await this.fetchCommentsByArticle();
      this.setState({ comments });
    }
  };

  render() {
    const sortedComments = [...this.state.comments].sort((a, b) => {
      return b.votes - a.votes;
    });
    return (
      <section>
        {sortedComments.map((comment, i) => {
          return (
            <div key={i}>
              <div>Votes: {comment.votes}</div>
              <Vote comment_id={comment._id} updateVote={this.updateVote} />
              <div>{comment.body}</div>
              <div>Submitted by {comment.created_by.username}</div>
            </div>
          );
        })}
      </section>
    );
  }

  fetchCommentsByArticle = async () => {
    const { data } = await axios.get(
      `https://elliot-ncnews.herokuapp.com/api/articles/${
        this.props.article_id
      }/comments/`
    );
    return data;
  };

  updateVote = (direction, id) => {
    const { comments } = this.state;
    const commentsCopy = [...comments];
    const index = commentsCopy.findIndex(({ _id }) => _id === id);
    commentsCopy[index].votes += direction;
    this.setState({ comments: commentsCopy });
  };
}

export default CommentsByArticle;
