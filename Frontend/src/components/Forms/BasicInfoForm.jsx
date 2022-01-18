import React from 'react';
import FormTextField from './FormTextField';
import FormTitle from './FormTitle';
import styled from 'styled-components';
import Button from '../Button';
import { BsFillArrowRightCircleFill, BsFillStopCircleFill } from 'react-icons/bs';
import FormikWrapper from './FormikWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { clearBasicInfo, setBasicInfo } from '../../reducers/basicInfoReducer';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
`;

const Fields = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

const Buttonbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px 0px 0px;
`;  


const BasicInfoFormFields = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onInterrupt = () => {
    dispatch(clearBasicInfo());
    navigate('/');
  };

  return(
    <Container>
      <Fields>
        <FormTextField name='name' type='text' showName='Nimi' placeholder='Pekka Prodekolainen'/>
        <FormTextField name='email' type='email' showName='Sähköposti' placeholder='pekka.prodekolainen@prodeko.org'/>
        <FormTextField name='phone' type='text' showName='Puhelinnumero' placeholder='123 456 1866'/>
        <FormTextField name='iban' type='text' showName='Tilinumero (IBAN)' placeholder='FI21 1866 1866 1866 00'/>
        <FormTextField name='bic' type='text' showName='BIC' placeholder='NDEAFIHH, OKOYFIHH, HANDFIHH, ...'/>
      </Fields>
      <Buttonbar>
        <Button color='red' type='button' onClick={onInterrupt}>
          <BsFillStopCircleFill size='30'/>
          Keskeytä
        </Button>
        <Button type='submit'>
          Seuraava
          <BsFillArrowRightCircleFill size='30'/>
        </Button>
      </Buttonbar>
    </Container>
  );
};


const BasicInfoForm = () => {
  const dispatch = useDispatch();
  const initialValues = useSelector(state => state.basicInfo);

  
  const onBasicInfoSubmit = values => {
    dispatch(setBasicInfo(values));
  };
  
  return(
    <Container>
      <FormTitle>Aloitetaanpas! Lähdetään liikkeelle perustiedoistasi.</FormTitle>
      <FormikWrapper initialValues={initialValues} onSubmit={onBasicInfoSubmit}>
        <BasicInfoFormFields />    
      </FormikWrapper>
    </Container>
  );
};

export default BasicInfoForm;