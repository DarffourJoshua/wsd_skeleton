import { Hono } from "jsr:@hono/hono@4.6.5";

const app = new Hono();

app.get("/", c => c.text("Hello Hono!"));

Deno.serve(app.fetch);
