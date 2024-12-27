const handleRequest = request => {
    const url = new URL(request.url);
    const params = url.searchParams;
    
    if (request.method === "GET" && url.pathname === "/")   {
        return new Response("Hi there!");
    }   else if(request.method === "GET" && url.pathname === "/congrats" && params.has("heroOfTheDay"))    {
        return new Response(`Congrats, ${params.get("heroOfTheDay")}!`)
    }   else if(request.method === "DIDNOT" && url.pathname === "/lol") {
        return new Response("What kind of tree fits in your hand? A palm tree.");
    }   else    {
        return new Response("Not here.");
    }
}

Deno.serve(handleRequest);
