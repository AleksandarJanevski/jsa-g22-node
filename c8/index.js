const express = require('express');
const fs = require('fs')
const calc = require('./controllers/calculator')

const app = express();

app.use(express.urlencoded({extended: true}));

const prasTemplate = async (template, data) => {
    return new Promise((success, fail) => {
        fs.readFile(`${__dirname}/views/${template}.html`,'utf8', (err, content) => {
            if(err) return fail(err);
            content = content.replace('{{data}}', data);
            return success(content);
        } )
    })
};

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server Started');
})