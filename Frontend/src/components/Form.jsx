import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px;
`;

const FormTitle = styled.h2`
  font-size: 30px;
`;

const Form = () => {
  return(
    <ContainerDiv>
      <FormTitle>Lähdetään liikkeelle perustiedoistasi.</FormTitle>
    </ContainerDiv>
  );
};

export default Form;