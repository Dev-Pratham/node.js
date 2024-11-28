


const fs=require('fs');

    fs.appendFile('demo.txt','node js',(err)=>{

        if(err) throw err;
        console.log("The data to the file was appended");


    }

    );

//if the file does not exists it will create the file and append the data
//to it