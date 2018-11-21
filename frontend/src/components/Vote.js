import React from 'react';
import { Button } from 'semantic-ui-react';

function Vote (props) {
    const { item, handleVote, useThumbs } = props;
    const controlSpecs = useThumbs ? {
      voteUpIcon: 'thumbs up',
      voteDownIcon: 'thumbs down',
      buttonGroupSize: 'tiny',
      buttonStyle: {},
      verticalGroupAlignment: false
    } : {
      voteUpIcon: 'chevron up',
      voteDownIcon: 'chevron down',
      buttonGroupSize: 'large',
      buttonStyle: {backgroundColor: '#fff'},
      verticalButtonGroupAlignment: true
    }

    return (
      <Button.Group
        size={controlSpecs.buttonGroupSize}
        vertical={controlSpecs.verticalButtonGroupAlignment}
      >
        <Button
          style={controlSpecs.buttonStyle}
          icon={controlSpecs.voteUpIcon}
          onClick={() => handleVote(item, 'upVote')}
        />
        <Button
          style={controlSpecs.buttonStyle}
          content={item.voteScore}
        />
        <Button
          style={controlSpecs.buttonStyle}
          icon={controlSpecs.voteDownIcon}
          onClick={() => handleVote(item, 'downVote')}
        />
      </Button.Group>
    );
}

export default Vote;
