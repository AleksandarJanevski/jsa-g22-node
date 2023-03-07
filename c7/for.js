let studenti = [
  { ime: "Pero", prezime: "Perovski", prosek: 8.3 },
  { ime: "Ivan", prezime: "Ivankovski", prosek: 6.3 },
  { ime: "Jank", prezime: "Jankovski", prosek: 2.3 },
];

// for (let i = 0; i < studenti.length; i++) {
//   console.log(studenti[i].prezime);
// }

// let bukvi = "abcde";

// for (let y = 0; y < bukvi.length; y++) {
//   console.log(bukvi[y]);
// }

// let niza = ["new york", "los angeles", "paris", "berlin", "barcelona"];

// for (let g = 0; g < niza.length; g++) {
//   console.log(niza[g]);
// }

for (let s in studenti) {
  // s e indeksot
  console.log(s);
}

for (let o of studenti) {
  // o e elementot
  console.log(o);
}
