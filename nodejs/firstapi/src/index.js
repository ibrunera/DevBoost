const http = require('http');
const url = require('url');
const routes = require('./routes');

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);

  console.log(parsedUrl);

  console.log(
    `Request method: ${request.method} | Endpoint:${parsedUrl.pathname}`
  );

  const route = routes.find(
    (routeObj) =>
      routeObj.endpoint === parsedUrl.pathname &&
      routeObj.method === request.method
  );

  if (route) {
    request.query = parsedUrl.query;
    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/hmtl' });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});

server.listen(3000, () => {
  console.log('Servidor Rodando at http://localhost:3000');
});
