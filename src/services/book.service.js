const Book = require('../models/book.model');
const db = require('../config/database');
const { $or } = require('../config/operatorAlias');

const bookService = {
    getAllBooks: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const books = Book.findAll({ raw: true });
                return resolve(books);
            } catch (error) {
                return reject(error);
            }
        })
    },

    getBookById: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const book = Book.findOne({
                    where: {
                        id: {
                            $eq: id
                        }
                    },
                    raw: true
                });
                return resolve(book);
            } catch (error) {
                return reject(error);
            }
        })
    },

    searchBook: (query) => {
        return new Promise(async (resolve, reject) => {
            try {
                const books = Book.findAll({
                    where: {
                        $and: [
                            {
                                title: {
                                    $substring: query.name
                                }
                            },
                            {
                                categoryId: (query.cat == 0) ?
                                    { $ne: null } :
                                    { $eq: query.cat }
                            }
                        ]
                    },
                    raw: true
                });
                return resolve(books);
            } catch (error) {
                return reject(error);
            }
        })
    },

    getBooksByCategoryId: (categoryId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const books = Book.findAll({
                    where: {
                        categoryId: {
                            $eq: categoryId
                        }
                    },
                    raw: true
                });
                return resolve(books);
            } catch (error) {
                return reject(error);
            }
        });
    },

    searchBookAndSorted(query){
        return new Promise(async (resolve, reject) => {
            try {
                if(query.sort == 'asc'){
                    const books = Book.findAll({
                        where: {
                            $and: [
                                {
                                    title: {
                                        $substring: query.name
                                    }
                                },
                                {
                                    categoryId: (query.cat == 0) ?
                                        { $ne: null } :
                                        { $eq: query.cat }
                                }
                            ]
                        },
                        order: [
                            ['title', 'ASC'],
                        ],
                        raw: true
                    });
                    return resolve(books);
                }
                else if(query.sort == 'desc'){
                    const books = Book.findAll({
                        where: {
                            $and: [
                                {
                                    title: {
                                        $substring: query.name
                                    }
                                },
                                {
                                    categoryId: (query.cat == 0) ?
                                        { $ne: null } :
                                        { $eq: query.cat }
                                }
                            ]
                        },
                        order: [
                            ['title', 'DESC'],
                        ],
                        raw: true
                    });
                    return resolve(books);
                }
                else{
                    const books = Book.findAll({
                        where: {
                            $and: [
                                {
                                    title: {
                                        $substring: query.name
                                    }
                                },
                                {
                                    categoryId: (query.cat == 0) ?
                                        { $ne: null } :
                                        { $eq: query.cat }
                                }
                            ]
                        },
                        order: [
                            ['price', 'ASC'],
                        ],
                        raw: true
                    });
                    return resolve(books);
                }
            } catch (error) {
                return reject(error);
            }
        });
    }
}

module.exports = bookService;