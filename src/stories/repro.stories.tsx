import React from 'react';
import { Meta } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'repro-test',
  decorators: [withKnobs],
} as Meta;

export const Repro = () => {
  const num = select(
    'Select a number',
    {
      ONE: 1,
      TWO: 2,
      THREE: 3,
    },
    1
  );

  switch (num) {
    case 1:
      return <div>one</div>;
    case 2:
      return <div>two</div>;
    case 3:
      return <div>three</div>;
    default:
      throw new Error();
  }
};
