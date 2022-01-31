import React from 'react';
import styled from 'styled-components';
import AppHeader from './AppHeader';
import StartScreen from './StartScreen';
import CreateScreens from './CreateScreens';
import Summary from './Summary';
import Success from './Success';
import ModifyExpenditure from './ModifyExpenditure';
import { Routes, Route } from 'react-router-dom';
import ErrorPopup from './ErrorPopup';
import { useSelector } from 'react-redux';


const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
`;


const Kulukorvaus = () => {
  const error = useSelector(state => state.error);

  return(
    <Container>
      { error ? <ErrorPopup /> : null }
      <AppHeader name='Kulukorvaus' />
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/luo/*' element={<CreateScreens />}/>
        <Route path='/muokkaa/:id' element={<ModifyExpenditure />} />
        <Route path='/yhteenveto' element={<Summary />} />
        <Route path='/onnistui' element={<Success />} />
      </Routes>
    </Container>
  );
};

export default Kulukorvaus;