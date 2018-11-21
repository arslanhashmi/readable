import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments, voteComment } from '../actions';
import { Comment, Divider } from 'semantic-ui-react';
import CommentListItem from './CommentListItem';
import CommentModalForm from './CommentModalForm';
import NotFound from './NotFound';

class CommentList extends Component {

  componentDidMount = () => {
    this.props.getComments(this.props.postID);
  };

  handleVote = (comment, vote) => (
    this.props.voteComment(comment, vote)
  );

  render() {
    const { comments, postID } = this.props;

    return (
      <Comment.Group>
        {comments &&
          comments.length > 0 &&
          comments.map(comment => (
            <CommentListItem
              key={comment.id}
              postID={postID}
              comment={comment}
              handleVote={this.handleVote}
            />
          ))}
        {(!comments || comments.length === 0) && (
          <NotFound title='There are no comments on this post. Be the first to leave one!' />
        )}
        <Divider />
        <CommentModalForm postID={postID} />
      </Comment.Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps, {
  getComments,
  voteComment
})(CommentList);
