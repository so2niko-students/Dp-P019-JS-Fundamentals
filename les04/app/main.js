function stream(string) {
    let resultArray = [];
    // let numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let stringArray = string.split(' ');
    const strLen = stringArray.length;
    for (let i = 1; i <= strLen; i++) {
      for (let j = 0; j < strLen; j++) {
        if (stringArray[j].includes(i)) {
          resultArray.push(stringArray[j]);
        }
      }
    }
    console.log(resultArray.join(' '));
} 

stream("is2 Thi1s T4est 3a");
stream("4of Fo1r pe6ople g3ood th5e the2");