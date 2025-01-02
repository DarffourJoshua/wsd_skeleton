import { Hono } from "jsr:@hono/hono@4.6.5";

const app = new Hono();

app.get("/", c => c.json({"hello": "world"}));

app.get("/secret/:secret", c => {
    const secret = c.req.param("secret");
    return c.json({"secret": secret});
});

app.get("/todos", c => c.json({
"todos": ["Deploy an application", "Learn Svelte", "Add client-server interaction"]
}));

Deno.serve(app.fetch);
