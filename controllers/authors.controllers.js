let authors = [
    {
        id: 1,
        name: 'Ana García',
        email: 'ana@example.com',
        bio: 'Desarrolladora full-stack apasionada por Node.js'
    },
    {
        id: 2,
        name: 'Carlos Ruiz',
        email: 'carlos@example.com',
        bio: 'Escritor técnico especializado en bases de datos'
    },
    {
        id: 3,
        name: 'María López',
        email: 'maria@example.com',
        bio: 'Ingeniera de software con foco en APIs REST'
    }
];

const {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
} = require("../services/authors.service.js");

async function getAuthors(req,res){
    const result = await getAllAuthors();
    res.status(200).json(result);
};

async function getAuthor(req,res){
    const id = Number(req.params.id);
    const result = await getAuthorById(id);
    if(result.length === 0){
        return res.status(404).json({error: "El author no existe"});
    };
    res.status(200).json(result[0]);
};

async function createUserAuthor(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const bio = req.body.bio;
    const result = await createAuthor(name, email, bio);
    res.status(201).json(result); 
};

async function updateUserAuthor(req, res){
    const id = Number(req.params.id);
    const name = req.body.name;
    const email = req.body.email;
    const bio = req.body.bio;

    const result = await updateAuthor(name, email, bio, id);
    res.status(200).json(result);
};

async function deleteUserAuthor(req,res){
    const id = Number(req.params.id);
    const result = await deleteAuthor(id);
    res.status(204).send();
};


module.exports = {
    getAuthors,
    getAuthor,
    createUserAuthor,
    updateUserAuthor,
    deleteUserAuthor,
    authors
}