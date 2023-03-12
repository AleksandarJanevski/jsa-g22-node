const getCalculator = async (req, res) => {
    try{
        let output = await prasTemplate('calculator_form', '');
        res.send(output);
    }catch(err){
        console.log(err);
        res.status(500).send('internal server error')
    }

} // praznite mesta da gi broi

const postCalculator =  async (req, res) => {
    console.log(req.body);
    if(req.body.a === '' || req.body.b === '') { //prvo mora sekogas da validirame podatoci 
       return res.status(400).send('bad request')
    }
    let result = ''
    switch(req.body.op) {
        case 'sobiranje':
            result = (`${Number(req.body.a) + Number(req.body.b)}`);
            break;
        case 'odzemanje':
            result = (`${Number(req.body.a) - Number(req.body.b)}`);
            break;
        case 'delenje':
            result = (`${Number(req.body.a) / Number(req.body.b)}`);
            break;
        case 'mnozenje':
            result = (`${Number(req.body.a) * Number(req.body.b)}`);
            break;
        default:
            result = (`nepoznat operator!`);
    }

    try{
        let output = await prasTemplate('calculator', result);
        res.send(output);
    }catch(err){
        console.log(err);
        res.status(500).send('internal server error')
    }
}

module.exports = {
    getCalculator,
    postCalculator
}