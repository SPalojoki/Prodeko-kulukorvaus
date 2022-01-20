import React from 'react';
import FormTextField from './FormTextField';
import FormTitle from './FormTitle';
import styled from 'styled-components';
import Button from '../Button';
import ButtonBar from './ButtonBar';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setBasicInfo } from '../../reducers/basicInfoReducer';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Container = styled.div`
  width: 100%;
`;

const Fields = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

const BasicInfoFormFields = () => {
  return(
    <Container>
      <Fields>
        <FormTextField name='name' type='text' showName='Nimi' placeholder='Pekka Prodekolainen'/>
        <FormTextField name='email' type='text' showName='Sähköposti' placeholder='pekka.prodekolainen@prodeko.org'/>
        <FormTextField name='phone' type='text' showName='Puhelinnumero' placeholder='123 456 1866'/>
        <FormTextField name='iban' type='text' showName='Tilinumero (IBAN)' placeholder='FI21 1866 1866 1866 00'/>
        <FormTextField name='bic' type='text' showName='BIC' placeholder='NDEAFIHH, OKOYFIHH, HANDFIHH, ...'/>
      </Fields>
      <ButtonBar>
        <Button type='submit'>
          Seuraava
          <BsFillArrowRightCircleFill size='30'/>
        </Button>
      </ButtonBar>
    </Container>
  );
};


const BasicInfoForm = () => {
  const dispatch = useDispatch();
  const initialValues = useSelector(state => state.basicInfo);
  const navigate = useNavigate();

  const validValues = Yup.object().shape({
    name: Yup.string()
      .max(50, 'Nimi on liian pitkä!')
      .required('Tämä kenttä on pakollinen!'),
    email: Yup.string()
      .email('Tarkista osoitteen muotoilu!')
      .required('Tämä kenttä on pakollinen!'),
    phone: Yup.string()
      .max(15, 'Tarkista puhelinnumero')
      .min(5, 'Tarkista puhelinnumero!')
      .required('Tämä kenttä on pakollinen!'),
    iban: Yup.string()
      .length(22, 'Tarkista IBAN. Käytä välejä erottimena.')
      .required('Tämä kenttä on pakollinen!'),
    bic: Yup.string()
      .min(8, 'Tarkista BIC-tunnus')
      .max(11, 'Tarkista BIC-tunnus')
      .required('Tämä kenttä on pakollinen!')
  });



  const onBasicInfoSubmit = values => {
    dispatch(setBasicInfo(values));
    navigate('/luo/uusikulu');
  };
  
  return(
    <Container>
      <FormTitle>Aloitetaanpas! Lähdetään liikkeelle perustiedoistasi.</FormTitle>
      <Formik initialValues={initialValues} onSubmit={onBasicInfoSubmit} validationSchema={validValues}>
        {() => {
          return(
            <Form>
              <BasicInfoFormFields/> 
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default BasicInfoForm;