import React from 'react';
import styled from 'styled-components';
import { BsCheckCircleFill } from 'react-icons/bs';
import * as fileDownload from 'js-file-download';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 0px 60px 0px 60px;
`;

const Text = styled.h1`
  font-size: 30px;
  margin: 50px 20px 0px 20px;
  text-align: center;
`;

const SubText = styled.h2`
  font-size: 18px;
  margin: 20px;
  font-weight: normal;
  text-align: center;
`;

const ClickableText = styled.label`
  font-weight: bold;
  color: blue;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
  
const Success = () => {
  const storedExpenditure = useSelector(state => state.downloadedExpenditure);
  const navigate = useNavigate();
  
  const downloadExpenditure = () => {
    fileDownload(storedExpenditure, 'Kulukorvaus.pdf');
  };

  const startOver = () => {
    navigate('/');
  };

  return(
    <Container>
      <BsCheckCircleFill size='100' color='green'/>
      <Text>Nice! Kulukorvauksesi on nyt matkalla rahastonhoitajalle.</Text>
      <SubText>Voit vielä ladata kopion itsellesi <ClickableText onClick={downloadExpenditure}>tästä</ClickableText>. Muutoin voit sulkea ikkunan tai <ClickableText onClick={startOver}>aloittaa alusta</ClickableText>.</SubText>
    </Container>
  );
};


export default Success;