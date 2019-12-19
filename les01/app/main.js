// let a = {name: 'Nick',
//     toString: ()=>'Ахаха, не ожидал?'};
// console.log(a.toString());
// console.dir(console);
// console.info('Hell!');
// // console.clear();
// // console.error('Hell!!!');
// // console.timeStamp('Hohohoh');

//Console - output
//alert
// alert('Всплівающее сообщение');

//Типі данніх
//Строковіе String
let str1 = "Na'me",
    str2 = 'Name name name',
    str3 = "234n2343#$#$@#@$#54*&*(*(32kjsdfkl jasdfkajsd fasdkljf",
    str4 = '',
    str5 = '44',
    str6 = `My name is: ${str1}. My salary is: ${44 / 0}`;//template strings
//Числовіе Number
let n1 = 2,
    n2 = 33.22,
    n3 = 88 * 9,
    n4 = 1.7498005798264095e+100,
    n5 = 0,
    n6 = .44;
// console.log(n4);
//Логические Boolean
let b1 = true,
    b2 = false;
console.log(n1 + n6 - str6);
//null

//undefined

let gg = null;
// gg = 33;
console.log(gg);


//ОБїект
let ob = {
    "name" : 'Nick',
    'dob' : '1111/11/11',
};

//JSON
console.log(ob.name);

//resourses:
/**
 * w3s
 * 
 */

fname = 33;
var fname;
fname += 3;
console.log(fname);

// fff = 'fff';
// let fff;

//Операторі
let n11 = 33 * 2 + 9 / 3;
console.log('n11', n11);

//prompt
//confirm
// let yob = prompt('Enter your year of birth');
// console.log(yob * 1 + 10);
let isHuman = confirm('Are you a human?');
console.log(typeof isHuman);
