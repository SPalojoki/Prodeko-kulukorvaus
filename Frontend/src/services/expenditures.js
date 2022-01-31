import axios from 'axios';
import { storeExpenditure } from '../reducers/downloadedExpenditureReducer';
import store from '../store';
const baselUrl = '/api';



const sendExpenditure = async (basicInfo, expenditures, files) => {
  const formData = new FormData();
  
  formData.append('basicInfo', JSON.stringify(basicInfo));
  formData.append('expenditures', JSON.stringify(expenditures));
  files.forEach(element => {
    formData.append('files', element);
  });

  try {
    const response = await axios.post(baselUrl + '/submitExpenditure', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      responseType: 'blob'
    });
    store.dispatch(storeExpenditure(response.data));
  } catch (e) {
    console.log(e);
  }


};

export default { sendExpenditure };