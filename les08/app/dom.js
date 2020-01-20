const h2 = $('h2', true);
console.log(h2);

function $(css, isCollection = false){
    return isCollection? document.querySelectorAll(css): document.querySelector(css);
}

function changeH2(msg = 'default', isTags = false){
    h2.forEach(h => isTags? h.innerHTML = msg: h.innerText = msg);
}

function changeHeaders(){
    changeH2($('.inp').value);
}

function sayHi(){
    console.log('Hi');
}

// document.querySelector('.btn-ch').onclick = changeHeaders;
$('.btn-ch').addEventListener('click', changeHeaders);
$('.btn-ch').addEventListener('click', sayHi);