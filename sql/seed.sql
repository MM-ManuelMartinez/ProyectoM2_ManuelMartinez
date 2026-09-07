INSERT INTO authors (name, email, bio)
VALUES
('Ana García', 'ana@example.com', 'Desarrolladora full-stack apasionada por Node.js'),
('Carlos Ruiz', 'carlos@example.com', 'Escritor técnico especializado en bases de datos'),
('María López', 'maria@example.com', 'Ingeniera de software con foco en APIs REST');

INSERT INTO posts (title, content, author_id, published)
VALUES
('Introducción a Node.js', 'Contenido del post sobre Node.js', 1, TRUE),
('PostgreSQL vs MySQL', 'Contenido del post sobre bases de datos', 2, TRUE),
('APIs RESTful', 'Contenido del post sobre APIs REST', 1, TRUE),
('Manejo de errores en Express', 'Contenido del post sobre manejo de errores', 3, FALSE),
('Async/Await explicado', 'Contenido del post sobre programación asíncrona', 1, TRUE);