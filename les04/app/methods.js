const arr = [1,33,6565,9,22,5454,67857,23];
let s = 0;
// arr.forEach(function(el, i, link){
//     s += el;
//     console.log(link, i, el);
// });

// arr.forEach(el => s += el);


// const nArr = arr.map(function(el, i, link){
//     return el / 2;
// });
// const nArr = arr.map(el => el / 2);

// const chArr = arr.filter(isEven);

s = arr.reduce(function(sum, el){
    return sum + el;
}, 1000000);


console.log(s);

function isEven(el){
    return el % 2 == 0;
}