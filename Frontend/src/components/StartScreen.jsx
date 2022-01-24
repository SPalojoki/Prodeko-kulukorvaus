import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import WelcomeImage from '../static/WelcomeImage.png';
import { Link } from 'react-router-dom';
import { BsFillFileEarmarkPlusFill } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Image = styled.img`
  width: calc(max(35vw, 400px));
  margin-bottom: 80px;
`;
  

const StartScreen = () => {

  return(
    <Container>
      <Image src={WelcomeImage}></Image>
      <Link to='/luo' style={{ textDecoration: 'none' }}>
        <Button text='Luo kulukorvaus' color='green'>
          <BsFillFileEarmarkPlusFill size='40' />
          Luo kulukorvaus
        </Button>
      </Link>
    </Container>
  );
};

export default StartScreen;