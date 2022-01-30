import axios from 'axios';
import * as fileDownload from 'js-file-download';
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
    fileDownload(response.data, response.headers['content-disposition'].split('filename=')[1]);
  } catch (e) {
    console.log(e);
  }


};

export default { sendExpenditure };