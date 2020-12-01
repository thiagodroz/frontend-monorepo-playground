import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DesignSystemProps {}

const StyledDesignSystem = styled.div`
  color: pink;
`;

export function DesignSystem(props: DesignSystemProps) {
  return (
    <StyledDesignSystem>
      <h1>Welcome to design-system!</h1>
    </StyledDesignSystem>
  );
}

export default DesignSystem;
