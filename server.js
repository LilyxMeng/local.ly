const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made');

    // set header content type
   // res.setHeader('Content.Type', 'text/plain');

   // res.write('hello world!');
    //res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

