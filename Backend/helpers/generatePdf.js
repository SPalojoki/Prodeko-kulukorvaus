const PDFDoocument = require('pdfkit');

const headerData = {
  firstRow: 'Prodeko ry.',
  secondRow: 'Maarintie 8',
  thirdRow: '02150, Espoo'
};

const date = new Date().toLocaleDateString('fi-FI', { year: 'numeric', month: 'long', day: 'numeric' });


const generateExpenditure = (allData, dataCallback, endCallback) => {
  const document = new PDFDoocument({ margin: 50 });
  document.on('data', dataCallback);
  document.on('end', endCallback);

  generateHeader(document);
  generateBasicInformation(document, allData);
  generateExpenditureTable(document, allData);
  generateAppendices(document, allData);

  document.end();
};

//Helper functions

const generateHeader = (document) => {
  document
    .image('./static/Prodeko.png', 50, 45, { width: 200 })
    .font('./static/Roboto-Bold.ttf')
    .fontSize(9)
    .text(headerData.firstRow, 200, 62, { align: 'right' })
    .font('./static/Roboto-Regular.ttf')
    .text(headerData.secondRow, 200, 72, {align: 'right'})
    .text(headerData.thirdRow, 200, 82, {align: 'right'})
    .moveDown();
};

const generateBasicInformation = (document, allData) => {
  const basicInfo = allData.basicInfo;

  document
    .fillColor('#444444')
    .fontSize(20)
    .font('./static/Roboto-Bold.ttf')
    .text('Kulukorvaus', 50, 130)
    .fontSize(16)
    .font('./static/Roboto-Regular.ttf')
    .text(date, 50, 134, {align: 'right'});
  
  generateDivider(document, 170);
  
  const basicInfoTop = 185;
  
  document
    .fontSize(10)
    .font('./static/Roboto-Bold.ttf')
    .text('Nimi:', 60, basicInfoTop)
    .text('Sähköposti:', 60, basicInfoTop + 20)
    .text('Puhelin:', 60, basicInfoTop + 2 * 20)
    .font('./static/Roboto-Regular.ttf')
    .text(basicInfo.name, 130, basicInfoTop)
    .text(basicInfo.email, 130, basicInfoTop + 20)
    .text(basicInfo.phone, 130, basicInfoTop + 2 * 20)
    
    .font('./static/Roboto-Bold.ttf')
    .text('Telegram:', 360, basicInfoTop)
    .text('Tilinumero:', 360, basicInfoTop + 20)
    .text('BIC-tunniste:', 360, basicInfoTop + 2 * 20)
    .font('./static/Roboto-Regular.ttf')
    .text(basicInfo.name, 430, basicInfoTop)
    .text(basicInfo.iban, 430, basicInfoTop + 20)
    .text(basicInfo.bic, 430, basicInfoTop + 2 * 20);
    
  generateDivider(document, 250);
  
};


const generateDivider = (document, y) => {
  document
    .strokeColor('#aaaaaa')
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(562, y)
    .stroke();
};

const generateExpenditureTable = (document, allData) => {
  const expenditures = allData.filesAndExpenditures;
  const expenditureTableTop = 325;
  
  document
    .font('./static/Roboto-Bold.ttf')
    .text('Selite', 60, expenditureTableTop)
    .text('Summa (€)', 60 + 200, expenditureTableTop)
    .text('Lisätietoa', 60 + 175 + 100, expenditureTableTop)
    .text('Liite', 60 + 175 + 100 + 200, expenditureTableTop);
    
  generateDivider(document, expenditureTableTop + 20);
  
  for (let i = 0; i < expenditures.length; i++) {
    const expenditure = expenditures[i];
    document
      .font('./static/Roboto-Regular.ttf')
      .text(expenditure.title, 60, expenditureTableTop + 30 + 30 * i)
      .text(expenditure.amount, 60 + 200, expenditureTableTop + 30 + 30 * i)
      .text(expenditure.info, 60 + 175 + 100, expenditureTableTop + 30 + 30 * i)
      .text(i + 1, 60 + 175 + 100 + 200 + 7, expenditureTableTop + 30 + 30 * i);

    generateDivider(document, expenditureTableTop + 30 + 30 * i + 20);
  }
  
  const sumRowTop = expenditureTableTop + 30 + 30 * (expenditures.length - 1) + 20;

  generateDivider(document, sumRowTop);
  generateDivider(document, sumRowTop + 4);
  document
    .font('./static/Roboto-Bold.ttf')
    .text('Yhteensä:', 60, sumRowTop + 11)
    .text(expenditures.map(expenditure => new Number(expenditure.amount)).reduce((a,b) => a + b), 60 + 200, sumRowTop + 11);
};

const generateAppendices = (document, allData) => {
  const filesAndExpenditures = allData.filesAndExpenditures;

  for (let i = 0; i < filesAndExpenditures.length; i++) {
    const fileToAdd = filesAndExpenditures[i];
    document.addPage();
    generateHeader(document);
    document
      .fontSize(20)
      .font('./static/Roboto-Bold.ttf')
      .text(`Liite ${i + 1}`, 50, 130)
      .image(fileToAdd.fileBuffer, 50, 200, { width: 400 });
  }
};


module.exports = generateExpenditure;