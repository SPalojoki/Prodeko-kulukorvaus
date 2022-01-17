import React from 'react';
import styled from 'styled-components';
import { BsFileEarmarkPlus } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  gap: 15px;
  background-color: black;
  border-radius: 16px;
  white-space: nowrap;
  width: min-content;
  padding: 15px 30px;
  margin: 4px 2px;
  text-align: center;
  color: white;
  transition: 0.3s;
  &:hover{
    background-color: #3d3d3d;
    cursor: pointer;
  }
`;

const Text = styled.div`
  color: white;
`;


// eslint-disable-next-line react/prop-types
const Button = ({ text, onClick }) => {
  return(
    <Container onClick={onClick}>
      <BsFileEarmarkPlus />
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;