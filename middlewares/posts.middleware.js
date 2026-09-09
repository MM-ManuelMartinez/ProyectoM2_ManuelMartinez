const { getPostById } = require("../services/posts.service.js");
const { getAuthorById } = require("../services/authors.service.js")

async function validatePost(req ,res, next){
    try{
        const id = Number(req.params.id);
        if(!id || !Number.isInteger(id) || id < 0){
            return res.status(400).json({
                error: "El id es incorrecto"}
            );
        };

        const result = await getPostById(id);
        if(result.length === 0){
            return res.status(404).json({
                error: "El post no existe"
            });
        }

        next()
    } catch(error){
        next(error)
    }
};

async function validateAuthorPosts(req, res, next){
    try{
        const id = Number(req.params.authorId);
        if(!id || !Number.isInteger(id) || id < 0){
            return res.status(400).json({
                error: "El id es incorrecto"}
            );
        } 

        const validateAuthor = await getAuthorById(id);
        if(validateAuthor.length === 0){
            return res.status(404).json({
                error: "El author no existe"
            })
        };

        next();
    } catch(error){
        next(error)
    }
};

async function validateNewPost(req, res, next){
    try{
        const { title, content } = req.body;
        const id = Number(req.body.author_id);

        if(!title){
            return res.status(400).json({
                error: "El titulo es obligatorio"
            });
        } else if(!content){
            return res.status(400).json({
                error: "El contenido es obligatorio"
            });
        } else if(title.trim() === ""){
            return res.status(400).json({
                error: "El titulo esta vacio"
            });
        } else if(content.trim() === ""){
            return res.status(400).json({
                error: "El contenido esta vacio"
            });
        } else if(!id || !Number.isInteger(id) || id < 0){
            return res.status(400).json({
                error: "El id es incorrecto"
            });
        } 

        const validateAuthor = await getAuthorById(id);
        if(validateAuthor.length === 0){
            return res.status(404).json({
                error: "El author no existe"
            })
        };

        next();
    } catch(error){
        next(error)
    }
};

async function validateUpdatePost(req, res, next) {
    try{
        const id = Number(req.params.id);
        const { title, content, author_id, published } = req.body;
        const authorId = Number(author_id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                 error: "El id es incorrecto" 
                });

        } 

        const validatePost = await getPostById(id);
        if(validatePost.length === 0){
            return res.status(404).json({
                error: "El post no existe"
            });
        } 

        if (!title || title.trim() === "") {
            return res.status(400).json({
                 error: "El titulo es obligatorio" 
                });

        } else if (!content || content.trim() === "") {
            return res.status(400).json({
                 error: "El contenido es obligatorio" 
                });

        } else if (!Number.isInteger(authorId) || authorId <= 0) {
            return res.status(400).json({
                 error: "El author_id es incorrecto"
                });

        }

        const validateAuthor = await getAuthorById(authorId);
        if(validateAuthor.length === 0){
            return res.status(404).json({
                error: "El author no existe"
            })
        };

        if (typeof published !== "boolean") {
            return res.status(400).json({
                 error: "published debe ser booleano" 
            });
        }

        next();
    } catch(error){
        next(error)
    }
};

module.exports = {
    validatePost,
    validateAuthorPosts,
    validateNewPost,
    validateUpdatePost
};