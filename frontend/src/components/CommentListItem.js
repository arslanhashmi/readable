import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comment, Button } from 'semantic-ui-react';
import moment from 'moment';
import { getPost, deleteComment } from '../actions';
import Vote from './Vote';
import CommentModalForm from './CommentModalForm';
import ConfirmModal from './ConfirmModal';

class CommentListItem extends Component {

  state = {
    modalOpen: false
  }

  handleCommentDeletion = () => {
    const { postID, comment } = this.props;
    this.props.deleteComment(comment);
    this.setState({ modalOpen: false });
    // To retrieve post's latest comments count
    this.props.getPost(postID)
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalCancel = () => {
    this.setState({ modalOpen: false });
  };

  render () {
    const { comment, handleVote } = this.props;
    const { modalOpen } = this.state;

    return (
      <Comment>
        <Comment.Content>
          <Comment.Author>{comment.author}</Comment.Author>
          <Comment.Metadata>
            {moment(comment.timestamp).fromNow()}
          </Comment.Metadata>
          <Comment.Text>{comment.body}</Comment.Text>
          <Vote item={comment} useThumbs={true} handleVote={handleVote} />
          <Button.Group size="mini" floated="right">
            <CommentModalForm comment={comment} />
            <ConfirmModal
              modalOpen={modalOpen}
              modalTitle={'Delete Comment'}
              modalDescription={'Are you sure you want to delete the comment?'}
              handleModalOpen={this.handleModalOpen}
              handleDeletion={this.handleCommentDeletion}
              handleModalCancel={this.handleModalCancel}
            />
          </Button.Group>
        </Comment.Content>
      </Comment>
    );
  }
}

export default connect(null, { getPost, deleteComment })(CommentListItem);
