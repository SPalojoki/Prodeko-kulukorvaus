import React from 'react';
import styled from 'styled-components';
import AppHeader from './AppHeader';
import StartScreen from './StartScreen';
import CreateScreens from './CreateScreens';
import ModifyForm from './Forms/ModifyForm';
import { Routes, Route } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
`;


const Kulukorvaus = () => {
  return(
    <Container>
      <AppHeader name='Kulukorvaus' />
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/luo/*' element={<CreateScreens />}/>
        <Route path='/muokkaa/:id' element={<ModifyForm />} />
      </Routes>
    </Container>
  );
};

export default Kulukorvaus;