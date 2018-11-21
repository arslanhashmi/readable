import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';

function SortMenu (props) {
    const { sortOrder, handleSortClick } = props;
    return (
      <Grid.Column>
        <Menu pointing secondary>
          <Menu.Item
            name="latest"
            active={sortOrder === 'latest'}
            onClick={handleSortClick}
          >
            Latest
          </Menu.Item>
          <Menu.Item
            name="popular"
            active={sortOrder === 'popular'}
            onClick={handleSortClick}
          >
            Popular
          </Menu.Item>
        </Menu>
      </Grid.Column>
    );
}

export default SortMenu;
