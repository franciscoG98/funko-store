const server = require('express').Router();
const nodemailer = require("nodemailer");
const fs = require("fs")


server.post("/",  (req, res) => {
    const {name, products, quantity, total, email} = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: "funkostorehenry@gmail.com",
            pass: "loprobemo"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var html = fs.readFileSync(__dirname + "/views/index.html", "utf-8")
    html = html.replace("{name}", name).replace("{quantity}", quantity).replace("{products}", products).replace("{total}", total)

    let mailOptions = {
        from: 'funkostorehenry@gmail.com', 

        to: email,  //Colocar su email para ver los cambios de estilos en el html, probar con postman con los campos que pide de req.body
        // to: "franciscomanuel.gonzalez3@gmail.com", 
        // to: "julicheruse@hotmail.com",
        subject: 'Confirmacion de compra',
        text: 'Confirmacion de compra',
        html: html
    }

    transporter.sendMail(mailOptions,  (err, data) => {
        if (err) {
            return res.send(err.message);
        }
        return  res.send('Email sent!!!');
    });
})



module.exports = server;