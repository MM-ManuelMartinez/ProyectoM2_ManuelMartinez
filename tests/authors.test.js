const { test } = require("node:test");

const  assert  = require("node:assert");

const  request  = require("supertest");

const app = require("../app");

test("Obtener Authors", async () => {
    const response = await request(app).get("/authors");
    assert.strictEqual(response.status, 200)
});

test("Obtener Author existente", async () => {
    const response = await request(app).get("/authors/2");
    assert.strictEqual(response.status, 200)
});

test("Obtener Author inexistente", async () => {
    const response = await request(app).get("/authors/999");
    assert.strictEqual(response.status, 404)
});

test("Crear Author", async () => {
    const email = `manu${Date.now()}@tests.com`;
    const response = await request(app)
    .post("/authors")
    .send({
        name: "Manuel",
        email: `${email}`,
        bio: "Tester de miniblogs"
    });
    assert.strictEqual(response.status, 201)
});
