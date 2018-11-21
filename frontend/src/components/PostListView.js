import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPosts } from '../utils/post';
import { setSortOrder, votePost } from '../actions';
import PostList from './PostList';
import { Grid } from 'semantic-ui-react';
import SortMenu from './SortMenu';

class PostListView extends Component {

  handleSortClick = (e, { name }) => {
    this.props.setSortOrder(name)
  };

  handleVote = (post, vote) => (
    this.props.votePost(post, vote)
  );

  render() {
    const { posts, sortOrder } = this.props;

    return (
      <Grid.Column width={10}>
        <Grid.Column >
          <SortMenu
            sortOrder={sortOrder}
            handleSortClick={this.handleSortClick}
          />
          <PostList
            posts={posts}
            handleVote={this.handleVote}
          />
        </Grid.Column>
      </Grid.Column>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const { sortOrder } = state;
  let { posts } = state;
  /*
  Check whether we need to filter the posts
  on category as well
  */
  const category = ownProps.match.params.category;
  if (category) {
    posts = posts.filter(post => (
      post.category === category
    ));
  }

  return {
    posts: sortPosts(posts, sortOrder),
    sortOrder
  };
};

export default connect(mapStateToProps, {
  votePost,
  setSortOrder
})(PostListView);
