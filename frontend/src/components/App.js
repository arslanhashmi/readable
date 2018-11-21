import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions';
import { withRouter, Route, Link, Switch } from 'react-router-dom';
import { Container, Header, Grid, Button } from 'semantic-ui-react';
import CategoryStack from './CategoryStack';
import PostListView from './PostListView'
import PostForm from './PostForm'
import PostDetail from './PostDetail'

class App extends Component {

  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    return (
      <Container className="App">
        <Header as="h1" color='red' block>
          <Header.Content>
            <Link to="/">Readable</Link>
          </Header.Content>
          <Button floated="right">
            <Link to="/new">Add a Post</Link>
          </Button>
        </Header>

        <Grid padded stackable>
          <Route path="/" component={CategoryStack} />
          <Switch>
            <Route exact path="/" component={PostListView} />
            <Route exact path="/new" component={PostForm} />
            <Route exact path="/:category" component={PostListView} />
            <Route exact path="/:category/:post_id/edit" component={PostForm} />
            <Route exact path="/:category/:post_id" component={PostDetail} />
          </Switch>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default withRouter(connect(mapStateToProps, { getPosts })(App));
