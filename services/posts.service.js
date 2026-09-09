const { pool } = require("../db/db.js");

async function getAllPosts(){
    const result = await pool.query(
        "SELECT * FROM posts"
    );
    return result.rows;
};

async function getPostById(id){
    const result = await pool.query(
        "SELECT * FROM posts WHERE id = $1",
        [id]
    );
    return result.rows;
};

async function getPostsByAuthor(authorId){
    const result = await pool.query(
        "SELECT * FROM posts WHERE author_id = $1",
        [authorId]
    );
    return result.rows;
};

async function createPost(title, content, author_id, published){
    const result = await pool.query(
        "INSERT INTO posts (title, content, author_id, published) VALUES ($1, $2, $3, $4) RETURNING * ",
        [title, content, author_id, published]
    );
    return result.rows[0];
};

async function updatePostById(title, content, author_id, published, id){
    const result = await pool.query(
        "UPDATE posts SET title=$1, content=$2, author_id=$3, published=$4 WHERE id = $5 RETURNING * ",
        [title, content, author_id, published, id]
    );
    return result.rows[0];
};

async function deleteById(id){
    const result = await pool.query(
        "DELETE FROM posts WHERE id = $1 RETURNING * ",
        [id]
    );
    return result.rows[0];
};

module.exports = {
    getAllPosts,
    getPostById,
    getPostsByAuthor,
    createPost,
    updatePostById,
    deleteById
};