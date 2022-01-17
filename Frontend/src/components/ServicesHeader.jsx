import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  background-color: blue;
  width: 100%;
  color: white;
  padding: 15px;
`;



const ServicesHeader = () => {
  const appName = 'kulukorvaus'; //TODO: Use route from URL when expanding application


  return(
    <Header>
      <strong>Olet tällä hetkellä sovelluksessa:</strong> {appName}
    </Header>
  );
};


export default ServicesHeader;