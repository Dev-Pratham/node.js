
//create a server and read the file from the system

const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{


    fs.readFile('readsd.html',(err,data)=>{


        if(err){
        res.writeHead(404,{'content-type':'text/html'});//
        res.end('<h1> 404 Not Found</h1>');//

            // throw err;
            //the above code will stop the ececution entirely and throw the error in the terminal

            return;
 
            //if you dont use the return the below code will be executed and may cause to crash the server/
            //this will exit the callback without further execution 
            //however the program will still continue to execute

        }
     
        //incase of no error
        res.writeHead(200,{'content-type':'text/html'});
        res.end(data);

    })
    
});

server.listen(3000,()=>{
    console.log("http://localhost:3000");
});