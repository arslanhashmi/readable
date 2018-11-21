// API utils
const baseUrl = "http://localhost:3001";

// Generate a unique token to send to backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// Get all the posts.
export const getPosts = () =>
  fetch(`${baseUrl}/posts`, { headers: headers }).then(response =>
    response.json()
  );

// Get all the categories
export const getCategories = () =>
  fetch(`${baseUrl}/categories`, { headers: headers }).then(response =>
    response.json()
  );

// Get all the comments given a post
export const getComments = post_id =>
  fetch(`${baseUrl}/posts/${post_id}/comments`, { headers: headers }).then(
    response => response.json()
  );

  // Get a single post
  export const getPost = post_id =>
    fetch(`${baseUrl}/posts/${post_id}`, {
      headers: headers
    }).then(response => response.json());

// Add a new post
export const addPost = post =>
  fetch(`${baseUrl}/posts`, {
    headers: { ...headers, 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(post)
  }).then(response => response.json());

// Update an existing post
export const updatePost = post =>
  fetch(`${baseUrl}/posts/${post.id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(post)
  }).then(response => response.json());

// Marks the post deleted and sets the parentDeleted flag for
// all child comments to 'true'.
export const deletePost = post =>
  fetch(`${baseUrl}/posts/${post.id}`, {
    headers: headers,
    method: 'DELETE'
  }).then(response => response.json());

// Add a comment to a post
export const addComment = comment =>
  fetch(`${baseUrl}/comments`, {
    headers: { ...headers, 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(comment)
  }).then(response => response.json());

// Edit the details of an existing comment
export const updateComment = comment =>
  fetch(`${baseUrl}/comments/${comment.id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(comment)
  }).then(response => response.json());

// Marks a comment deleted.
export const deleteComment = comment =>
  fetch(`${baseUrl}/comments/${comment.id}`, {
    headers: headers,
    method: 'DELETE'
  }).then(response => response.json());

// Vote a post
export const votePost = (post, vote) =>
  fetch(`${baseUrl}/posts/${post.id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ option: vote })
  }).then(response => response.json());

// Vote a comment
export const voteComment = (comment, vote) =>
  fetch(`${baseUrl}/comments/${comment.id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ option: vote })
  }).then(response => response.json());
