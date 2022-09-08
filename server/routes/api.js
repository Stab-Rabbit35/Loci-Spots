const { ConstructionOutlined } = require('@mui/icons-material');
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');
/**
 * Import Controllers
 */

/**
 * ***COMMENTS***
 * POST REQUEST, add comment to database
 */
 router.post('/comment', commentController.addComment, (req, res) => {
  console.log('commentController.addComment: Success!!!');
  res.status(200).send('comment added!');
})

/**
 * GET REQUEST, return a list of comments about a restaurant by timestamp
 */
router.get('/comments/:restaurant', commentController.getComments, (req, res) => {
 console.log('commentController.getComments: Success!!!');
 res.status(200).json(res.locals.comments);
})


/**
 * ***USERS***
 * GET REQUEST, check if user exists in database
 */

 router.get('/login', userController.validateUser, (req, res) => {
  console.log('validateUser: Success!!!');
  res.status(200).send('user found!');
})

/**
 * POST REQUEST, create a new user to LociDB (signup)
 */
 router.post('/signup', userController.addUser, (req, res) => {
  console.log('addUser: Success!!!');
  res.status(200).send('User successfully added!');
});

/**
 * ***RESTAURANTS***
 * POST REQUESTS, create a new restaurant to LociDB
 */

 router.post('/', restaurantController.addRestaurant, (req, res) => {
  console.log('postResto: Success!!!');
  res.status(200).send('Restaurant successfully added!');
});


/**
 * 
 * GET REQUESTS, return list of restaurants by city
 */
router.get('/:city', restaurantController.getRestaurants, (req, res) => {
  console.log('getResto: Success!!!');
  res.status(200).json(res.locals.restaurants);
});



/**
 * PATCH REQUESTS, update votecount for a given resto_id
 */
router.patch('/', restaurantController.updateRestaurant, (req, res) => {
  console.log('updateResto: Success!!!');
  res.status(200).send('Restaurant vote registered!');
});

/**
 * DELETE REQUESTS, delete a restaurant for a given resto_id
 */
router.delete('/', restaurantController.deleteRestaurant, (req, res) => {
  console.log('deleteResto: Success!!!');
  res.status(200).send('Restaurant successfully deleted!');
});

module.exports = router;
