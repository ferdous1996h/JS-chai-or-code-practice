const DC_Heros=["Superman","batman","Flash"]
const Marvel_Heros = ["Spiderman", "Antman", "Ironman"]
// DC_Heros.push(Marvel_Heros);
// console.log(DC_Heros);
// console.log(DC_Heros[3][1]);

const comsp=DC_Heros.concat(Marvel_Heros);
console.log(comsp);

const allele = [...DC_Heros, ...Marvel_Heros]
console.log(allele);


const anotherarr = [1, 2, 3, [5, 6, 8], 9, 7, [5, 4, 3, 2, [1, 4, 5, 8]]]
const realanother = anotherarr.flat(1);
console.log(realanother);

console.log(Array.isArray("Ferdous"));
console.log(Array.from("Ferdous"));
console.log(Array.from({Name:"Ferdous"}));
