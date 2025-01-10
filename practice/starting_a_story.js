const handleRequest = (request) => {
    const url = new URL(request.url);
    const params = url.searchParams;
  
    if(params.has("title") && params.has("name"))    {
        return new Response(`Once upon a time, there was a ${params.get("title")} called ${params.get("name")}.`);
    } else if (params.has("title"))  {
        return new Response(`Once upon a time, there was a ${params.get("title")} called Tove.`);
    } else if(params.has("name")) {
        return new Response(`Once upon a time, there was a princess called ${params.get("name")}.`);
    }   else {
        return new Response(`Once upon a time, there was a princess called Tove.`);
  }
};

Deno.serve(handleRequest);
