const handleRequest = (request) => {
    let message;
  let url = new URL(request.url);
  if(url.pathname === "/one")   {
   message = "yksi"
  } else if(url.pathname === "/two")  {
    message = "kaksi";
  } else {//if(url.pathname.includes(""))  {
    message = "pong";
  }
  return new Response(message);
};

Deno.serve(handleRequest)
