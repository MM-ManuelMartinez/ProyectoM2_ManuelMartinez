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


function getPosts(req,res){
    res.status(200).json(posts);
};

function getPost(req,res){
    const id = Number(req.params.id);
    const postSearched = posts.find(post => post.id === id);
    res.status(200).json(postSearched);
};

function getAuthorPosts(req,res){
    const id = Number(req.params.authorId);
    const postsSearched = posts.filter(post => post.author_id === id);
    res.status(200).json(postsSearched);
};

module.exports = {
    getPosts,
    getPost,
    getAuthorPosts,
    posts
};