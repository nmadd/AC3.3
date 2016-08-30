## http module
The `http` module lets you interact with the web. In other words, it lets you do things like make requests to websites and get back code and/or data in return, and create a simple web server to host your own web apps.

Here is an example of a simple server built using the `http` module:

```js
var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello!</h1><p>You asked for <code>" +
                 request.url + "</code></p>");
  response.end();
});
server.listen(8000);
```
