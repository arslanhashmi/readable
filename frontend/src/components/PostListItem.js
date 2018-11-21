import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions';
import { Link, Redirect } from 'react-router-dom';
import { Item, Label, Icon, Button } from 'semantic-ui-react';
import moment from 'moment';
import Vote from './Vote';
import ConfirmModal from './ConfirmModal';

class PostListItem extends Component {

  state = { modalOpen: false, redirect: false }

  handlePostDeletion = () => {
    this.props.deletePost(this.props.post);
    this.setState({ modalOpen: false, redirect: true })
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true })
  }

  handleModalCancel = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    const { post, handleVote, summaryOnly } = this.props;
    const { redirect, modalOpen } = this.state;

    return (

      <Item.Group>
        <Item>
          <Vote item={post} useThumbs={false} handleVote={handleVote} />
          <Item.Content verticalAlign='middle' style={{padding: '1.5em'}}>
            <Item.Header as={Link} to={`/${post.category}/${post.id}`}>
              {post.title}
            </Item.Header>
            {!summaryOnly && (
              <Item.Description>
                {post.body}
              </Item.Description>
            )}
            <Item.Meta>
              {`${moment(post.timestamp).fromNow()} by ${post.author} in ${post.category}`}
            </Item.Meta>
            <Item.Extra>
              <Label>
                <Icon name="comments" /> {post.commentCount}
              </Label>
              <Button.Group size="mini" floated="right">
                <Button
                  icon="edit"
                  content="Edit"
                  as={Link}
                  to={`/${post.category}/${post.id}/edit`}
                />
                <ConfirmModal
                  modalOpen={modalOpen}
                  modalTitle={'Delete Post'}
                  modalDescription={`Are you sure you want to delete the post "${post.title}" ?`}
                  handleModalOpen={this.handleModalOpen}
                  handleDeletion={this.handlePostDeletion}
                  handleModalCancel={this.handleModalCancel}
                />
              </Button.Group>
            </Item.Extra>
          </Item.Content>
        </Item>
        {redirect && !summaryOnly && <Redirect to="/" />}
    </Item.Group>
    );
  }
}

export default connect(null, { deletePost })(PostListItem);
