

//basic usage example

const fs = require('fs');

const stream = fs.createReadStream('example.txt', { encoding: 'utf8' });

stream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

stream.on('end', () => {
  console.log('Finished reading file.');
});

stream.on('error', (err) => {
  console.error('Error reading file:', err.message);
});


//Reading Part of a File

const fs = require('fs');

const stream2 = fs.createReadStream('example.txt', { start: 0, end: 100 });

stream2.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

stream2.on('end', () => {
  console.log('Finished reading part of the file.');
});


//piping into another file
const fs = require('fs');

const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('destination.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('File copied successfully.');
});


//piping into html response
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const stream = fs.createReadStream('example.txt');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  stream.pipe(res);
}).listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

