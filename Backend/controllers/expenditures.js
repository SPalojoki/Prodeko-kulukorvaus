const expenditureRouter = require('express').Router();
const multer = require('multer');
const generateExpenditure = require('../helpers/generatePdf');
const upload = multer();


expenditureRouter.post('/submitExpenditure', upload.any('files'), (request, response) => {
  const files = request.files;
  const basicInfo = JSON.parse(request.body.basicInfo);
  const expenditures = JSON.parse(request.body.expenditures);

  const filesAndExpenditures = [];

  for (let i = 0; i < expenditures.length; i++) {
    const expenditure = expenditures[i];
    const file = files.find(file => file.originalname === expenditure.attachedFile);

    filesAndExpenditures.push({...expenditure, fileBuffer: file.buffer});
  }

  const allData = {
    basicInfo,
    filesAndExpenditures
  };

  generateExpenditure(allData, './pdfs/pdf');
  
  console.log('Files:', files);
  console.log('BasicInfo:', basicInfo);
  console.log('Expenditures:', expenditures);
  console.log('Kaikki', allData);
  response.send('Toimii!').end();
});


module.exports = expenditureRouter;