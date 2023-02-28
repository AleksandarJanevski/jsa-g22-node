//crud create read update delete

const studenti = [
    {ime: 'Bojan', prosek:7.5, grad: 'Skopje'},
    {ime: 'Pero', prosek:8.3, grad: 'Bitola'},
    {ime: 'Janko', prosek:6.9, grad: 'Bitola'},
    {ime: 'Vesna', prosek:9.2, grad: 'Skopje'},
    {ime: 'Elena', prosek:9.2, grad: 'Kumanovo'},
    {ime: 'Elena', prosek:9.2, grad: 'Tetovo'},
    {ime: 'Elena', prosek:9.2, grad: 'Ohrid'},
];

studenti.forEach(element => {
    console.log(element.ime);
});

let ocenki = studenti.reduce((acc, v) => {
    return acc + v.prosek
},0);

console.log(ocenki);

// studenti.sort((a, b) => {
//     return a.prosek-b.prosek;
// });

// studenti.sort((a, b) => {
//     if(a.prosek > b.prosek) return -1;
//     if(a.prosek < b.prosek) return 1;
//     return 0;
// })

// console.log(studenti);

studenti.sort((a, b) => {
    if(a.ime.toLowerCase() < b.ime.toLowerCase()) return 1;
    if(a.ime.toLowerCase() > b.ime.toLowerCase()) return -1;
    return 0;
})

console.log(studenti);

let studentiFilter = studenti.filter((s) =>{
    // return s.ime === 'Pero';
    // return s.ime.endsWith('o');
    return s.prosek < 8;
});

console.log(studentiFilter);

let studentiFind = studenti.find((s) => {
    return s.ime === "Pero";
});

console.log(studentiFind);

