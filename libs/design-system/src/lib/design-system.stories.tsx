import React from 'react';
import { DesignSystem, DesignSystemProps } from './design-system';

export default {
  component: DesignSystem,
  title: 'DesignSystem',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: DesignSystemProps = {};

  return <DesignSystem />;
};
