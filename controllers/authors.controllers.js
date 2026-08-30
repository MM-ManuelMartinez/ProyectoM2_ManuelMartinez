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

module.exports = {
    obtenerAuthors
}