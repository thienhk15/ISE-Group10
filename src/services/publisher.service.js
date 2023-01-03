const Publisher = require('../models/publisher.model');

const publisherService = {
  getPublisherById: (id) => {
    return new Promise((resolve, reject) => {
      try {
        const publisher = Publisher.findOne({
          where: {
            id: id
          },
          raw: true
        });
        return resolve(publisher);
      } catch (error) {
        console.log(error);
        return reject(error);
      }
    })

  }
}

module.exports = publisherService;