/* eslint-disable no-unused-vars */
import axios from 'axios';
import { storeExpenditure } from '../reducers/downloadedExpenditureReducer';
import store from '../store';
const baselUrl = '/api';



const sendExpenditure = async (basicInfo, expenditures, files, navigate) => {
  const formData = new FormData();
  
  formData.append('basicInfo', JSON.stringify(basicInfo));
  formData.append('expenditures', JSON.stringify(expenditures));
  files.forEach(element => {
    formData.append('files', element);
  });

  return axios.post(baselUrl + '/submitExpenditure', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    responseType: 'blob'
  })
    .then(response => {
      store.dispatch(storeExpenditure(response.data));
    });
};

export default { sendExpenditure };