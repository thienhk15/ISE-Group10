const Author = require('../models/author.model');

const authorService = {
  getAllAuthor: () => {
    return new Promise((resolve, reject) => {
      try {
        const authors = Author.findAll({ raw: true });
        return resolve(authors);
      } catch (error) {
        console.log(error);
        return reject(error);
      }
    })
  },
  getAuthorById: (id) => {
    return new Promise((resolve, reject) => {
      try {
        const author = Author.findOne({
          where: {
            id: id
          },
          raw: true
        });
        return resolve(author);
      } catch (error) {
        console.log(error);
        return reject(error);
      }
    })
  }
}

module.exports = authorService;