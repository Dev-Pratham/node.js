

//This server is used to send mail using app password 

const nodemailer=require('nodemailer');


const transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user : 'pratham.chaurasiya31@gmail.com',
        pass: 'voyxjhcjrpkumqoa'
    }

});

let mailOptions = {

     from: 'pratham.chaurasiya31@gmail.com',
     to: 'pratham.chaurasia31@gmail.com',    //for more mail options use the , inside to attribute
     subject:'Sending Emaill using Node.js',
     text:'This is the easy way!'
     //can also send html 
    //  html: '<h1>Welcome</h1><p>That was easy!</p>'

};

transporter.sendMail(mailOptions,(err,info)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log('Email sent: ' + info.response);
    }

})

//on