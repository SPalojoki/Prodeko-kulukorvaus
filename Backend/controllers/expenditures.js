const expenditureRouter = require('express').Router();
const multer = require('multer');
const upload = multer();

expenditureRouter.post('/submitExpenditure', upload.any('files'), (request, response) => {
  const files = request.files;
  const basicInfo = JSON.parse(request.body.basicInfo);
  const expenditures = JSON.parse(request.body.expenditures);

  console.log('Files:', files);
  console.log('BasicInfo:', basicInfo);
  console.log('Expenditures:', expenditures);
  response.send('Toimii!').end();
});


module.exports = expenditureRouter;