'use strict'

function validateInt(num, information) {
    let numexp = /^\d+$/;
    while (!num.match(numexp)) {
        num = prompt(information);
    }
    return num;
}

function checkPrimary(num, divisor=2) {
    if (!(num % divisor)) {
        return "Not a primary number!!!";
    }
    if (divisor == Math.trunc(num / 2) || num == 1) {
        return "A primary number!!!";
    }
    
    return checkPrimary(num, ++divisor);
}

function primaryMain() {
    let num = validateInt("", "Enter the number");
    alert(checkPrimary(num));
}

// primaryMain();

function isPrime(number, i = 2){
    if (number < 4 && number > 1) return true;
    
    if (number % i == 0) return false;

    return (i <= Math.sqrt(number))? isPrime(number, i + 1): true;
}
console.log(isPrime(11));


function isPrime (n, i = 2) {
    // i- дополнительный параметр. При вызове должен быть равен 2
   // Базовый случай 
    if (n < 2) {
        return false;
    } // Базовый случай 
    if (n == 2) {
        return true;
    } // Базовый случай 
    if (n % i == 0) {
        return false;
    } // Шаг рекурсии / рекурсивное условие
    if (i < n / 2) {
        return isPrime(n, i + 1);
    } 
    return true;
}
console.log('Test. Is prime: ', isPrime(22) );


const fib2 = n => {
    if(n == 0){
      return [0, 1];
    }else{
      const [prev, next] = fib2(n - 1);
      return [next, prev + next];
    }
  }
console.log(fib2(53));