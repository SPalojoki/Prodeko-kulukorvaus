import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const ContainerDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: 1;
`;

const TitleContainer = styled.div`
  font-family: 'Roboto Slab', serif;
  text-align: left;
  box-sizing: border-box;
  margin: 30px;
  flex-shrink: 1;
`;

const MainTitle = styled.h1`
  font-family: 'Roboto Slab', serif;
  font-size:52px;
  margin: 0px;
`;

const SubTitle = styled.h1`
  font-family: 'Roboto Slab', serif;
  font-size:16px;
  margin: 0px;
`;

const FormcanvasDiv = styled.div`
  background-color: white;
  flex-grow: 4;
  margin: 30px;
  min-width: 70%;
  box-shadow: 0px 3px 14px hsl(0deg 0% 0% / 0.35);
  border-radius: 10px;
`;







const Welcometitles = () => {
  return(
    <TitleContainer>
      <MainTitle>Tervehdys kiltalainen!</MainTitle>
      <SubTitle>Täällä voit tehdä kulukorvauksen.</SubTitle>
    </TitleContainer>
  );
};

const FormCanvas = () => {
  return(
    <FormcanvasDiv>
      <Form />
    </FormcanvasDiv>
  );
};


const Mainscreen = () => {
  return(
    <ContainerDiv>
      <Welcometitles />
      <FormCanvas />
    </ContainerDiv>
  );
};

export default Mainscreen;