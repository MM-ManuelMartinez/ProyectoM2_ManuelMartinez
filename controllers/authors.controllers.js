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


function getAuthors(req,res){
    res.status(200).json(authors);
}

function getAuthor(req,res){
    const id = Number(req.params.id);
    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({error: "El id es incorrecto"});
    }
    const author = authors.find(author => author.id === id);
    if(!author){
        return res.status(404).json({error: "El author no existe"});
    }
    res.status(200).json(author);
};

function createUserAuthor(req,res){
    const newUser = {
        id: authors.length + 1,
        name: req.body.name,
        email: req.body.email,
        bio: req.body.bio
    };
    authors.push(newUser);
    res.status(201).json(newUser);
};

function updateUserAuthor(req, res){
    const id = Number(req.params.id);
    const author = authors.find(author => author.id === id);
    author.name = req.body.name;
    author.email = req.body.email;
    author.bio = req.body.bio;

    res.status(200).json(author);
};

function deleteUserAuthor(req,res){
    const id = Number(req.params.id);
    const userIndex = authors.findIndex(author => author.id === id);
    const userName = authors[userIndex].name;
    authors.splice(userIndex,1);
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