const inputs = {
    btn     : document.querySelector('.btn-create'),
    input   : document.querySelector('.inp-count'),
    field   : document.querySelector('.field'),
    test    : document.querySelector('.test'),
    btnNext : document.querySelector('.btn-next'),
    counter : 1
};

inputs.btn.addEventListener('click', ()=>{
    const count = inputs.input.value;
    let str = '<div class="square"></div>'.repeat(count);
    inputs.field.innerHTML = str;
    console.log(inputs.field.outerHTML);
});

inputs.btnNext.addEventListener('click', ()=>{
    inputs.test.outerHTML = inputs.test.outerHTML.replace(inputs.counter, inputs.counter + 1);
    inputs.counter++;
    inputs.test = document.querySelector('.test');
    console.log(inputs.test.outerHTML);
});