import React from 'react';
import styled from 'styled-components';
import ExpenditureForm from './Forms/ExpenditureForm';
import AddedExpenditures from './AddedExpenditures';
import FormTitle from './Forms/FormTitle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
`;

const FormAndList = styled.div`
display: flex;
flex-wrap: wrap;
gap: 40px;
`;



const AddExpenditure = () => {
  return(
    <Container>
      <FormTitle>Sitten asiaan! Listaa alla kulukorvattavat menot.</FormTitle>
      <FormAndList>
        <ExpenditureForm />
        <AddedExpenditures />
      </FormAndList>
    </Container>
  );
};

export default AddExpenditure;