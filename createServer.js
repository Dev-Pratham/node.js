

const http=require('http');

const server=http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'text/html'});
    res.end('Hi backend dev');

});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
  });