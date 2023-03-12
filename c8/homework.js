const express = require('express')

const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/ime/:ime', (req, res) => {
    let name = req.params.ime.toLowerCase();
    let paren = name.length % 2 === 0;
    let brojac = 0

    const samoglaski = ["a", "e", "i", "o", "u"];
    for(let bukva of name){
        if(samoglaski.includes(bukva)){
            brojac++;
        }
    }
});

app.post('/ime', (req, res) => {

});

app.listen(10000, (err) => {
    if(err) return console.log(err);
    console.log("Server successfully started at port 10000");
})