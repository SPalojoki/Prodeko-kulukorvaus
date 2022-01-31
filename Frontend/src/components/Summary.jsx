/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AddedExpenditures from './AddedExpenditures';
import Title from './Title';
import { BsFillPenFill, BsArrowUpRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import ButtonBar from './Forms/ButtonBar';
import Button from './Button';
import expendituresServices from '../services/expenditures';
import { setError } from '../reducers/errorReducer';

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

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;


const BasicInfoContainer = styled.div`
  display: flex;
  background-color: white;
  padding: 13px;
  border-radius: 16px;
  border: 2px solid black;
  box-shadow: 4px 4px #000000;
  transition: 0.5s;
  flex-shrink: 1;
  gap: 20px;
  overflow: hidden;
  flex-wrap: wrap;
  position: relative;
  &:hover {
    box-shadow: 6px 6px #000000;
    transform: translate(-2px, -2px);
    transition: 0.5s;
    cursor: pointer;
  }
`;

const BasicInfoItemContainer = styled.div`
  box-shadow: 1px 1px #000000;
  border: 2px solid black;
  padding: 10px;
  border-radius: 5px;
  background-color: #192D76;;
  color: white;
  font-weight: normal;
`;

const BasicInfoItem = ({ title, value }) => {
  return(
    <BasicInfoItemContainer>
      <b>{title}:</b>
      <div>{value}</div>
    </BasicInfoItemContainer>
  );
};

const ModifyIcon = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: royalblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.3s;
  &:hover {
    opacity: 0.98;
    transition: 0.3s;
  }
`;


const SummaryBasicInfo = ({ onClick, basicInfo }) => {
  return(
    <BasicInfoContainer onClick={onClick}>
      <ModifyIcon>
        <BsFillPenFill size={26}/>
      </ModifyIcon>
      <BasicInfoItem title='Nimi' value={basicInfo.name} />
      <BasicInfoItem title='Sähköposti' value={basicInfo.email} />
      <BasicInfoItem title='Puhelinnumero' value={basicInfo.phone} />
      <BasicInfoItem title='Tilinumero' value={basicInfo.iban} />
      <BasicInfoItem title='BIC' value={basicInfo.bic} />
    </BasicInfoContainer>
  );
};

const Summary = () => {
  const basicInfo = useSelector(state => state.basicInfo);
  const addedExpenditures = useSelector(state => state.expenditures);
  const files = useSelector(state => state.files);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backToAddExpenditure = () => {
    navigate('/luo/uusikulu');
  };

  const onSend = () => {
    expendituresServices.sendExpenditure(basicInfo, addedExpenditures, files, navigate)
      .then(() => navigate('/onnistui'))
      .catch((error) => dispatch(setError(error.message)));
  };


  return(
    <Container>
      <Title>Käydään vielä lopuksi läpi lisäämäsi tiedot.</Title>
      <Contents>
        <div>
          <Title size='sub'>Tässä perusjutut</Title>
          <SummaryBasicInfo onClick={() => navigate('/luo')} basicInfo={basicInfo}/>
        </div>
        <div>
          <Title size='sub'>ja tässä kulukorvattavat kulut</Title>
          <AddedExpenditures />
        </div>
      </Contents>
      <ButtonBar onBack={backToAddExpenditure}>
        <Button onClick={onSend}>
          Lähetä
          <BsArrowUpRightCircleFill size='30'/>
        </Button>
      </ButtonBar>
    </Container>
  );
};

export default Summary;