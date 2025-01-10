const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  return new Response(`Name: ${params.get("name")}`);
};

Deno.serve(handleRequest);
