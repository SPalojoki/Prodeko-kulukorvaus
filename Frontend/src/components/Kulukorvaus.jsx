import React from 'react';
import styled from 'styled-components';
import AppHeader from './AppHeader';
import StartScreen from './StartScreen';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
`;


const Kulukorvaus = () => {
  return(
    <Container>
      <AppHeader name='Kulukorvaus' />
      <StartScreen />
    </Container>
  );
};

export default Kulukorvaus;