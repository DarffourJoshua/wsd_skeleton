import { Hono } from "jsr:@hono/hono@4.6.5";

const app = new Hono();

app.get("/restaurants", c => c.text("Listing restaurants."));

app.post("/restaurants", c => c.text( "Adding a restaurant."));

app.get("/restaurants/:id", c => {
    const id = c.req.param("id")
    return c.text(`Showing restaurant with id ${id}.`);
});

app.get("/restaurants/:id/reviews", c => {
    const id = c.req.param("id");
    return c.text(`Listing reviews for restaurant with id ${id}.`)
})

app.post("/restaurants/:id/reviews", c => {
    const id = c.req.param("id");
    return c.text(`Adding a review for restaurant with id ${id}.`);
});

app.delete("/restaurants/:id/reviews/:rid", c => {
    const id = c.req.param("id");
    const rid = c.req.param("rid");
    return c.text(`Removing review ${rid} from restaurant with id ${id}.`);
});

Deno.serve(app.fetch);
