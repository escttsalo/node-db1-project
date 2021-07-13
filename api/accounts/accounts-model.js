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

const getById = id => {
  // DO YOUR MAGIC
}

const create = account => {
  // DO YOUR MAGIC
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
