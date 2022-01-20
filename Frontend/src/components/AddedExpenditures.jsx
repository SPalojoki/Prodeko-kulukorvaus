/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import AddedExpenditure from './AddedExpenditure';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  margin: 0px;
`;

const ExpenditureGrid = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;


const AddedExpenditures = () => {
  const expenditures = useSelector(state => state.expenditures);
  console.log(expenditures);

  return(
    <Container>
      { expenditures.length !== 0
        ?
        <div>
          <Subtitle>Tähän mennessä lisätyt kulut</Subtitle>
          <ExpenditureGrid>
            {expenditures.map(expenditure =>
              <AddedExpenditure key={expenditure.id} expenditure={expenditure}/>
            )}
          </ExpenditureGrid>
        </div>
        : null
      }
    </Container>
  );
};

export default AddedExpenditures;