const db = require('../models/restaurantModel');

const commentController = {};

commentController.addComment = async (req, res, next) => {
    console.log('in addComment');
    try {
        // const {username, name, password} = req.body;
        const queryString = `
        INSERT INTO comments (user_id, resto_id, comment)
        VALUES ( $1, $2, $3, $4);
        `
        const params = [user_id, resto_id, comment]; //add in the correct names based on Rami's code
        const result = await db.query(queryString, params);
        return next();
    } 
    catch (err) {
      return next({
        log: 'Error in commentController.addComment: ' + err,
        message: { err: err },
        });
    }

}

commentController.getComments = async (req, res, next) => {
    console.log('in getComments');
    try {
        const queryString = `
        SELECT * FROM restos 
        WHERE resto_id=$1
        ORDER BY time DESC`;

        const params = [req.params];
        console.log('params in getComments', params);
        const result = await db.query(queryString, params);

        console.log(result);

        res.locals.comments = result;
    }
    catch (err) {
        return next({
          log: 'Error in commentController.getComments: ' + err,
          message: { err: err },
          });
      }
}



module.exports = commentController;