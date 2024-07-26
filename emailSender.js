import nodemailer from 'nodemailer';

const transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yekeen28hayzed10@gmail.com',
        pass: 'Allahisgreat1'
    }
});

// set up mail data 
const mailOptions = {
    from: 'yekeen28hayzed10@gmail.com',
    to: 'kinghayzed2810@gmail.com',
    subject: 'Testing and Testing',
    text: 'this is testing email from node js',
    html: '<h1> Hello Node!!!!</h1>\n'
};

transpoter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err);
    } 
    else {
        console.log(`Email sent: ${info.response}`);
    }   
}
);