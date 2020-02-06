export class CardModel{
    constructor(){
        this.link = 'https://maksv21.github.io/softserve/demo2/database/animals_ru.json';
        const oldCart = JSON.parse(localStorage.getItem('cart'));
        this.cart = new Set(oldCart);

    }

    loadData(){
        return fetch(this.link).then(req=>req.json()).then(d=> this.data = d);
    }

    addToCart(id){
        // if(this.cart.indexOf(id) == -1){
        //     this.cart.push(id);
        // }else{
        //     console.log('Такое животное уже в корзине ждет окончания ваших покупок');
        // }
        this.cart.add(id);
        localStorage.setItem('cart', JSON.stringify([...this.cart]));
        return this.cart.size;
    }

    search(name){
        name = name.toLowerCase();
        return this.data.filter(el=>el.breed.toLowerCase().includes(name));
    }

    sort(isHigh = true){
        this.data.sort((a,b)=>isHigh? a.price - b.price: b.price - a.price);
        return this.data;
    }

    getCartSize(){
        return this.cart.size;
    }

    getCart(){
        return this.data.filter(prod=>this.cart.has(prod.id.toString()));
    }
}