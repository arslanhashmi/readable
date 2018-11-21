import React from 'react';
import { Item } from 'semantic-ui-react';
import PostListItem from './PostListItem';
import NotFound from './NotFound'

function PostList (props) {
    const { posts, handleVote } = props;

    return (
      <Item.Group relaxed>
        {posts && posts.length > 0 && posts.map(post => (
            <PostListItem
              key={post.id}
              post={post}
              summaryOnly={true}
              handleVote={handleVote}
            />
          ))}
        {(!posts || posts.length === 0) && (
           <NotFound title='No posts found.' />
        )}
      </Item.Group>
    );
}

export default PostList;
