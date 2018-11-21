import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost } from '../actions';
import { Redirect } from 'react-router-dom';
import { Grid, Form, Button } from 'semantic-ui-react';
import { v4 } from 'uuid';

class PostForm extends Component {
  state = {
    post: {
      author: '',
      body: '',
      category: 'react',
      title: ''
    },
    redirect: false
  };

  componentDidMount = () => {
    this.setState(state => ({
      post: {
        author: this.props.post ? this.props.post.author : state.post.author,
        title: this.props.post ? this.props.post.title : state.post.title,
        body: this.props.post ? this.props.post.body : state.post.body,
        category: this.props.post ? this.props.post.category : state.post.category
      }
    }));
  };

  handleChange = (e, v) => {
    this.setState(prevState => ({
      post: {
        ...prevState.post,
        [v.name]: v.value
      }
    }));
  };

  onDiscard = () => {
    this.setState({ redirect: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { post } = this.state;
    /*
    Check whether editing a post or
    creating a new one
    */
    if (this.props.post) {
      this.props.updatePost({
        ...this.props.post,
        timestamp: Date.now(),
        title: post.title,
        author: post.author,
        body: post.body,
        category: post.category
      });
    } else {
      this.props.addPost({
        id: v4(),
        timestamp: Date.now(),
        title: post.title,
        body: post.body,
        author: post.author,
        category: post.category
      });
    }
    // to redirect
    this.setState({ redirect: true });
  };

  render() {
    const { categories } = this.props;
    const { post, redirect } = this.state;
    const redirectTo = this.props.post ? `/${this.props.post.category}/${this.props.post.id}`: '/'

    return (
      <Grid.Column width={10}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            required
            name="author"
            label="Author"
            placeholder="Author"
            value={post.author}
            onChange={this.handleChange}
          />
          <Form.Select
            required
            name="category"
            label="Category"
            placeholder="Select a category"
            options={categories}
            value={post.category}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            name="title"
            label="Title"
            placeholder="Title"
            value={post.title}
            onChange={this.handleChange}
          />
          <Form.TextArea
            required
            name="body"
            label="Write your post"
            placeholder="Write your post"
            value={post.body}
            onChange={this.handleChange}
          />
          <Button type="submit">Submit</Button>
          <Button onClick={this.onDiscard}>Discard</Button>
        </Form>
        {redirect && <Redirect to={redirectTo}/>}
      </Grid.Column>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories.map(category => {
      return { text: category.name, value: category.path };
    }),
    // If editing an existing post, retrieve it based on the ID in the URL
    post: state.posts.filter(
      post => post.id === ownProps.match.params.post_id
    )[0]
  };
};

export default connect(mapStateToProps, { updatePost, addPost })(PostForm);
