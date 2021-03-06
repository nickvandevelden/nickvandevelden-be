import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .container {
    width: 100%;
    overflow: hidden;
  }
`;

export const Layout = (props) => {
  return (
    <Styles>
      <div className='container'>{props.children}</div>
    </Styles>
  );
};
