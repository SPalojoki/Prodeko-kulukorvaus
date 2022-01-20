/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { BsFillPenFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 16px;
  border: 2px solid black;
  box-shadow: 4px 4px #000000;
  transition: 0.5s;
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 6px 6px #000000;
    transform: translate(-2px, -2px);
    transition: 0.5s;
    cursor: pointer;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 0px;
`;

const Description = styled.p`
  font-size: 12px;
  margin: 0px;
`;

const Sum = styled.div`
  height: 52px;
  width: 52px;
  font-size: 14px;
  background-color: green;
  color: white;
  box-shadow: 1px 1px #000000;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  word-wrap: normal;
  text-align: center;
`;

const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ModifyIcon = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: royalblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.3s;
  &:hover {
    opacity: 0.98;
    transition: 0.3s;
  }
`;

const AddedExpenditure = ({ expenditure }) => {
  const navigate = useNavigate();

  const modify = () => {
    navigate(`/muokkaa/${expenditure.id}`);
  };

  return(
    <Container onClick={modify}>
      <ModifyIcon>
        <BsFillPenFill size={26}/>
      </ModifyIcon>
      <Info>
        <div>
          <Title>{expenditure.title}</Title>
          <Description>{expenditure.info ? expenditure.info : 'Ei lisätietoja.'}</Description>
        </div>
        <Sum>{expenditure.amount} €</Sum>
      </Info>
    </Container>
  );
};


export default AddedExpenditure;