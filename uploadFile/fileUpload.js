

const http=require('http');
const fs=require('fs');

const formidable=require('formidable');

//creating an upload form server

const server=http.createServer((req,res)=>{


    if(req.url=='/fileupload'){

      const form = new formidable.IncomingForm();
      form.parse(req,(err,fields,files)=>{
        

        const oldPath=files.FilesToUpload[0].filepath;
        const newPath='./'+ files.FilesToUpload[0].originalFilename;

        fs.rename(oldPath,newPath,(err)=>{
           
            if(err){
                console.log(err);
                return;
            }
            else{
                res.write("file uploaded and moved");
                res.end();
            }
        });
        

      });

    }
//when the form is uploaded and parsed it gets placed in the
//temp folder in the computer.

else{
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<form action="fileupload" method="post"  enctype="multipart/form-data">');
    res.write('<input type="file" name="FilesToUpload"><br>');
    res.write('<input type="submit" value="submit">');
    res.write('</form>');
    res.end();

}

});

server.listen(3000,()=>{
    console.log("Litening on server http://localhost:3000");
})


