const minPr = 100,
    maxPr = 1000;

let profits = [],
    len = 12,
    min = maxPr + 1,
    max = minPr - 1;


for(let i = 0; i < len; i++){
    profits[i] = Math.floor(Math.random() * (maxPr - minPr) + minPr);
    min = profits[i] < min? profits[i]: min;
    max = profits[i] > max? profits[i]: max;
}

// console.log(profits);
console.log(min);
console.log(max);

let benefits = profits;
benefits[0] = 'Охохо';

console.log(profits);
console.log(benefits);