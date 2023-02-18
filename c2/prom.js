const fs = require('fs'); // go vcituvame paket/moduli za rabota so file system - fajlovi i direktoriumi

// fs.writeFile('data.txt',  //fajlot
// 'Hello World.........NODE.....:(', // text sto ke bide zapisano 
// (err) => { // funkcija koja ke se izvrsi otkako koga ke se zavrsi zapisot
//     if(err) return console.log(err);
//     console.log('zapisot e napraven');
// })

fs.writeFile('data.txt','Hello World.........NODE.....:(', (err) => { 
    if(err) return console.log(err);
    console.log('zapisot e napraven');
});

//PROMISE

//cekor 1
// const fileWrite = () =>{

// }

// cekor2 
// const fileWrite = () =>{
//     return new Promise();
// }

// cekor3 
// const fileWrite = () =>{
//     return new Promise(()=>{

//     });
// }


// cekor4
// const fileWrite = () =>{
//     return new Promise((success,fail)=>{
        
//     });
// }

// cekor5
// const fileWrite = () =>{
//     return new Promise((success,fail)=>{
//         fs.writeFile('data.txt','Hello World.........NODE.....:(', (err) => { 
//             if(err) return console.log(err);
//             console.log('zapisot e napraven');
//         });
//     });
// }

// cekor6
// const fileWrite = () =>{
//     return new Promise((success,fail)=>{
//         fs.writeFile('data.txt','Hello World.........NODE.....:(', (err) => { 
//             if(err) return fail(err)
//             return success();
//         });
//     });
// }

// cekor7
const fileWrite = (filename,data) =>{
    return new Promise((success,fail)=>{
        fs.writeFile(filename,data, (err) => { 
            if(err) return fail(err)
            return success();
        });
    });
};

// fileWrite('data1.txt','Nov file so zapis od promise')
// .then(()=>{
//     console.log('zapisot e uspesen, vo noviot file');
// })
// .catch(err=>{
//     console.log(err);
// })

// (async () =>{
//     try{
//         await fileWrite('data1.txt','Nov file so zapis od promise')
//     }
//     catch(err){
//         console.log(err);
//     }
// })(); //koga e vo root

const main = async () =>{
    try{
        await fileWrite('data3.txt','Nov3 file so zapis od promise')
    }
    catch(err){
        console.log(err);
    }
}
main()