import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px 0px 0px;
  gap: 20px;
`;  

// eslint-disable-next-line react/prop-types
const ButtonBar = ({children}) => {
  return(
    <Container>
      {children}
    </Container>
  );
};

export default ButtonBar;