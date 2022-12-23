const Category = require('../models/category.model');

const categoryService = {
  getAllCategories: ()=> {
    return new Promise(async (resolve, reject) => {
      try {
        const categories = Category.findAll({ raw: true });
        return resolve(categories);
      } catch (error) {
        return reject(error);
      }
    })
  }
}

module.exports = categoryService;