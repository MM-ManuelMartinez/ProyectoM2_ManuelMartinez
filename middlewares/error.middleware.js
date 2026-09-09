function errorHandler(error,req,res,next){
    res.status(500).json({
        error: "No se puede realizar la operación"
    })
};

module.exports = {
    errorHandler
};