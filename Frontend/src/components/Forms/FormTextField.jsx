import React from 'react';
import styled from 'styled-components';
import { Field, useField } from 'formik';

const Container = styled.div`
  flex-grow: 1;
`;

const TextInput = styled.input`
  box-sizing: border-box;
  flex-grow: 2;
  min-width: 300px;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border-style: solid;
  border-color: gray;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 5px 10px;
  transition: 1s;
  &:focus {
    box-shadow: 8px 13px;
    transition: 0.5s;
    border-color: black;
    outline: none;
    transform: translate(-3px, -3px);
  }
`;

const NameText = styled.div`
  margin: 7px;
  font-size: 16px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin: 20px 0px 0px 0px;
  padding: 0px;
`;  


const FormTextField = ({ showName, name, type, placeholder, style }) => {
  const [field, meta] = useField(name);
  const showError = field.value !== '' && meta.touched && meta.error;
  
  return(
    <Container style={style}>
      <NameText>{showName}</NameText>
      <Field
        name={name}
        type={type}
        as={TextInput}
        placeholder={placeholder}
        style={showError ? { borderColor: 'red' } : null}
      />
      {showError && <ErrorText>{meta.error}</ErrorText>}
    </Container>
  );
};

export default FormTextField;