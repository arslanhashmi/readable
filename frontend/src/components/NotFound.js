import React from 'react';
import { Grid, Item } from 'semantic-ui-react';

function NotFound (props) {
  const { title } = props
  return (
    <Grid.Column width={10}>
      <Item>
        <Item.Content>
          <Item.Header>
          {title}
          </Item.Header>
        </Item.Content>
      </Item>
    </Grid.Column>
  );
}

export default NotFound;
