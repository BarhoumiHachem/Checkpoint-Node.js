var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hachem@gmail.com',
        pass: '123456'
    }
});

var mailOptions = {
    from: 'hachem@gmail.com',
    to: 'hachem-friend@outlook.com ',
    subject: 'Sending Email using Node.js',
    text: 'ay sikan ay sikan!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});