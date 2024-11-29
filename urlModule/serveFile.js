
//creating a node.js file that opens the requested file
//and return the content to the file is anything goes wrong
//throw a 404 error

const http=require('http');
const fs=require('fs');
const url=require('url');


const server=http.createServer((req,res)=>{
//The url.parse methods creats the object of the url with some properties
//like port number localhost and so on

    var q=url.parse(req.url);
    const fileName='.' + q.pathname;
//The dot resolve the file to the working directory so it`s important!!
    fs.readFile(fileName,(err,data)=>{

        if(err){
            
            res.writeHead(404,{'content-type':'text/html'});
            res.end("<h2>page not found</h2");
            return;

        }

           res.writeHead(200,{'content-type':'text/html'});
           res.end(data);
           return;

    })

});


server.listen(3000,()=>{

    console.log("Server running at http://localhost:3000")
})


// If a user accesses http://localhost:8080/index.html, then:

// q.pathname: /index.html (from the URL).
// filename: ./index.html.
// This resolves to /home/user/server/index.html because . points to /home/user/server/.



// Why is . Important Here?
// File Location Resolution: Without the .:

// var filename = q.pathname;
// The filename would become /index.html, which the operating system interprets 
//as an absolute path starting at the root directory of 
//the file system (e.g., /index.html at the root of your system, which likely doesn't exist).

// By using .:


// var filename = "." + q.pathname;
// The path becomes relative to the script's directory, 
//ensuring the server looks in the current directory for the requested file.

// Security: Using a relative path helps avoid accidental or unauthorized access
// to files outside the intended directory.

// Example in Practice:
// If your script is running in /home/user/server and your directory contains:

// arduino
// /home/user/server/
//     index.html
//     about.html
// And a client requests http://localhost:8080/about.html:

// q.pathname will be /about.html.
// filename becomes ./about.html.
// The script will try to read /home/user/server/about.html.
// Security Note:
// Be cautious when using user input to construct file paths. A malicious user could attempt a directory traversal attack by requesting a path like /../../etc/passwd. To prevent this:

// Validate and sanitize q.pathname.
// Consider using libraries like path in Node.js to safely resolve paths.
// For example:

// const path = require('path');
// const safePath = path.join(__dirname, q.pathname); // Ensures the path stays within the allowed directory.





