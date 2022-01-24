import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AddedExpenditures from './AddedExpenditures';
import Title from './Title';
import { BsFillPenFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

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


const SummaryBasicInfo = ({ onClick }) => {
  const basicInfo = useSelector(state => state.basicInfo);

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
  const navigate = useNavigate();

  useEffect(() => console.log('raikku'));


  return(
    <Container>
      <Title>Käydään vielä lopuksi läpi lisäämäsi tiedot.</Title>
      <Contents>
        <div>
          <Title size='sub'>Tässä perusjutut</Title>
          <SummaryBasicInfo onClick={() => navigate('/luo')}/>
        </div>
        <div>
          <Title size='sub'>ja tässä kulukorvattavat kulut</Title>
          <AddedExpenditures />
        </div>
      </Contents>
    </Container>
  );
};

export default Summary;