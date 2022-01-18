import React from 'react';
import { Formik, Form } from 'formik';


// eslint-disable-next-line react/prop-types
const FormikWrapper = ({ initialValues, onSubmit, children }) => {
  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        {children}
      </Form>
    </Formik>
  );
};

export default FormikWrapper;