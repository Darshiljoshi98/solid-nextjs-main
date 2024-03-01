var nodemailer = require("nodemailer");
export async function sendMail(username,email,phone,subject,message) {
    debugger
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'darshil2015@gmail.com',
      pass: 'mizj zpab snmh bnip',
    },
  });


  var mailOptions = {
    from: 'darshil2015@gmail.com',
    to: 'darshiljoshi8@gmail.com',
    subject: 'New inquiry From Contacyt us Form',   
    text: `Hello,Darshil`,
    html: `<p>    
    You recently Recived New Request.
    <h1>Name: ${username}</H1>
    <h1>email: ${email}</H1>
    <h1>phone: ${phone}</H1>
    <h1>subject: ${subject}</H1>
    <h1>message: ${message}</H1>   
    
    Thanks, the Be Digital team</p>`
  };

  transporter.sendMail(mailOptions, function (error, info) {

    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}



