// console.dir(root);
// //Генерация элементов
// //Lazy variant
// const str = '<u>Строка </u>';
// for(let i = 0; i < 30; i++){
//     root.innerHTML += str;
// }
// //Hard variant
// const str2 = 'Второй вариант ';
// for(let i = 0; i < 30; i++){
//     const tag = document.createElement('div');
//     tag.innerText = str2;
//     root.appendChild(tag);
// }

function usersLoad(){
    fetch('https://randomuser.me/api/?results=50').then(resp=>resp.json()).then(dd=>{
        // dd.results.forEach(us=>{
        //     root.innerHTML += `
        //     <div class="card" style="width: 18rem;">
        // <img src="${us.picture.large}" class="card-img-top" alt="...">
        // <div class="card-body">
        //     <h5 class="card-title">${us.name.first} ${us.name.last}</h5>
        //     <p class="card-text">${us}</p>
        //     <a href="#" class="btn btn-primary">Go somewhere</a>
        // </div>
        // </div>`;  
        // });  
        console.log(dd);
    });
}


function deleteLazy(){
    root.innerHTML = '';
}

function deleteHard(){
    while(root.hasChildNodes()){
        root.removeChild(root.firstChild);
    }
}

const aj = new XMLHttpRequest();
aj.onreadystatechange = function(){//Реагирование на события изменения состояния
    console.log(`${Date.now() % 100000}: 
readyState: ${this.readyState}, 
status: ${this.status}`);
    if(this.readyState == 4){
        console.log(this.responseText);
        console.log(JSON.parse(this.responseText));
    }

}
// aj.addEventListener('readystatechange', function(event){
    
// });

aj.open('GET', 'https://randomuser.me/api/', true);//Настройка отправки
// aj.open('GET', '/data/users.txt', true);//Настройка отправки
//метод отправки, url-адресс сайта, тип ассинхронности(необязательный параметр)
// aj.send();//отправка

function fetchTxt(){
    fetch('/data/users.csv').then(resp => resp.text()).then(data=> console.log(data));
}

function fetchImg(url = '/data/001.jpg'){
    fetch(url).then(resp => resp.blob()).then(data => {
        let img = document.createElement('img');
        img.src = URL.createObjectURL(data);
        document.body.append(img);
    });
}