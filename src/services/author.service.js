const Author = require('../models/author.model');

const authorService = {
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