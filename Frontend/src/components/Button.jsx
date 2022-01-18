import React from 'react';
import styled from 'styled-components';


const Container = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  background-color: green;
  border-radius: 16px;
  white-space: nowrap;
  width: min-content;
  padding: 15px 30px;
  margin: 4px 2px;
  text-align: center;
  color: white;
  box-shadow: 5px 10px #000000;
  transition: 0.5s;
  border: 2px solid lightgray;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    box-shadow: 3px 7px #000000;
    transition: 0.5s;
    transform: translate(2px, 3px);
    cursor: pointer;
  }
`;



// eslint-disable-next-line react/prop-types
const Button = ({ onClick, color, children, type }) => {
  return(
    <Container onClick={onClick} style={{ backgroundColor: color }} type={type}>
      {children}
    </Container>
  );
};

export default Button;