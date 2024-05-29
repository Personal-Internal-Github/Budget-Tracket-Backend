const {Router} = require('express');
const router = Router();

const db = require('../configurations/db');

router.get('/getIncome', (req, res) => {
  db.query('SELECT * FROM income', (dbError, dbResult) => {
    if(dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send(dbResult);
  })
});

router.get('/getIncomeByMonth', (req, res) => {
  db.query('SELECT * FROM income WHERE MONTH(TIMESTAMP) = MONTH(CURDATE());', (dbError, dbResult) => {
    if(dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send(dbResult);
  })
});

router.post('/addIncome', (req, res) => {
  const requestData = {
    incomeValue: req.body.incomeValue,
    incomeDescription: req.body.incomeDescription
  }

  db.query('INSERT INTO INCOME(income, income_description) VALUES(?,?)', [requestData.incomeValue, requestData.incomeDescription], (dbError, dbResult) => {
    if (dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send({response: 'SUCCESS', message: 'Successfully added income!'});
  })
});

router.post('/removeIncome', (req, res) => {
  const requestData = {
    incomeId: req.body.incomeId
  }

  db.query('DELETE FROM income where id = ?', requestData.incomeId, (dbError, dbResult) => {
    if(dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send({response: 'Success', message: 'Successfully removed income record!'});
  })
});

module.exports = router;