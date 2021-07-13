const router = require('express').Router()
const Account = require('./accounts-model')

const { checkAccountId } = require('./accounts-middleware')

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

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
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
