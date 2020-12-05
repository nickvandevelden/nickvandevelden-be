import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .site-description {
    display: none;
  }
`;

export const Description = (props) => {
  return (
    <Styles>
      <div className='site-description'>
        Senior IT Consultant based in Mechelen, Belgium. Nick has extensive knowledge in manual and
        agile testing, test automation, quality coaching, web development and digital product
        management. He is passionate with everything that has to do with software development.
      </div>
    </Styles>
  );
};
