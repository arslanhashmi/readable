import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost, votePost } from '../actions';
import { Grid, Header } from 'semantic-ui-react';
import PostListItem from './PostListItem';
import NotFound from './NotFound';
import CommentList from './CommentList';

class PostDetail extends Component {

  handleVote = (post, vote) => this.props.votePost(post, vote);

  componentDidMount = () => {
    this.props.getPost(this.props.match.params.post_id)
  };

  render() {
    const { post } = this.props;

    return (
      post ?
      <Grid.Column width={11}>
        <PostListItem
          key={post.id}
          post={post}
          summaryOnly={false}
          handleVote={this.handleVote}
        />
        <Header>Comments</Header>
        <CommentList postID={post.id} />
      </Grid.Column>
      :
      <NotFound title='Post Not Found.'/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.filter(post =>
    post.id === ownProps.match.params.post_id
  )[0]
  return {
    post
  };
};

export default connect(mapStateToProps, { getPost, votePost })(PostDetail);
