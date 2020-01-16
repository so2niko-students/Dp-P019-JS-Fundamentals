const string = '"В эту зиму с ума я опять не сошел..." Иосиф Бродский, 1969'


function statistics(str) {
    let numCount = 0;
    let letterCount = 0;
    let simbCount = 0;
    str = str.toLowerCase();
    const arr = str.split('');
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        const el = arr[i];
        const code = el.codePointAt(0);
       
        switch(true){
            case el === ' ': {
                simbCount++;
                break;
            }
            case !isNaN(el): {
                numCount++;
                break;
            }
            case (code >= 1040 && code <= 1103):{
                letterCount++;
                break;
            }
            default:{
                simbCount++;
            }
        }
    }
    
    console.log('Количество букв:', letterCount);
    console.log("Количество символов:", simbCount);
    console.log("Количество цифр:", numCount);
}




// statistics(string);

function textNumber(number) {
    const first = ['', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
    const second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать'];
    const third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
    
    if (number >= 0 && number <= 9) {
        return first[number];
    }
    
    if (number >= 10 && number < 20) {
        return second[number - 10];
    }
    
    if (number >= 20 && number <= 99) {
        const firstNumber = third[parseInt(number / 10) - 2];
        const secondNumber = number % 10;
        const secN = first[secondNumber];

        return `${firstNumber} ${secN}`;
    }
  }
//   console.log(textNumber(7));
//   console.log(textNumber(20));
//   console.log(textNumber(32));
//   console.log(textNumber(0));

function toCamelCase(str) {
    console.log(str
    .split('-')
    .map((word, index) => index == 0 ? word : 
        word[0].toUpperCase() + word.slice(1))
    .join(''));
}
// toCamelCase('list-style-property');

function fun(str) {
    const newStr = str.split('');
 
     let tmpArr = '';
 
     for (let i = 0; i <= newStr.length; i++) {
         
         if (i == 0) {
             tmpArr += newStr[i];
             continue;
         }
         
         if (newStr[i - 1] == ' ' && newStr[i] != ' ') {
             tmpArr += newStr[i];
         }
     }
 
 
     return alert(tmpArr.toUpperCase());
 }
 
 let str = 'Hyper Text        Markup  Language';
 
//  fun(str);

 function test(){
    const len = arguments.length;
    let sum = 0;
    for(let i = 0; i < len; i++){
        sum += Number(arguments[i]);
    }
    return sum;
 }

