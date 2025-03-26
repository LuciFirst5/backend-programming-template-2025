const { Books } = require('../../../models');

async function getBooks() {
  return Books.find({});
}

async function create(title) {
  return Books.create({ title });
}
async function getBooksWithPagination(offset = 0, limit = 10) {
  return Books.find().skip(offset).limit(limit);
}
module.exports = {
  getBooks,
  create,
  getBooksWithPagination
};
