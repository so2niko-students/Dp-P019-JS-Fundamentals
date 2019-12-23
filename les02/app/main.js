const yob = prompt('Enter your year of birth', '1812');
const curYear = 2019;
const age = curYear - yob;
let message = '';
switch(true){
    case age < 14:{
        message = 'Младший школьній возраст';
        break;
    }
    case age >= 14 && age < 18:{
        message = 'Старший школьній возраст';
        break;
    }

    case age >= 18 && age < 30:{
        message = "Молодіе люди";
        break;
    }

    case age >= 30 && age < 60:{
        message = 'Нормальніе люди';
        break;
    }

    case age >= 60:{
        message = 'Сеньорі';
        break;
    }
}

// if(age < 14){
//     message = 'Младший школьній возраст';
// }

// if(age >= 14 && age < 18){
//     message = 'Старший школьній возраст';
// }

// if(age >= 18 && age < 30){
//     message = "Молодіе люди";
// }

// if(age >= 30 && age < 60){
//     message = 'Нормальніе люди';
// }

// if(age >= 60){
//     message = 'Сеньорі';
// }

console.log(`Ві относитесь к группе: ${message}`);
// let message = 'Доступ запрещен';
// if(age >= 18){
//     message = 'Доступ разрешен';
// }


// let message = '';
// if(age >= 18){
//     message = 'Доступ разрешен';
// }else{
//     message = 'Доступ запрещен';
// }

console.log(message);