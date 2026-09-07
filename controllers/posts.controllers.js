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

function newPost(req,res){
    const post = {
        id: posts.length + 1,
        title: req.body.title,
        content : req.body.content,
        author_id: req.body.author_id,
        published: req.body.published
    };
    posts.push(post);
    res.status(201).json(post)
};

function updatePost(req,res){
    const id = Number(req.params.id);
    const postSearched = posts.find(post => post.id === id);
    postSearched.title = req.body.title;
    postSearched.content = req.body.content;
    postSearched.author_id = req.body.author_id;
    postSearched.published = req.body.published;

    res.status(200).json(postSearched);
};

function deletePost(req, res) {
    const id = Number(req.params.id);
    const postIndex = posts.findIndex(post => post.id === id);

    posts.splice(postIndex, 1);

    res.status(204).send();
}

module.exports = {
    getPosts,
    getPost,
    getAuthorPosts,
    newPost,
    updatePost,
    deletePost,
    posts
};