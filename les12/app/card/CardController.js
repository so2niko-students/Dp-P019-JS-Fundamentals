import { CardModel } from "./CardModel.js";
import { CardView } from "./CardView.js";

export class CardController{
    constructor(){
        this.model = new CardModel();
        this.view = new CardView()
        this.view.addListeners({
            buy:    this.handleClick.bind(this),
            search: this.handleSearch.bind(this),
            sort:   this.handleSort.bind(this), 
            modal:  this.handleCartClick.bind(this),
            close:  this.handleCloseModal.bind(this),
            send:  this.handleSend.bind(this)
        });
        this.loadData();

        this.view.setCounter(this.model.getCartSize());
    }

    loadData(){
        this.model.loadData().then(arr=>this.view.renderCards(arr));
    }

    handleClick(ev){
        console.log(this);
        if(ev.target.classList.contains('btn-buy')){
            const size = this.model.addToCart(ev.target.dataset.id);
            this.view.setCounter(size);
        }
    }

    handleSearch(ev){
        this.view.renderCards(this.model.search(ev.target.value));
    }

    handleSort(ev){
        const arr = this.model.sort(ev.target.dataset.dir != 'high');
        this.view.renderCards(arr);
    }

    //Click on cart
    handleCartClick(ev){
        //launch model for data
        const cartArr = this.model.getCart();
        //launch view for showing modal window
        this.view.showModal(cartArr);

    }

    handleCloseModal(ev){
        this.view.closeModal(ev);
    }


    handleSend(ev){
        const mail = this.view.getInpMail();
        const regMail = /^\w+@\w+\.\w+$/i;
        if(!regMail.test(mail)){
            this.view.showErrorMail();
        }else{
            this.view.removeErrors();
        }

        this.view.closeModal(ev);
    }

}