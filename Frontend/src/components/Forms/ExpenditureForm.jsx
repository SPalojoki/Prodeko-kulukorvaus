import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import FormTextField from './FormTextField';
import ButtonBar from './ButtonBar';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearBasicInfo } from '../../reducers/basicInfoReducer';
import { BsFillStopCircleFill, BsFillCheckCircleFill, BsFillArrowLeftCircleFill, BsFillPlusCircleFill } from 'react-icons/bs';
import { addExpenditure } from '../../reducers/expenditureReducer';
import * as Yup from 'yup';


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

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

// eslint-disable-next-line react/prop-types
const AddExpenditureFormFields = ({ dirty, isValid }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expenditures = useSelector(state => state.expenditures);

  const onInterrupt = () => {
    dispatch(clearBasicInfo());
    navigate('/');
  };

  const backToBasicInfo = () => {
    navigate('/luo');
  };

  return(
    <Container>
      <Fields>
        <FormTextField name='title' type='text' showName='Kulun selite' placeholder='Karkkeja fuksiryhmätapaamiseen'/>
        <FormTextField name='amount' type='text' showName='Summa (€)' placeholder='12.8' style={{flexGrow: 1}}/>
        <FormTextField name='info' type='text' showName='Lisätietoja' placeholder='Pekka Prodekolaisen fuksiryhmälle'/>
      </Fields>
      <ButtonBar>
        <ButtonGroup>
          <Button color='red' type='button' onClick={onInterrupt}>
            <BsFillStopCircleFill size='30'/>
            Keskeytä
          </Button>
          <Button color='orange' type='button' onClick={backToBasicInfo}>
            <BsFillArrowLeftCircleFill size='30'/>
            Takaisin
          </Button>
        </ButtonGroup>
        { dirty
          ?
          <Button type='submit' style={isValid ? null : { backgroundColor: 'gray' }}>
            Lisää
            <BsFillPlusCircleFill size='30' />
          </Button>
          :
          <Button type='button' style={expenditures.length !== 0 ? null : { backgroundColor: 'gray' }}>
            Valmis
            <BsFillCheckCircleFill size='30'/>
          </Button>
        }
      </ButtonBar>
    </Container>
  );
};


const ExpenditureForm = () => {
  const dispatch = useDispatch();
  
  const initialValues = {
    title: '',
    amount: '',
    info: ''
  };

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


  const submitExpenditure = (expenditure, {resetForm}) => {
    dispatch(addExpenditure(expenditure));
    resetForm({ values: initialValues });
  };


  return(
    <Container>
      <Formik initialValues={initialValues} onSubmit={submitExpenditure} validationSchema={validValues}>
        {({ dirty, isValid }) => {
          return(
            <Form>
              <AddExpenditureFormFields dirty={dirty} isValid={isValid}/>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default ExpenditureForm;