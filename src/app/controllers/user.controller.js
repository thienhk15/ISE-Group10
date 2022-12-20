const express = require("express");
const userService = require("../../services/user.service");

const router = express.Router();


// Get user by Id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    return res.render('customer/profile', {user});
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/edit', async (req, res, next) => {
  try {
    const body = req.body;
    const { id, oldPassword, ...data } = body;
    await userService.updateUserById(id, data);
    return res.redirect('back');
  } catch (error) {
    return res.status(500).send(error);
  }
})

module.exports = router;