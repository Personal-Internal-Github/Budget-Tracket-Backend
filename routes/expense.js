const {Router} = require("express");
const router = Router();

const Joi = require("joi");

const db = require('../configurations/db');

router.get('/getExpanse', (req, res) => {
  db.query('SELECT * FROM expanse', (dbError, dbResult) => {
    if (dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send({response: 'Success', message: dbResult});
  })
});

router.post('/addExpanse', (req, res) => {
  const joiSchema = Joi.object({
    expanseAmount: Joi.number(),
    expanseDescription: Joi.string()
  })

  const requestData = {
    expanseAmount: req.body.expanseAmount,
    expanseDescription: req.body.expanseDescription
  }

  const joiValidation = joiSchema.validate(requestData);

  if(joiValidation.error) return res.send({response: 'Failed', message: joiValidation.error.message});

  db.query('INSERT INTO expanse(expanse_amount, expanse_description) VALUES(?,?)', [requestData.expanseAmount, requestData.expanseDescription], (dbError, dbResult) => {
    if(dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send({response: 'Success', message: 'Successfully add expanse!'});
  })
});

router.delete('/removeExpanse', (req, res) => {
  const requestData = {
    expanseId: req.body.id
  }

  db.query('DELETE FROM expanse where id = ?', requestData.expanseId, (dbError, dbResult) => {
    if(dbError) return res.status(501).send({response: 'ERROR', message: dbError});

    res.send({response: 'Success', message: 'Successfully removed expanse record!'});
  })
});

module.exports = router;