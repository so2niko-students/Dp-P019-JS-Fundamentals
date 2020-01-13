const el = prompt('Enter 2 vars and operations', '1 1 +').split(' ');

function par(el, info){
    let op;

    if(el[2] === '+'){
        op = function(a, b){
            console.log(this, info);
            return Number(a) + Number(b);
        }
    }else{
        op = (a, b) => {
            console.log(this, info);
            return a - b;
        }
    }

    console.log(op(el[0], el[1]));
}

par(el, 'lala');

console.log(op(el[0], el[1]));