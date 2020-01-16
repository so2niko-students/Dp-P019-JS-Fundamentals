// 8. Написать функцию, которая получает url и 
// выводит подробную информацию о нем.
// Например: url “https://itstep.org/ua/about”, 
// информация
// “протокол: https, 
// домен: itstep.org, 
// путь: /ua/about”.
function info(url) {
    let arr = url.split('://');//['https', 'itstep.org/ua/about']
    let protocol = arr[0];//'https'
    let domainWithout = arr[1].split('/');//['itstep.org','ua','about']
    let domain = domainWithout.shift();//itstep.org

    let path = domainWithout.join('/');//'ua/about'

    console.log('протокол ' + protocol);
    console.log('домен ' + domain);
    console.log('путь ' + path);    
}
// info('https://itstep.org/ua/about');

function mySplit(string, separator = '') {
    let start = '';
    const lastInd = string.length - 1;
    const substrings = [];
    for(let i in string) {
        if(separator == ''){
            substrings.push(string[i]);
            continue;
        }

        if (string[i] !== separator) {
            start += string[i];
        }else{
            substrings.push(start);
            start = '';
        }

        if(i == lastInd){
            substrings.push(start);
        }
    }


    return substrings;
}

// console.log(mySplit('https://itstep.org/ua/about'));

print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);
//Шаблон строки с аргументами количеством от 1 до 9
function print(str){
    const arr = str.split('%');
    const len = arr.length;
    for(let i = 1; i < len; i++){
        arr[i] = arguments[parseInt(arr[i])] + arr[i].slice(1);
    }
    console.log(arr.join(''));
}

const arr = [1,2,3,5454,55];
console.log(...arr);

function sum(a,b,c,d,e){
    console.log([...arguments]);
    return a - b - c - d - e;
}

console.log(sum(...arr));

function power(...numbers){
    console.log(numbers);
    return numbers.reduce((u, el) => u * el);
}

console.log(power(2,4,8,4,1,3,4));