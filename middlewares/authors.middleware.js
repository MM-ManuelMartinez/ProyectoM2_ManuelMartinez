const {authors} = require("../controllers/authors.controllers.js");

function validateUserAuthor(req, res, next){
    const {name, email, bio} = req.body;
    if(!name || name.trim() === "" ){
        return res.status(400).json({
            error: "El nombre es obligatorio"
        });
    } else if(!email || email.trim() === ""){
        return res.status(400).json({
            error: "El email es obligatorio"
        });
    } else if(authors.some(author => author.email === email)){
        return res.status(400).json({
            error: "El email ya existe"
        });
    };
    next();
}

module.exports = {
    validateUserAuthor
}