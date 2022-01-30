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

    filesAndExpenditures.push({...expenditure, fileBuffer: file.buffer, fileType: file.mimetype});
  }

  const allData = {
    basicInfo,
    filesAndExpenditures
  };


  try {
    response.setHeader('Content-Type', 'application/pdf; charset=utf-8');
    response.setHeader('Content-Disposition', 'attachment;filename=korvaus.pdf');

    generateExpenditure(allData,
      (chunk) => response.write(chunk),
      () => response.end()
    );
  } catch (error) {
    response.status(500).json({error: error.message});
  }
});


module.exports = expenditureRouter;