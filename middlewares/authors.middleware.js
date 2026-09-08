const { authors } = require("../controllers/authors.controllers.js");

function validateAuthorId(req,res,next){
    const id = Number(req.params.id);
    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({error: "El id es incorrecto"});
    };
    next();
}

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
};


function validateUserUpdate(req, res, next){
    const id = Number(req.params.id);
    const { name, email, bio } = req.body;

    if(!id){
        return res.status(400).json({
            error: "El id es incorrecto"}
        );
    } else if(!Number.isInteger(id) || id < 0){
        return res.status(400).json({
            error: "El id debe ser un numero entero y positivo"
        })
    } else if(!authors.some(author=> author.id === id)){
         return res.status(404).json({
            error: "El author no existe"
        })
    };


    if(!name || name.trim() === "" ){
        return res.status(400).json({
            error: "El nombre es obligatorio"
        });
    } else if(!email || email.trim() === ""){
        return res.status(400).json({
            error: "El email es obligatorio"
        });
    }
    
    const validateEmail = authors.some(author=> author.id !== id && author.email === email);
    
    if(validateEmail){
        return res.status(400).json({
            error: "El email ya existe"
        });
    };

    next()
}

function validateUserDelete(req, res, next){
    const id = Number(req.params.id);
    if(!id){
        return res.status(400).json({
            error: "El id es incorrecto"}
        );
    } else if(!Number.isInteger(id) || id < 0){
        return res.status(400).json({
            error: "El id debe ser un numero entero y positivo"
        })
    } else if(!authors.some(author=> author.id === id)){
         return res.status(404).json({
            error: "El author no existe"
        })
    }; 
    next();
}




module.exports = {
    validateUserAuthor,
    validateUserUpdate,
    validateUserDelete,
    validateAuthorId
}