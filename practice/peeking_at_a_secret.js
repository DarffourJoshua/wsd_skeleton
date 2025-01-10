const handleRequest = (request) => {
    const url = new URL(request.url);
    const params = url.searchParams;
    
    if(request.method==="PEEK" && url.pathname==="/secret")	{
    	return new Response("Peeking at secret data...");
    }
    return new Response('There is nothing to see here...');
}

Deno.serve(handleRequest);
