const {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
} = require("../services/authors.service.js");

async function getAuthors(req, res, next){
    try{
        const result = await getAllAuthors();
        res.status(200).json(result);
    } catch (error){
        next(error)
    }
};

async function getAuthor(req, res, next){
    try{
        const id = Number(req.params.id);
        const result = await getAuthorById(id);
        if(result.length === 0){
            return res.status(404).json({error: "El author no existe"});
        };
        res.status(200).json(result[0]);
    } catch(error){
        next(error)
    }
};

async function createUserAuthor(req, res, next){
    try{
        const { name, email, bio } = req.body;
        const result = await createAuthor(name, email, bio);
        res.status(201).json(result); 
    } catch(error){
        next(error)
    }  
};

async function updateUserAuthor(req, res, next){
    try{
        const { name, email, bio } = req.body;
        const id = Number(req.params.id);
        const result = await updateAuthor(name, email, bio, id);
        res.status(200).json(result);
    } catch(error){
        next(error)
    }
};

async function deleteUserAuthor(req, res, next){
    try{
        const id = Number(req.params.id);
        const result = await deleteAuthor(id);
        res.status(204).send();
    } catch(error){
        next(error)
    } 
};


module.exports = {
    getAuthors,
    getAuthor,
    createUserAuthor,
    updateUserAuthor,
    deleteUserAuthor
};