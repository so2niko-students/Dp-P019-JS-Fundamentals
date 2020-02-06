export class CardView{
    constructor(){
        this.cardsContainer     = this.dom('.cards');
        this.cartCounter        = this.dom('.cart-counter');
        this.cart               = this.dom('.cart');
        this.inpSearch          = this.dom('.inp-search');
        this.btnSortHigh        = this.dom('.btn-sort-from-high');
        this.btnSortLow         = this.dom('.btn-sort-from-low');
        this.modal              = this.dom('.modal');
        this.btnSend            = this.dom('.btn-mail');
        this.inpMail            = this.dom('.in-mail');
        this.errorMsg           = this.dom('.error-msg');
        this.errorUp            = this.dom('.error-up');
        this.cartTable          = this.dom('.tbl-cart');
       
    }

    dom(selector){
        return document.querySelector(selector);
    }

    addListeners(lst/*{buy, search, sort, modal}*/){
        this.cardsContainer.addEventListener('click', lst.buy);
        this.inpSearch.addEventListener('input', lst.search);
        this.btnSortHigh.addEventListener('click', lst.sort);
        this.btnSortLow.addEventListener('click', lst.sort);
        this.cart.addEventListener('click', lst.modal);
        this.modal.addEventListener('click', lst.close);
        this.btnSend.addEventListener('click', lst.send);
        this.inpMail.addEventListener('input', lst.send);
    }

    renderCards(arr){
        const strArr = arr.map(animal=>{
            return `<div class="card">
            <div>
                <img src="${animal.image}" alt="${animal.species}" width='300'>
            </div>
            <h3 class="title">${animal.breed}</h3>
            <div class="price-buy"><span class="price">${animal.price}</span><button class="btn-buy" data-id="${animal.id}">Buy</button></div>
        </div>`;

            
        });
        this.cardsContainer.innerHTML = strArr.join(' ');
    }

    setCounter(num){
        this.cartCounter.innerText = num;
    }

    showModal(arr){
        this.modal.style.display = 'flex';
        this.cartTable.innerHTML = arr.map(an=> this.renderCartTableRow(an)).join(' ');
    }

    renderCartTableRow(el){
        return `<tr><td>${el.breed}</td><td>$${el.price}</td></tr>`;
    }

    closeModal(ev, hardClose = false){
        if(ev.target == this.modal ||
            ev.target == this.btnSend ||
            hardClose){
            this.modal.style.display = 'none';
            this.removeErrors();
        }
    }

    getInpMail(){
        return this.inpMail.value;
    }

    removeErrors(){
        this.inpMail.classList.remove('error');
        this.errorMsg.innerText = '';
        this.errorUp.style.display = 'none';
    }

    showErrorMail(){
        //Подкрашивать input
        this.inpMail.classList.add('error');
        //Выводить сообщение об ошибке снизу
        this.errorMsg.innerText = 'Error with email address';
        //Показывать всплывающее сообщение
        this.errorUp.style.display = 'block';
    }
}