import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import BasicInfoForm from './BasicInfoForm';

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  padding: 0px 13vw 0px 13vw;
  background-color: #F6F7FB;
`;

const Form = () => {
  return(
    <Container>
      <Routes>
        <Route path='/' element={<BasicInfoForm />} />
        <Route path='/kulut' element={<div>Moi</div>}/>
      </Routes>
    </Container>
  );
};

export default Form;