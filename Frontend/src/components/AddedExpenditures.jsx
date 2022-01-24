
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import AddedExpenditure from './AddedExpenditure';

const Container = styled.div`
  flex-grow: 1;
`;


const ExpenditureGrid = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const AddedExpenditures = () => {
  const expenditures = useSelector(state => state.expenditures);

  return(
    <Container>
      <ExpenditureGrid>
        {expenditures.map(expenditure =>
          <AddedExpenditure key={expenditure.id} expenditure={expenditure}/>
        )}
      </ExpenditureGrid>
    </Container>
  );
};

export default AddedExpenditures;