const User = require('../model/User');
const jwt = require('../utils/token');

const register = async (req, res, next) => {
    try {
        let {name, password, email, birthday} = req.body;

        let user = new User(name, email, birthday);

        await user.hashPass(password);
        await user.save();
        res.status(201).json({message: 'The user has been registred'});
    } catch (err) {
        next(err);
    }
}

const login = async (req, res, next) => {
    try {
        console.log('Login start');
        const { email, password} = req.body;

        const user = await User.getUserIfExist(email);
        if (!user) throw new Error('This user doesn`t exist');
        const isVerified = await User.verifyPass(password, user.hash);
        if(!isVerified) throw new Error('The pasword doesn`t match');
        const token = jwt.createAccessToken(user.id);
        const userInfo = {emial: user.email, name: user.name, id: user.id, birthday: user.birthday};

        res.json({token, userInfo});
    } catch (err) {
        next(err);
    }
}

module.exports = { register, login }