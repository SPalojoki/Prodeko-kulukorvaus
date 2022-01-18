import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

const Container = styled.div`
  flex-grow: 1;
`;

const TextInput = styled.input`
  box-sizing: border-box;
  flex-grow: 1;
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
  

// eslint-disable-next-line react/prop-types
const FormTextField = ({ showName, name, type, placeholder }) => {
  return(
    <Container>
      <NameText>{showName}</NameText>
      <Field name={name} type={type} as={TextInput} placeholder={placeholder} />
    </Container>
  );
};

export default FormTextField;