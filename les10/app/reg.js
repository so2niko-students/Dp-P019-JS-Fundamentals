import {anekdot} from './anekdot.js';
//Объектный способ
let reg1 = new RegExp('ё');
//Литеральный способ
let reg2 = /ъ/;
console.log('ё: ', reg1.test(anekdot));
console.log('ъ: ', reg2.test(anekdot));
let reg0 = /[0123456789]/; // набор символов
console.log(reg0, reg0.test(anekdot));
let regD = /[0-9]/;//диапазоны
let regD1 = /\d/; //сокращения - Цифры
let regNoD = /\D/; //не Цифры
console.log(regD, regD.test(anekdot));
let regW = /[a-z]/;
let regW0 = /[a-zA-Z0-9]/;
let regW1 = /\w/; //сокращения - буквенно-циферный
let regNoW = /\W/; //не буквы и цифры
let regS = /\s/; //пробельный символ
let regNoS = /\S/;//не пробельный символ
console.log(regW, regW.test(anekdot));
let regRu = /[а-яё]/;
console.log(regRu, regRu.exec(anekdot));
//Exec - indexOf
//не буквы, не цифры, не пробел, не '
let regNo = /[^\wа-яА-ЯёЁ\s'\|\:\.\,\+\-\!\?\–]/; //^ - отрицание
console.log(regNo, regNo.exec(anekdot));
let regAll = /[\wа-яё\s'\|\:\.\,\+\-\!\?\–]/gi;
console.log(anekdot.replace(regAll, ''));

//Квантификаторы
let regD4 = /\d{3}/g;
//Четкий квантификатор
//match - строчный метод поиска данных
console.log(regD4, anekdot.match(regD4));
//Диапазонный
let regDiap = /\d{1,4}/g;
console.log(regDiap, anekdot.match(regDiap));
//Минимум
let regMin = /\d{2,}/g;
//Максимум
let regMax = /\d{,4}/g;

//+ -- {1,} - минимум 1
let regWM = /[а-я]+/;
//* -- {0,} - минимум 0 - "плевать" квантификатор

//? -- {0,1} от 0 до 1, может быть, а может и нет





