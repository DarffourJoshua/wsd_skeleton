import { Hono } from "jsr:@hono/hono@4.6.5";

const app = new Hono();

app.post("/echo", async (c) => {
    const data = await c.req.json();
    return c.json(data);
});

app.post("/data", async (c) => {
    const res = await c.req.json();
    const data = res.data ?? "Missing data";
    return c.json({data});
});

app.post("/filter/:property", async (c) => {
    const property = c.req.param("property");
    const res = await c.req.json();
    const secret = res[property]
    return c.json({[property]: secret ?? "hello"})
});

Deno.serve(app.fetch);
