import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Grid, Menu } from 'semantic-ui-react';
import { getCategories } from '../actions';

class CategoryStack extends Component {
  componentDidMount = () => {
    this.props.getCategories();
  };

  render() {
    const { categories } = this.props;

    return (
      <Grid.Column width={4}>
        <Menu pointing vertical>
          <Menu.Item as={NavLink} exact to="/">
            All
          </Menu.Item>
          {categories && categories.map(category => (
              <Menu.Item
                key={category.path}
                as={NavLink}
                to={`/${category.path}`}
              >
                {category.name}
              </Menu.Item>
            ))}
        </Menu>
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories };
};

export default connect(mapStateToProps, { getCategories })(CategoryStack);
