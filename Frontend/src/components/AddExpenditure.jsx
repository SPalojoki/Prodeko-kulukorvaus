import React from 'react';
import styled from 'styled-components';
import ExpenditureForm from './Forms/ExpenditureForm';
import AddedExpenditures from './AddedExpenditures';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux';
import { addExpenditure } from '../reducers/expenditureReducer';
import { useNavigate } from 'react-router-dom';
import { clearFile } from '../reducers/selectedFileReducer';
import { modifyFiles } from '../reducers/filesReducer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
`;


const AddExpenditure = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const expenditures = useSelector(state => state.expenditures);
  const submittedFile = useSelector(state => state.selectedFile);
  const files = useSelector(state => state.files);

  const initialValues = {
    title: '',
    amount: '',
    info: ''
  };

  const submitExpenditure = (expenditure, {resetForm}) => {
    if(!submittedFile) {
      alert('Et ole liittänyt kuittia!');
    } else {
      dispatch(addExpenditure({ ...expenditure, attachedFile: submittedFile.name }));
      dispatch(modifyFiles(submittedFile));
      dispatch(clearFile());
      resetForm({ values: initialValues });
    }
  };

  const backToBasicInfo = () => {
    navigate('/luo');
  };

  const toSummary = () => {
    console.log(expenditures);
    console.log(files);
    //navigate('/yhteenveto');
  };

  return(
    <Container>
      <Title>Sitten asiaan! Listaa alla kulukorvattavat menot.</Title>
      <ExpenditureForm initialValues={initialValues} onSubmit={submitExpenditure} onBack={backToBasicInfo} onNext={toSummary}/>
      { expenditures.length !== 0
        ?
        <>
          <Title size='sub'>Tähän mennessä lisätyt kulut</Title>
          <AddedExpenditures/>
        </>
        : null
      }
    </Container>
  );
};

export default AddExpenditure;