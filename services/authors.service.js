const { pool } = require("../db/db.js");

async function getAllAuthors(){
    const result = await pool.query("SELECT * FROM authors");
    return result.rows;
};

async function getAuthorById(id){
    const result= await pool.query(
        "SELECT * FROM authors WHERE id = $1",
        [id]
    );
    return result.rows;
}

module.exports = {
    getAllAuthors,
    getAuthorById
};