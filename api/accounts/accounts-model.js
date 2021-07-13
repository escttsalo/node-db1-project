const db = require('../../data/db-config')

const getAll = async () => {
  try{
    const recs = await db('accounts')
    return recs
  }
  catch (err) {
    return []
  }
}

const getById = async id => {
  const recs = await db('accounts').where('id', id).first()
  return recs
}

const create = async account => {
  const [id] = await db('accounts').insert(account)
  const newAcc = await getById(id)
  return newAcc
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
