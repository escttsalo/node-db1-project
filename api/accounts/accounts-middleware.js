const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body
  const status = message => { res.status(400).json({message: message}) }
  if (name === undefined|| budget === undefined) {
    status('name and budget are required')
  } else if (typeof name != 'string'){
    status('name of account must be a string')
  } else if (name.trim().length <3 || name.trim().length >100 ){
    status('name of account must be between 3 and 100')
  } else if (typeof budget != 'number'){
    status('budget of account must be a number')
  } else if (Math.sign(budget) === -1 || budget > 1000000){
    status('budget of account is too large or too small')
  } else {
    req.body.name = name.trim()
    next()
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  const { name } = req.body
  const accs = await Account.getAll()
  const uniqueAcc = accs.filter(acc => acc.name === name)
  if (uniqueAcc.length != 0) {
    res.status(400).json({message: 'name is taken'})
    return;
  }
  next()
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const { id } = req.params
    const acc = await Account.getById(id)
    if (acc) {
      req.account = acc
      next()
    } else {
      res.status(404).json({message: 'account not found'})
    }
  } catch (err) {
    next(err)
  }
}
