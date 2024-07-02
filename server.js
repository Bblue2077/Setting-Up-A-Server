const http = require('http');  // Import the http module from Node.js

// Create an HTTP server and define a response for all requests
const server = http.createServer((req, res) => {
    const url = req.url;  
    if (url === '/') {
        // HTML response for root route
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Welcome User!');
    } else if (url === '/api') {
        // JSON response for /api route
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello, this is the API route!' }));
    } else {
        // Page not found error response for all other routes
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Page Not Found');
    }
});

// Configure the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
console.log(`Server is listening on http://localhost:${PORT}`); 
});
