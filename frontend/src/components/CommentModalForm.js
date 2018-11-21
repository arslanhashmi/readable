import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost, addComment, updateComment } from '../actions';
import { Modal, Form, Button } from 'semantic-ui-react';
import { v4 } from 'uuid';

class CommentModalForm extends Component {

  state = {
    author: '',
    body: '',
    modalOpen: false
  };

  componentDidMount = () => {
    this.setState(state => ({
      author: this.props.comment ? this.props.comment.author : state.author,
      body: this.props.comment ? this.props.comment.body : state.body
    }));
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true })
  };

  handleModalCancel = () => {
    this.setState({
      author: this.props.comment ? this.props.comment.author : '',
      body: this.props.comment ? this.props.comment.body : '',
      modalOpen: false
    });
  };

  handleModalSubmit = e => {
    e.preventDefault();
    const { author, body } = this.state;
    const { postID, comment } = this.props;

    // Check whether editing a comment or creating a new one
    if (comment) {
      this.props.updateComment({
        ...comment,
        timestamp: Date.now(),
        author,
        body
      });
    } else {
      this.props.addComment({
        id: v4(),
        parentId: postID,
        timestamp: Date.now(),
        body,
        author,
      });
      // To retrieve post's latest comments count
      this.props.getPost(postID)
    }

    // Reset the form state after submission
    this.setState({
      author: '',
      body: '',
      modalOpen: false
    });
  };

  handleChange = (e, v) => {
    this.setState(prevState => ({
        ...prevState,
        [v.name]: v.value
      }));
  };

  render() {
    const { author, body } = this.state
    const modalControl = this.props.comment ? {
      title: "Edit a Comment",
      iconClass: "edit",
      content: "Edit Comment"
    }: {
      title: "Add a Comment",
      iconClass: "add",
      content: "Add a Comment"
    }
    return (
      <Modal
        trigger={
          <Button
            icon={modalControl.iconClass}
            content={modalControl.content}
            onClick={this.handleModalOpen}
          />
        }
        open={this.state.modalOpen}
        onClose={this.handleModalCancel}
      >
        <Modal.Header> {modalControl.title} </Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleModalSubmit} size="mini">
            <Form.Input
              required
              name="author"
              label="Author"
              placeholder="Author"
              value={author}
              onChange={this.handleChange}
            />
            <Form.TextArea
              required
              name="body"
              label="Write your comment"
              placeholder="Write your comment"
              value={body}
              onChange={this.handleChange}
            />
            <Button type="submit">Submit</Button>
            <Button onClick={this.handleModalCancel}>Cancel</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(null, {
  getPost,
  addComment,
  updateComment
})(CommentModalForm);
