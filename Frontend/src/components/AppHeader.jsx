import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  height: min-content;
  width: 100%;
  border-width: 0px 0px 2px 0px;
  border-color: #d4d4d4;
  border-style: solid;
`;

const Text = styled.div`
  font-weight: bold;
  padding: 20px;
  padding-right: 13vw;
  text-align: right;
  font-size: 25px;
`;


// eslint-disable-next-line react/prop-types
const AppHeader = ({ name }) => {
  return(
    <Header>
      <Text>{name}</Text>
    </Header>
  );
};

export default AppHeader;