// controllers/usersController.js
const usersStorage = require('../storages/usersStorage');
const { body, validationResult } = require('express-validator');

const alphaErr = 'must only contain letters.';
const lengthErr = 'must be between 1 and 10 characters.';
const bioLengthErr = 'must be between 1 and 200 characters.';
const ageErr = 'Age must be an integer between 18 and 120';

const validateUser = [
  body('firstName')
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body('lastName')
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
  body('email').trim().isEmail(),
  body('age')
    .optional({ checkFalsy: true })
    .trim()
    .isInt({ min: 18, max: 120 })
    .withMessage(ageErr),
  body('bio')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage(`Bio ${bioLengthErr}`),
];

exports.usersListGet = (req, res) => {
  console.log('here');
  const query = req.query.query;
  const users = query
    ? usersStorage.queryUsers(query)
    : usersStorage.getUsers();
  res.render('index', {
    title: 'User list',
    users: users,
  });
};

exports.usersCreateGet = (req, res) => {
  const errors = validationResult(req);
  res.render('createUser', {
    title: 'Create user',
  });
};

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      const user = req.body;
      console.log(user);
      return res.status(400).render('createUser', {
        title: 'Create User',
        errors: errors.array(),
        user: user,
      });
    }
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect('/');
  },
];

exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  if (!user) res.redirect('/');
  res.render('updateUser', {
    title: 'Update user',
    user: user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).render('updateUser', {
        title: 'Update user',
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.updateUser(req.params.id, {
      firstName,
      lastName,
      email,
      age,
      bio,
    });
    res.redirect('/');
  },
];

exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect('/');
};
