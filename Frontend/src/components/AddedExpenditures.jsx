import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: calc(max(20%, 250px));
  flex-grow: 1;
  max-width: 50%;
`;

const Contents = styled.div`
  display: flex;
  background-color: white;
  border-radius: 16px;
  padding: 15px 15px;
  color: black;
  box-shadow: 5px 10px #000000;
  border: 2px solid black;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0px;
`;


const AddedExpenditures = () => {
  return(
    <Container>
      <Contents>
        <Title>Lisätyt kulut</Title>
      </Contents>
    </Container>
  );
};

export default AddedExpenditures;