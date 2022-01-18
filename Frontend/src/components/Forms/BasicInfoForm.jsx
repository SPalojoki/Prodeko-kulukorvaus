import React from 'react';
import FormTextField from './FormTextField';
import FormTitle from './FormTitle';
import styled from 'styled-components';
import Button from '../Button';
import { BsFillArrowRightCircleFill, BsFillStopCircleFill } from 'react-icons/bs';
import FormikWrapper from './FormikWrapper';

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



const initialValues = {
  name: '',
  email: '',
  phone: '',
  iban: '',
  bic: ''
}
;





const BasicInfoFormFields = () => {
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
        <Button color='red' type='button'>
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
  return(
    <Container>
      <FormTitle title='Aloitetaanpas! Lähdetään liikkeelle perustiedoistasi.' />
      <FormikWrapper initialValues={initialValues} onSubmit={values => console.log(values)}>
        <BasicInfoFormFields />    
      </FormikWrapper>
    </Container>
  );
};

export default BasicInfoForm;