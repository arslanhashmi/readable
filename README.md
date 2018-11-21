# Readable

Readable is a Blog. Users are able to post content to predefined categories,
they can comment on posts, vote on posts and comments. They can also edit/delete
posts and comments.

## Getting Started

Following are the steps to test/develop Readable:

1. Fork, clone or download this repository

1. Install and start back-end server.

   1. `cd api-server`
   1. `npm install`
   1. `node server`

1. In another terminal window, do the following to start and run the
readable app.

   1. `cd frontend`
   1. `npm install`
   1. `npm start`

1. A browser window should open automatically, or you can load the app at
   http://localhost:3000

## Technical Implementation Details

The Readable user interface is built using [React](https://reactjs.org/) while
state management is handled by [Redux](https://redux.js.org/). Other
tools/frameworks/middlewares used in the project include:

* [React Router](https://reacttraining.com/react-router/) for routing
* [Semantic UI React](https://react.semantic-ui.com/introduction) for UI
  components
* [Redux Thunk](https://github.com/gaearon/redux-thunk) for asynchronous Redux
  actions
* [Moment.js](https://momentjs.com/) for formatting and displaying timestamps
* [uuid](https://github.com/kelektiv/node-uuid) for generating post and comment
  IDs

## API Server

More information on the Backend Server can be found [here](api-server/README.md).
