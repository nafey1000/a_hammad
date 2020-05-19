
//chunk 3
const nodemailer = require('nodemailer');

const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '303fdf3e59ab5bb6df85a50c880d1a0e-0a4b0c40-baf47bef',
        domain: 'sandbox8208f15d52a343028c1595afcccb9067.mailgun.org'
        
    }};
    
const transporter = nodemailer.createTransport(mailGun(auth));
  

//chunk 4

    const sendMail(email, subject, text, cb) => {

   const mailOptions = {
    to:'nafeysolutions@gmail.com',
    from: email,
    subject,
    text
  
};

transporter.sendMail(mailOptions,function(err,data){
    if(err)
        {cb(err,null);}
    else
       { cb(null,data);}
    
}); 
    }// end of sendMail


module.exports = sendMail;



