const { test } = require("node:test");

const  assert  = require("node:assert");

const  request  = require("supertest");

const app = require("../app");

test("Obtener Posts", async () => {
    const response = await request(app).get("/posts");
    assert.strictEqual(response.status, 200)
});

test("Obtener Post", async () => {
    const response = await request(app).get("/posts/2");
    assert.strictEqual(response.status, 200)
});

test("Obtener Post inexistente", async () => {
    const response = await request(app).get("/posts/999");
    assert.strictEqual(response.status, 404)
});

test("Crear Post", async () => {
    const response = await request(app)
    .post("/posts")
    .send({
        title: "Como crear un test",
        content: "Guía básica para crear y ejecutar tests en una API REST",
        author_id: 1,
        published: false
    });
    assert.strictEqual(response.status, 201)
});
