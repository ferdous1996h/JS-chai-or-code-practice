// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toUTCString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleString());
// console.log(mydate.getTimezoneOffset());


// let myassume = new Date(2021,0,11,5,3)
// console.log(myassume.toLocaleString());
// let myassume = new Date("01-13-2023")
// console.log(myassume.toString());


let datetest = new Date()
console.log(datetest);
console.log(datetest.getMonth());
console.log(datetest.getDay());
console.log(datetest.getFullYear());
console.log(`${datetest.getMonth()} became the bad memory for us`);

console.log(
  datetest.toLocaleString('Default', {
    minute: 'numeric',
    second: '2-digit',
  })
);