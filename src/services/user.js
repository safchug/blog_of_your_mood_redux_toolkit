const getDb = require('../model');

module.exports = {
    async saveUser(obj) {
        const db = await getDb();

        return db.collection('users').insertOne(obj);
    },

    async getUserWithEmail(email) {
        const db = await getDb();

        return db.collection('users').findOne({email});
    },

    async getUserWithLogin(login) {
        const db = await getDb();

        return db.collection('users').findOne({login});
    },

    async getUserWithId(id) {
        const db = await getDb();

        return db.collection('users').findOne({id});
    }
}
