const { 
    getAllPosts,
    getPostById,
    getPostsByAuthor,
    createPost,
    updatePostById,
    deleteById
} = require("../services/posts.service.js");

async function getPosts(req,res){
    const result = await getAllPosts();
    res.status(200).json(result);
};

async function getPost(req,res){
    const id = Number(req.params.id);
    const result = await getPostById(id);
    res.status(200).json(result[0]);
};

async function getAuthorPosts(req,res){
    const id = Number(req.params.authorId);
    const result = await getPostsByAuthor(id);
    res.status(200).json(result);
};

async function newPost(req,res){
    const { title, content, author_id, published } = req.body;
    const result = await createPost(title, content, author_id, published);
    res.status(201).json(result);
};

async function updatePost(req,res){
    const { title, content, author_id, published } = req.body;
    const id = Number(req.params.id);
    const result = await updatePostById(title, content, author_id, published, id);
    res.status(200).json(result);
};

async function deletePost(req, res) {
    const id = Number(req.params.id);
    const result = await deleteById(id);
    res.status(204).send();
};

module.exports = {
    getPosts,
    getPost,
    getAuthorPosts,
    newPost,
    updatePost,
    deletePost
};