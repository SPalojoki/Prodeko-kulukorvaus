import React from 'react';
import FormTextField from './FormTextField';
import FormTitle from './FormTitle';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Fields = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;
  



const BasicInfoForm = () => {
  return(
    <Container>
      <FormTitle title='Aloitetaanpas! Lähdetään liikkeelle perustiedoistasi.' />
      <Fields>
        <FormTextField name='Nimi' placeHolder='Pekka Prodekolainen'/>
        <FormTextField name='Sähköposti' placeHolder='pekka.prodekolainen@prodeko.org'/>
        <FormTextField name='Puhelinnumero' placeHolder='123 456 1866'/>
        <FormTextField name='Tilinumero (IBAN)' placeHolder='FI21 1866 1866 1866 00'/>
        <FormTextField name='BIC' placeHolder='NDEAFIHH, OKOYFIHH, HANDFIHH, ...'/>
      </Fields>
    </Container>
  );
};

export default BasicInfoForm;