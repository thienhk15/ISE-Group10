const express = require("express");
const categoryService = require("../../services/category.service");
const userService = require("../../services/user.service");
const _ = require('lodash');
const fileService = require('../../services/file.service');
const path = require("path");
const appRoot = require('app-root-path');

const router = express.Router();


// Get user by Id
router.get('/profile', async (req, res) => {
  try {
    const success = req.query;
    const categories = await categoryService.getAllCategories();
    const id = req.cookies['user'].id;
    const user = await userService.getUserById(id);
    const message = _.isEmpty(success) ? null : {
      content: success ? 'Profile updated' : 'Update failed',
      alert: success ? 'success' : 'danger'
    }
    return res.render('customer/profile', { user, categories, message });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.post('/edit', async (req, res) => {
  try {
    const body = req.body;
    const { id, oldPassword, ...data } = body;
    await userService.updateUserById(id, data);
    return res.redirect('/customer/user/profile?success=true');
  } catch (error) {
    console.log(error);
    return res.redirect('/customer/user/profile?success=false');
  }
});

router.get('/:id/checkout', async (req, res) => {
  try {
    return res.render('customer/checkout');
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/updateAvatar', async (req, res) => {
  try {
    const uploadDir = path.join(appRoot.toString(), '/src/public/customers/img/themes/images/profile_pics');
    const options = {
      uploadDir: uploadDir,
      multiples: true,
      maxFileSize: 100 * 1024 * 1024,
      keepExtensions: true,
      filter: function ({ name, originalFilename, mimetype }) {
        return mimetype && mimetype.includes('image');
      }
    }
    const files = await fileService.saveFile(req, options);

    const userId = req.cookies['user'].id;
    const data = {
      avatarUrl: _.isEmpty(files) ? null : '/customers/img/themes/images/profile_pics/' + files.newFilename
    };
    const result = await userService.updateUserById(userId, data);
    return res.redirect('/customer/user/profile?success=true');
  } catch (error) {
    console.log(error);
    return res.redirect('/customer/user/profile?success=false');
  }
})

module.exports = router;