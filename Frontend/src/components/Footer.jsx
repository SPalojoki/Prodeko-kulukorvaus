import React from 'react';
import styled from 'styled-components';

//Styles
const Container = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px;
  box-sizing: border-box; 
  text-align: center;
  font-size: 14px;
  background-image: repeating-linear-gradient(to right,
  #C0392b , #E67E22 ,
  #F1C40F , #27ae60 ,
  #002851 );
  background-size: 100% 3px;
  background-repeat:no-repeat;
`;

const Footer = () => {


  //Component(s)
  return (
    <Container>
      Prodeko kulukorvaus - 2022
    </Container>
  );
};

export default Footer;