const {Router} = require("express");
const router = Router();

const Joi = require("joi");

const db = require('../configurations/db');

router.get('/getExpense', (req, res) => {
  db.query('SELECT * FROM expense', (dbError, dbResult) => {
    if (dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send({response: 'Success', message: dbResult});
  })
});

router.post('/addExpense', (req, res) => {
  const joiSchema = Joi.object({
    expenseAmount: Joi.number(),
    expenseDescription: Joi.string()
  })

  const requestData = {
    expenseAmount: req.body.expenseAmount,
    expenseDescription: req.body.expenseDescription
  }

  const joiValidation = joiSchema.validate(requestData);

  if(joiValidation.error) return res.send({response: 'Failed', message: joiValidation.error.message});

  db.query('INSERT INTO expense(expense_amount, expense_description) VALUES(?,?)', [requestData.expenseAmount, requestData.expenseDescription], (dbError, dbResult) => {
    if(dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send({response: 'Success', message: 'Successfully add expanse!'});
  })
});

router.post('/removeExpense', (req, res) => {
  const requestData = {
    expenseId: req.body.id
  }

  db.query('DELETE FROM expense where id = ?', requestData.expenseId, (dbError, dbResult) => {
    if(dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send({response: 'Success', message: 'Successfully removed expanse record!'});
  })
});

module.exports = router;