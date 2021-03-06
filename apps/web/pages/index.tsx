import React from 'react';
import styled from 'styled-components';

import { ButtonStyles, ButtonTextStyles } from '@fake-dev/design-system';

const StyledPage = styled.div`
  .app {
    font-family: sans-serif;
    min-width: 300px;
    max-width: 600px;
    margin: 50px auto;
  }

  .app .gutter-left {
    margin-left: 9px;
  }

  .app .col-span-2 {
    grid-column: span 2;
  }

  .app .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app header {
    background-color: #143055;
    color: white;
    padding: 5px;
    border-radius: 3px;
  }

  .app main {
    padding: 0 36px;
  }

  .app p {
    text-align: center;
  }

  .app h1 {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
  }

  .app h2 {
    text-align: center;
    font-size: 20px;
    margin: 40px 0 10px 0;
  }
`;

const StyledButton = styled.button`
  ${ButtonStyles}
  ${ButtonTextStyles}
`;

export function Index() {
  return (
    <StyledPage>
      <h2>Resources &amp; Tools</h2>
      <p>Thank you for using and showing some ♥ for Nx.</p>
      <StyledButton>My Styled Button</StyledButton>
    </StyledPage>
  );
}

export default Index;
