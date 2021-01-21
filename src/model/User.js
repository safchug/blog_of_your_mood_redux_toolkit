var {uid} = require('uid');
var bcrypt = require('bcryptjs');
var userService = require('../services/user');

class User {
    constructor(name, login, email, birthday) {
        this.id = uid(16);
        this.name = name;
        this.login = login;
        this.email = email;
        this.birthday = birthday;
    }

    static createUser(obj) {

        var newUser = new User();
        for(let key in obj)  {
            newUser[key] = obj[key];
        }

        return newUser;
    }

    async hashPass(pass) {
        const salt = await bcrypt.genSalt(8);
        this.hash = await bcrypt.hash(pass, salt);
    }

    async save() {
        //validation
        const userWithEmial = await User.getUserIfExist(this.email);
        if(userWithEmial) throw new Error('This email is already taken');

        const userWithLogin = await User.getUserIfLoginExist(this.login);
        if(userWithLogin) throw new Error('This login is already taken');

        return userService.saveUser(this);
    }

    static getUserIfExist(email) {
        return userService.getUserWithEmail(email);
    }

    static getUserIfLoginExist(login) {
        return userService.getUserWithLogin(login);
    }

    static verifyPass(pass, hash) {
        return bcrypt.compare(pass, hash);
    }
}

module.exports = User;