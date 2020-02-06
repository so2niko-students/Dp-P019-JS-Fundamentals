document.addEventListener('DOMContentLoaded', ()=>{
    const counter = document.querySelector('.counter');
    let c = 0;
    setInterval(()=>counter.innerText = ++c, 1000);
});

// $('#level').change(function(){
//     changeLevel();
// });

// document.querySelector('#level').addEventListener('input', changeLevel);
