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

function obtenerAuthors(req,res){
    res.status(200).json(authors);
}

function obtenerAuthor(req,res){
    const id = Number(req.params.id);
    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({error: "El id es incorrecto"});
    }
    const author = authors.find(author => author.id === id);
    if(!author){
        return res.status(404).json({error: "El author no existe"});
    }
    res.status(200).json(author);
}












module.exports = {
    obtenerAuthors,
    obtenerAuthor
}