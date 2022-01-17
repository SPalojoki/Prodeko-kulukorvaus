import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import ServicesHeader from './components/ServicesHeader';
import Kulukorvaus from './components/Kulukorvaus';


const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
`;




const App = () => {
  return(
    <Container>
      <ServicesHeader />
      <Kulukorvaus />
      <Footer />
    </Container>
  );
};

export default App;
