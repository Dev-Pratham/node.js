const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

const server = http.createServer((req, res) => {
  if (req.url === '/fileupload' && req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log("Error parsing form:", err);
        res.writeHead(500, { 'content-type': 'text/html' });
        res.write("Server error occurred while parsing the form.");
        res.end();
        return;
      }

      console.log("Files object:", files); // Debug output to check the file structure

      if (!files.FilesToUpload || files.FilesToUpload.length === 0) {
        console.log("No file was uploaded.");
        res.writeHead(400, { 'content-type': 'text/html' });
        res.write("No file uploaded.");
        res.end();
        return;
      }

      // Access the first file in the array
      const file = files.FilesToUpload[0];
      const oldPath = file.filepath;

      if (!oldPath) {
        console.log("Old path is undefined.");
        res.writeHead(500, { 'content-type': 'text/html' });
        res.write("Server error: file path is undefined.");
        res.end();
        return;
      }

      const newPath = './' + file.originalFilename;

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.log("Error moving file:", err);
          res.writeHead(500, { 'content-type': 'text/html' });
          res.write("Error moving file.");
          res.end();
          return;
        }

        res.writeHead(200, { 'content-type': 'text/html' });
        res.write("File uploaded and moved successfully.");
        res.end();
      });
    });
  } else {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="FilesToUpload"><br>');
    res.write('<input type="submit" value="submit">');
    res.write('</form>');
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Listening on server http://localhost:3000");
});


//check out node 4.js in chatgpt for detailed explaination
//the thing was that files to upload was an array of files
//so even if we create load only one file we have to specify
//the index of it 