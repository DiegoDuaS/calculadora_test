import React from 'react';
import ButtonPanel from '../components/buttonpanel';

export default {
  title: 'Components/ButtonPanel',
  component: ButtonPanel,
};

const Template = (args) => <ButtonPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: [
    'C', '<-', '%', '+/-',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ],
  onClick: (button) => alert(`Button clicked: ${button}`),
};