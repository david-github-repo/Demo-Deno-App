Deno.serve(async (request: Request) => {
  return new Response(`Hello world, its ${new Date().toLocaleString()}.`);
});
