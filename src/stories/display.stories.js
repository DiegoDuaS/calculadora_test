import React from 'react';
import Display from '../components/display';

export default {
  title: 'Components/Display',
  component: Display,
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '12345',
};

export const LargeNumber = Template.bind({});
LargeNumber.args = {
  value: '99999999',
};

export const ScientificNotation = Template.bind({});
ScientificNotation.args = {
  value: '1.23e+8',
};

export const Error = Template.bind({});
Error.args = {
  value: 'ERROR',
};