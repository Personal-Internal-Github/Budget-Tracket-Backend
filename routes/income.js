const {Router} = require('express');
const router = Router();

const db = require('../configurations/db');

router.get('/getIncome', (req, res) => {
  db.query('SELECT * FROM income', (dbError, dbResult) => {
    if(dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send(dbResult);
  })
});

router.post('/addIncome', (req, res) => {
  const requestData = {
    incomeValue: req.body.incomeValue
  }

  db.query('INSERT INTO INCOME(income) VALUES(?)', requestData.incomeValue, (dbError, dbResult) => {
    if (dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send({response: 'SUCCESS', message: 'Successfully added income!'});
  })
});

router.delete('/removeIncome', (req, res) => {
  const requestData = {
    incomeId: req.body.id
  }

  db.query('DELETE FROM income where id = ?', requestData.incomeId, (dbError, dbResult) => {
    if(dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send({response: 'Success', message: 'Successfully removed income record!'});
  })
});

module.exports = router;