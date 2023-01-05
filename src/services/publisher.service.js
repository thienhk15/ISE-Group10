const Publisher = require('../models/publisher.model');

const publisherService = {
  getAllPublisher: () => {
    return new Promise((resolve, reject) => {
      try {
        const publishers = Publisher.findAll({
          raw: true
        });
        return resolve(publishers);
      } catch (error) {
        return reject(error);
      }
    })
  },

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
        return reject(error);
      }
    })

  }
}

module.exports = publisherService;