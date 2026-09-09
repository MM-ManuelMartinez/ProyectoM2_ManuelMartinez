const posts = [
    {
        id: 1,
        title: "Introducción a Node.js",
        content: "Contenido del post sobre Node.js",
        author_id: 1,
        published: true
    },
    {
        id: 2,
        title: "PostgreSQL vs MySQL",
        content: "Contenido del post sobre bases de datos",
        author_id: 2,
        published: true
    },
    {
        id: 3,
        title: "APIs RESTful",
        content: "Contenido del post sobre APIs REST",
        author_id: 1,
        published: true
    },
    {
        id: 4,
        title: "Manejo de errores en Express",
        content: "Contenido del post sobre manejo de errores",
        author_id: 3,
        published: false
    },
    {
        id: 5,
        title: "Async/Await explicado",
        content: "Contenido del post sobre programación asíncrona",
        author_id: 1,
        published: true
    }
];

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
    deletePost,
    posts
};