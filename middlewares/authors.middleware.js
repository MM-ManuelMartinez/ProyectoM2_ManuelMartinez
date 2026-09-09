const { findAuthorByEmail, getAuthorById } = require("../services/authors.service.js");

function validateAuthorId(req,res,next){
    const id = Number(req.params.id);
    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({error: "El id es incorrecto"});
    };
    next();
}

async function validateUserAuthor(req, res, next){
    try{
        const {name, email, bio} = req.body;
        if(!name || name.trim() === "" ){
            return res.status(400).json({
                error: "El nombre es obligatorio"
            });
        } else if(!email || email.trim() === ""){
            return res.status(400).json({
                error: "El email es obligatorio"
            });
        } 

        const validateEmail = await findAuthorByEmail(email);

        if(validateEmail.length !== 0 ){
            return res.status(400).json({
                error: "El email ya existe"
            });
        };

        next();
    } catch(error){
        next(error)
    }
};


async function validateUserUpdate(req, res, next){
    try{
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
        } 

        const validateAuthor = await getAuthorById(id);
        if(validateAuthor.length === 0){
            return res.status(404).json({error: "El author no existe"});
        };


        if(!name || name.trim() === "" ){
            return res.status(400).json({
                error: "El nombre es obligatorio"
            });
        } else if(!email || email.trim() === ""){
            return res.status(400).json({
                error: "El email es obligatorio"
            });
        };

        const validateEmail = await findAuthorByEmail(email);
        if(validateEmail.length !== 0 && validateEmail[0].id !== id){
            return res.status(400).json({
                error: "El email ya existe"
            });
        };

        next();
    } catch(error){
        next(error)
    }
};

async function validateUserDelete(req, res, next){
    try{
        const id = Number(req.params.id);
        if(!id){
            return res.status(400).json({
                error: "El id es incorrecto"}
            );
        } else if(!Number.isInteger(id) || id < 0){
            return res.status(400).json({
                error: "El id debe ser un numero entero y positivo"
            })
        }
        const validateAuthor = await getAuthorById(id);
        if(validateAuthor.length === 0){
            return res.status(404).json({error: "El author no existe"});
        }; 
        next();
    } catch(error){
        next(error)
    }
};




module.exports = {
    validateUserAuthor,
    validateUserUpdate,
    validateUserDelete,
    validateAuthorId
}