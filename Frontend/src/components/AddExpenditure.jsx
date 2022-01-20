import React from 'react';
import styled from 'styled-components';
import ExpenditureForm from './Forms/ExpenditureForm';
import AddedExpenditures from './AddedExpenditures';
import FormTitle from './Forms/FormTitle';
import { useDispatch } from 'react-redux';
import { addExpenditure } from '../reducers/expenditureReducer';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
`;


const AddExpenditure = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    amount: '',
    info: ''
  };

  const submitExpenditure = (expenditure, {resetForm}) => {
    dispatch(addExpenditure(expenditure));
    resetForm({ values: initialValues });
  };

  const backToBasicInfo = () => {
    navigate('/luo');
  };


  return(
    <Container>
      <FormTitle>Sitten asiaan! Listaa alla kulukorvattavat menot.</FormTitle>
      <ExpenditureForm initialValues={initialValues} onSubmit={submitExpenditure} onBack={backToBasicInfo} onNext={() => console.log('Jee!')}/>
      <AddedExpenditures/>
    </Container>
  );
};

export default AddExpenditure;