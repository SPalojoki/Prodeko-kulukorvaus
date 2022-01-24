import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ExpenditureForm from './Forms/ExpenditureForm';
import Title from './Title';
import { editExpenditure } from '../reducers/expenditureReducer';
import Button from './Button';
import { BsFillSlashCircleFill } from 'react-icons/bs';
import { deleteExpenditure } from '../reducers/expenditureReducer';
import { clearFile } from '../reducers/selectedFileReducer';
import { modifyFiles } from '../reducers/filesReducer';

const Container = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  padding: 0px 10vw 0px 10vw;
  background-color: #F6F7FB;
  @media (max-width: 768px) {
    padding: 0px 15px 40px 15px;
  }
`;

const DeleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ModifyExpenditure = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submittedFile = useSelector(state => state.selectedFile);
  
  const expenditures = useSelector(state => state.expenditures);

  const getExpenditure = () => {
    return expenditures.find(expenditure => expenditure.id == id );
  };

  const backToNewExpenditure = () => {
    navigate('/luo/uusikulu');
  };

  const updateExpenditure = (modifiedExpenditure) => {
    const updatedExpenditure = submittedFile ? { ...modifiedExpenditure, attachedFile: submittedFile.name } : modifiedExpenditure;
    dispatch(editExpenditure(updatedExpenditure));

    if(submittedFile) {
      dispatch(modifyFiles(submittedFile));
      dispatch(clearFile());
    }
    navigate('/luo/uusikulu');
  };

  const removeExpenditure = () => {
    dispatch(deleteExpenditure(id));
    navigate('/luo/uusikulu');
  };


  return(
    <Container>
      <Title>Kaikille sattuu virheitä! Tee tarvittavat korjaukset alla.</Title>
      <ExpenditureForm initialValues={getExpenditure()} onSubmit={updateExpenditure} onBack={backToNewExpenditure}/>
      <DeleteContainer>
        <Button color={'darkred'} onClick={removeExpenditure}>
          Poista
          <BsFillSlashCircleFill size='32'/>
        </Button>
      </DeleteContainer>
    </Container>
  );
};

export default ModifyExpenditure;