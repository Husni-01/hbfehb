const http = require('http');

const server =http.createServer((req, res) => {
    console.log("request made");
    console.log(req.url)
    console.log(req.method)

    res.setHeader('Content-Type','text/plain ' );  
    res.write('Subscripe to my channel');
    res.end();
});


server.listen(3000, 'localhost', () => {
    console.log("listening for requests on port 3000");
})