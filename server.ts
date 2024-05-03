Bun.serve({
  port: 3000,
  fetch: (request, server) => {
    const url = new URL(request.url);
    if (url.searchParams.get("name")) {
      return new Response(`Goodbye ${url.searchParams.get("name")}!`);
    } else {
      return new Response("Goodbye World");
    }
  },
});
