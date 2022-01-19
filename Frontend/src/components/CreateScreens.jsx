import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import BasicInfoForm from './Forms/BasicInfoForm';
import AddExpenditure from './AddExpenditure';

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  padding: 0px 10vw 0px 10vw;
  background-color: #F6F7FB;
  @media (max-width: 768px) {
    padding: 0px 15px 40px 15px;
  }
`;

const Form = () => {
  return(
    <Container>
      <Routes>
        <Route path='/' element={<BasicInfoForm />} />
        <Route path='/uusikulu' element={<AddExpenditure />}/>
      </Routes>
    </Container>
  );
};

export default Form;