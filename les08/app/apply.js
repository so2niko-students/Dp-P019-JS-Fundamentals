const Vladimir = {
    name : 'Vladimir',
    surname : 'Rusynov'
}, Georgiy = {
    name : 'Georgiy',
    surname : 'Sokolovsky'
};

function info(msg){
    console.log(`${this.name} ${this.surname}: ${msg}`);
}

info.apply(Vladimir, ['Hello']);
info.apply(Georgiy, ['Hello']);
