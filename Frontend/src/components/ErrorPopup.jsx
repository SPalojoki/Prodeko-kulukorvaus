import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Button from './Button';
import { BsFillExclamationTriangleFill, BsEmojiDizzyFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../reducers/errorReducer';

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: #00000090;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 50px;
  box-sizing: border-box;
  margin: 20px;
  border-radius: 20px;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  align-items: center;
  gap: 60px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 20px;
`;

const SubHeading = styled.p`
  font-size: 14px;
  margin: 0px;
  margin-top: 10px;
`;

const SubText = styled.p`
  font-size: 14px;
  margin: 0px;
  font-weight: normal;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;


const ErrorPopup = () => {
  const errorMessage = useSelector(state => state.error);
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(clearError());
  };

  return(
    <Container>
      <Box>
        <BsFillExclamationTriangleFill size='150' color='darkorange'/>
        <Contents>
          <BoxTextContent>
            <Title style={{color: 'darkorange', textAlign: 'center', margin: 0}}>Oho! Kohdattiin odottamaton virhe.</Title>
            <SubText style={{textAlign: 'center'}}>Jos ongelma toistuu, lähetä viesti Telegrammissa @sakaripalojoki</SubText>
            <SubHeading>Aiheesta kiinnostuneille:</SubHeading>
            <SubText style={{fontStyle: 'italic'}}>{errorMessage}</SubText>
          </BoxTextContent>
          <Buttons>
            <Button color='darkorange' onClick={closePopup}>
              Morgons
              <BsEmojiDizzyFill size='32'/>
            </Button>
          </Buttons>
        </Contents>
      </Box>
    </Container>
  );
};

export default ErrorPopup;