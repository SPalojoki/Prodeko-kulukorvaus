import React from 'react';
import styled from 'styled-components';

//Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #001428;
  padding: 20px;
  align-items: center;
  font-size: 20px;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;




//Component(s)

const Header = () => {
  return(
    <Container>
      <div>Prodeko kulukorvaus</div>
    </Container>
  );
};

export default Header;