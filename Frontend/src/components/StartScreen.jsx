import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import WelcomeImage from '../static/WelcomeImage.png';
import { Link } from 'react-router-dom';

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
      <Link to='/lomake'>
        <Button text='Luo kulukorvaus'/>
      </Link>
    </Container>
  );
};

export default StartScreen;