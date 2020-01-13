let a = [2,3, 4, 5, 6, 7];
a.name = 'Indo';
a['1.3'] = 'Ivan';
a[66] = 'Petro';
console.log(a);
a.forEach(e=>console.log(e));
/**
 * push
 * pop
 * shift
 * unshift
 * sort
 * reverse
 * splice -- универсальный доступ и изменение массива
 * slice -- return new array (с какого, не включая какой)
 */

//  console.log('new: ', a.slice(0, 4));
//  console.log('a: ', a);
// TODO: look: работа с двумерными массивами

// console.log('new:', a.splice(a.length, 0, 'Hello', 44, 55));
// console.log('old a:', a);

