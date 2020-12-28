const getDb = require('../model');
const bcrypt = require('bcryptjs');

module.exports = {
    async saveUser(obj) {
        const db = await getDb();

        return db.collection('users').insertOne(obj);
    },

    async getUserWithEmail(email) {
        const db = await getDb();

        return db.collection('users').findOne({email});
    }
}
