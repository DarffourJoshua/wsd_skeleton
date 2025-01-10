import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";

const app = new Hono();

app.use("/*", cors());
app.use("/*", logger());

app.get("/courses", c => c.json(
    {"courses": [ 
        {"id": 1, "name": "Web Software Development" }, 
        {"id": 2, "name": "Device-Agnostic Design" } 
        ] 
    }
));

app.get("/courses/:id", c => {
    const id = c.req.params("id");    
    return c.json({
        "course": {"id": id, "name": "Course Name"}
    });
});

app.post("/courses", async (c) => {
    const res = await c.req.json();
    const data = res.data ?? "Missing data";
    return c.json({
        "course": {"id": 3, "name": "Course Name" }
    });
});

app.get("/courses/:id/topics", c => {
    const id = c.req.params("id");
    return c.json({
        "topics": [
            {"id": 1, "name": "Topic 1"},
            {"id": 2, "name": "Topic 2"}
        ]
    });
});

app.get("/courses/:cId/topics/:tId/posts", c => {
    const cId = c.req.params("cId");
    const tId = c.req.params("tId");
    return c.json({
        "posts": [
            {"id": 1, "title": "Post 1"},
            {"id": 2, "title": "Post 2"}
        ]
    });
});

app.get("/courses/:cId/topics/:tId/posts/:pId", c => {
    const cId = c.req.params("cId");
    const tId = c.req.params("tId");
    const pId = c.req.params("pId");
    return c.json({
        "post": {"id": pId, "title": "Post Title" }, 
        "answers": [ 
            { "id": 1, "content": "Answer 1" }, 
            {"id": 2, "content": "Answer 2" } 
        ]
    })
})

export default app;
