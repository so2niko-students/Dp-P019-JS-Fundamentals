const str = '18.9.9';
function next(s){
    return ((Number(s.split('.').join('')) + 1) + '')
        .split('')
        .join('.');
}

console.log(next(str));