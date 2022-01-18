import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;
  

const Text = styled.h2`
  font-size: 30px;
`;



// eslint-disable-next-line react/prop-types
const FormTitle = ({ children }) => {
  return(
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default FormTitle;