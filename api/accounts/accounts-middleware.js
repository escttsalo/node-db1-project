const Account = require('./accounts-model')

exports.checkAccountPayload = async (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
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
