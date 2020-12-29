module.exports = function(err, req, res, next) {
    console.log(err);
    if(err.message.includes('taken')) {
        res.status(409).json({message: err.message});
    }

        res.status(500).json({err: err});
}