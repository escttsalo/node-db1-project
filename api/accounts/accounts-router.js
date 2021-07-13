const router = require('express').Router()
const Account = require('./accounts-model')

const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  try {
    const accs = await Account.getAll()
    res.json(accs)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  res.json(req.account)
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  try {
    const postAcc = await Account.create(req.body)
    res.status(201).json(postAcc)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', checkAccountId, checkAccountPayload, async (req, res, next) => {
  try {
    const acc = await Account.updateById(req.params.id, req.body)
    res.json(acc)
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  const status = err.status || 500
  res.status(status).json({
    message: err.message
  })
})

module.exports = router;
