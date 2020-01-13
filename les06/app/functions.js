//function declaration

console.log(nam(1,2,3,4,5,6,7,8,9,90));

function nam(el, i = 0){
    console.log(arguments);
    return el + i * 2;
}

// console.log(nana);
// console.log(nana(22,33));
//function expression
const nana = function(one, two){
    return one + two;
}
