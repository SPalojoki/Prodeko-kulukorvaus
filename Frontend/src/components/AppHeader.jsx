import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: min-content;
  width: 100%;
  border-width: 0px 0px 2px 0px;
  border-color: #d4d4d4;
  border-style: solid;
`;

const Text = styled.div`
  font-weight: bold;
  padding: 20px;
  padding-left: 10vw;
  text-align: left;
  font-size: 25px;
  color: black;
  @media (max-width: 768px) {
    padding-left: 15px;
  }
`;



const AppHeader = ({ name }) => {
  return(
    <Container>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Text>{name}</Text>
      </Link>
    </Container>
  );
};

export default AppHeader;