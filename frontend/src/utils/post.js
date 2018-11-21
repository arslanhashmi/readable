import sortBy from 'sort-by';

export const sortPosts = (posts, sortOrder) => {
  switch (sortOrder) {
    case 'latest':
      return posts.sort(sortBy('-timestamp'));
    case 'popular':
      return posts.sort(sortBy('-voteScore'));
    default:
      return posts;
    }
  };
