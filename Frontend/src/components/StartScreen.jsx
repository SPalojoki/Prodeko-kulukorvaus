import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import WelcomeImage from '../static/WelcomeImage.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Image = styled.img`
  padding: 8vh;
  width: calc(max(10vw, 150px));
  opacity: 0.75;
`;
  



const StartScreen = () => {
  return(
    <Container>
      <Image src={WelcomeImage}></Image>
      <Button text='Luo kulukorvaus'/>
    </Container>
  );
};

export default StartScreen;