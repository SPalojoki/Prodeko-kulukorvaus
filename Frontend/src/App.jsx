import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Mainscreen from './components/Mainscreen';


const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
`;




const App = () => {
  return(
    <Container>
      <Header />
      <Mainscreen />
      <Footer />
    </Container>
  );
};

export default App;
