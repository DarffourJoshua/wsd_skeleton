import { Hono } from "jsr:@hono/hono@4.6.5";

const app = new Hono;

app.get("/", c => {
    const op = c.req.query("operation");
    const num1 = c.req.query("number1")? Number(c.req.query("number1")) : Number(0);
    const num2 = c.req.query("number2")? Number(c.req.query("number2")) : Number(0);
    
    if (op === 'sum')   {
        return c.text(num1 + num2);
    } else if (op === 'difference') {
        return c.text(num1 - num2);
    }   else {
        return c.text("Invalid operation.");
    }
});

Deno.serve(app.fetch);
