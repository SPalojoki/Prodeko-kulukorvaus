import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
    text-align: center;
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    height: 55px;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    transition: all .4s ease-in-out;
    border-radius: 50px;
    box-sizing: border-box;
    &:hover {
      background-position: 100% 0;
      box-shadow: 0 4px 20px 0 rgba(65, 132, 234, 0.75);
      transform: scale(1.05);
      transition: all .4s ease-in-out;
    };
`;


// eslint-disable-next-line react/prop-types
const GlowButton = ({active, onClick, children}) => {
  console.log(active);
  return(
    <Button onClick={onClick}>
      {children}
    </Button>
  );
};

export default GlowButton;