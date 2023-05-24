
let lista_spesa = [
    'prosciutto' ,'mozzarella' , 'pane' , 'latte' , 'farina' , 'uova' , 'succo ace' , 'torta al limone' , 'arachidi'
] ;

const alimenti = document.getElementById('alimenti');

let i = 0;

while (i < lista_spesa.length) {

    let item = lista_spesa[i];

    let list_item = document.createElement('li');

    list_item.innerText = item
    
    alimenti.append(list_item)

    i++;

} 