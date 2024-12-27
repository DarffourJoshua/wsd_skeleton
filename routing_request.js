import { Hono } from "jsr:@hono/hono@4.6.5";

const app = new Hono();

app.get("/", c => c.text("The starting point."));
app.post("/", c => c.text( "Postman pat."));
app.get("/it", c => c.text("I think so."));
app.on("CAT", "/secrets", c => c.text("Meow!"));
app.on("WHATS", "/up", c => c.text( "A movie!"));

Deno.serve(app.fetch);
