import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import FormTextField from './FormTextField';
import ButtonBar from './ButtonBar';
import Button from '../Button';
import { useSelector } from 'react-redux';
import { BsFillCheckCircleFill, BsFillPlusCircleFill } from 'react-icons/bs';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import FileInput from './FileInput';

//TODO: Dealing with different button in edit and new expenditures form might need some refactoring as the needs have changed...


const Container = styled.div`
  margin-bottom: 15px;
  flex-shrink: 1;
`;

const Fields = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

const SubmitFileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 32px; //Margin-top to make button level with fields (label dimensions 7px + 1px + 16px + 1px + 7px)
`;

const ExpenditureFormFields = () => {
  return(
    <Container>
      <Fields>
        <FormTextField name='title' type='text' showName='Kulun selite' placeholder='Karkkeja fuksiryhmätapaamiseen'/>
        <FormTextField name='amount' type='text' showName='Summa (€)' placeholder='12.99' style={{flexGrow: 1}}/>
        <FormTextField name='info' type='text' showName='Lisätietoja' placeholder='Pekka Prodekolaisen fuksiryhmälle'/>
        <SubmitFileContainer>
          <FileInput />
        </SubmitFileContainer>
      </Fields>
    </Container>
  );
};


const Buttons = ({ dirty, isValid, onNext, onBack }) => {
  const location = useLocation ();
  const expenditures = useSelector(state => state.expenditures);

  const isInEdit = location.pathname.startsWith('/muokkaa');

  return(
    <ButtonBar onBack={onBack}>
      { isInEdit ?
        <Button type='submit' style={isValid ? null : { backgroundColor: 'gray' }}>
          Muokkaa
          <BsFillCheckCircleFill size='30'/>
        </Button>
        : dirty
          ?
          <Button type='submit' style={isValid ? null : { backgroundColor: 'gray' }}>
            Lisää
            <BsFillPlusCircleFill size='30' />
          </Button>
          :
          <Button type='button' style={expenditures.length !== 0 ? null : { backgroundColor: 'gray' }} onClick={onNext}>
            Valmis
            <BsFillCheckCircleFill size='30'/>
          </Button>
      }
    </ButtonBar>
  );
};

//Edit is defining if form buttons should be in editing mode
const ExpenditureForm = ({ initialValues, onSubmit, onNext, onBack }) => {
  

  const validValues = Yup.object().shape({
    title: Yup.string()
      .min(5, 'Selite on liian lyhyt')
      .max(50, 'Selite on liian pitkä!')
      .required('Tämä kenttä on pakollinen!'),
    amount: Yup.number()
      .typeError('Käytä vain numeroita sekä erottimena pistettä.')
      .required('Tämä kenttä on pakollinen!')
      .positive('Summa voi olla vain positiivinen 😉'),
    info: Yup.string()
  });


  return(
    <Container>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validValues}>
        {({ dirty, isValid }) => {
          return(
            <Form>
              <ExpenditureFormFields/>
              <Buttons dirty={dirty} isValid={isValid} onNext={onNext} onBack={onBack} />
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default ExpenditureForm;