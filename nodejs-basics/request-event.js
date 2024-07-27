const http = require('http');

/* const server = http.createServer((req,res) => {
    res.end("Hello World");
}); */

//Using Event Emitter API
const server = http.createServer();

server.on('request', (req,res) => {
    res.end("Welcome")
})

server.listen(3000)