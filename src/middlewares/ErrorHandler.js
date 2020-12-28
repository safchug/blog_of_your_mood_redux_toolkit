module.exports = function(err, req, res, next) {
    if(err.message.includes('taken')) {
        res.status(409).json({message: err.message});
    }

        res.status(500).json({message: 'Something went wrong'});
}