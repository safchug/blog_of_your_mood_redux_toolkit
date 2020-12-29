const userService = require('../services/user');
const jwt = require('../utils/token');

module.exports = async (req, res, next) => {
    try {
        const id = jwt.verifyToken(req);
        req.user = await userService.getUserWithId(id);
        next();
    } catch (err) {
        next(err);
    }
}