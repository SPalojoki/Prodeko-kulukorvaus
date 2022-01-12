import React from 'react';
import styled from 'styled-components';
import GlowButton from './GlowButton';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #001428;
  text-align: center;
  gap: 1vh;
`;

const WelcomeText = styled.div`
  font-size: calc(20px + 5vw);
  color: white;
  margin: 0px 5px;
  font-weight: bold;
`;

const Subheading = styled.div`
  font-size: calc(14px + 1.5vw);
  margin: 0px 5px;
  margin-bottom: 40px;
  color: white;
  font-weight: bold;
`;


const WelcomeScreen = () => {
  return(
    <Container>
      <WelcomeText>Tervetuloa kulumasiinaan!</WelcomeText>
      <Subheading>Täällä voit hakea kulukorvausta killalta.</Subheading>
      <GlowButton>Aloitetaan!</GlowButton>
    </Container>
  );
};

export default WelcomeScreen;