const booksService = require('./books-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getBooks(request, response, next) {
  try {
    const books = await booksService.getBooks();

    return response.status(200).json(books);
  } catch (error) {
    return next(error);
  }
}

async function createBook(request, response, next) {
  try {
    const { title } = request.body;

    if (!title) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title is required');
    }

    const book = await booksService.create(title);

    return response.status(200).json(book);
  } catch (error) {
    return next(error);
  }
}

async function getBooks(request, response, next) {
  try {
    const offset = parseInt(request.query.offset) || 0;
    const limit = parseInt(request.query.limit) || 10;

    const books = await booksRepository.getBooksWithPagination(offset, limit);
    return response.status(200).json({ books, offset, limit });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getBooks,
  createBook,
};
