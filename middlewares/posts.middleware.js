const {posts} = require("../controllers/posts.controllers.js")

function validatePost(req,res,next){
    const id = Number(req.params.id);
    if(!id || !Number.isInteger(id) || id < 0){
        return res.status(400).json({
            error: "El id es incorrecto"}
        );
    };

    const postSearched = posts.find(post => post.id === id);
    if(!postSearched){
        return res.status(404).json({
            error: "El post no existe"
        });
    };
    next();
};

module.exports = {
    validatePost
}