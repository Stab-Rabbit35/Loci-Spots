const db = require('../models/restaurantModel');

const userController = {};

userController.addUser = async (req, res, next) => {
    console.log('in addUser');
    try {
        const {username, name, password} = req.body;
        const queryString = `
        INSERT INTO users (username,name,password)
        VALUES ( $1, $2, $3 );
        `
        const params = [username, name, password];
        const result = await db.query(queryString, params);
        return next();
    } 
    catch (err) {
      return next({
        log: 'Error in userController.addUser: ' + err,
        message: { err: err },
        });
    }
}

userController.validateUser = async (req, res, next) => {
    console.log('in validate user');
    console.log('req body', req.body)

    try {
        const { username, password } = req.body;
        const queryString = `
        SELECT username, password FROM users 
        WHERE username = '${username}'
        AND password = '${password}';
        `
        const result = await db.query(queryString);
        console.log('result in userController validate user', result);
        return next();
    }
    catch (err) {
        return next({
            log: 'Error in userController.validateUser: ' + err,
            message: { err: err },
        });
    }

}

module.exports = userController;