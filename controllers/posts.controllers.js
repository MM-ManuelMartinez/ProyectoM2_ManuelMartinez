const { 
    getAllPosts,
    getPostById,
    getPostsByAuthor,
    createPost,
    updatePostById,
    deleteById
} = require("../services/posts.service.js");

async function getPosts(req, res, next){
    try{
        const result = await getAllPosts();
        res.status(200).json(result);
    } catch(error){
        next(error)
    }
};

async function getPost(req, res, next){
    try{
        const id = Number(req.params.id);
        const result = await getPostById(id);
        res.status(200).json(result[0]);
    } catch(error){
        next(error)
    }  
};

async function getAuthorPosts(req, res, next){
    try{
        const id = Number(req.params.authorId);
        const result = await getPostsByAuthor(id);
        res.status(200).json(result);
    } catch(error){
        next(error)
    }   
};

async function newPost(req, res, next){
    try{
        const { title, content, author_id, published } = req.body;
        const result = await createPost(title, content, author_id, published);
        res.status(201).json(result);
    } catch(error){
        next(error)
    }
};

async function updatePost(req, res, next){
    try{
        const { title, content, author_id, published } = req.body;
        const id = Number(req.params.id);
        const result = await updatePostById(title, content, author_id, published, id);
        res.status(200).json(result);
    } catch(error){
        next(error)
    }
};

async function deletePost(req, res, next) {
    try{
        const id = Number(req.params.id);
        const result = await deleteById(id);
        res.status(204).send();
    } catch(error){
        next(error)
    } 
};

module.exports = {
    getPosts,
    getPost,
    getAuthorPosts,
    newPost,
    updatePost,
    deletePost
};