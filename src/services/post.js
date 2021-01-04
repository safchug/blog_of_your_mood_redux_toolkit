const getDb = require('../model');

module.exports = {
    async savePost(obj) {
        const db = await getDb();

        return db.collection('posts').insertOne(obj);
    },

    async getTheLastId() {
        const db = await getDb();

        let lastRecord = await db.collection('posts').find({}).limit(1).sort({id:-1}).toArray();
        return (lastRecord.length === 0)? 0: lastRecord[0].id;
    },

    async addComment(postId, comment) {

        const db = await getDb();

        const query = {id: Number.parseInt(postId)};

        const  newValues = { $push: { comments:  comment}};
        return db.collection('posts').updateOne(query, newValues);
    },

    async getPostsOnPage(page, elementsPerPage = 5) {


        const db = await getDb();

        const count = await db.collection('posts').count();

        let skipIndex = count - (page * elementsPerPage);

        if(skipIndex < 0) {
            elementsPerPage += skipIndex;

            console.log("skipIndex: " + skipIndex);
            skipIndex = 0;
        }


        return db.collection('posts').find().skip(skipIndex).limit(elementsPerPage).toArray();
    }
}