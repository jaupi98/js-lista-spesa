// 1 -creo l'arrey della lista dellla spesa
let list =[
    'Uova',
    'guanciale',
    'pecorino',
    'pepe',
    'pasta',
    'acqua'
];
// recupero lelemento del dom che deve contenere gli ingredienti
const list_dom = document.getElementById('list');
console.log(list_dom);

// ciclo l'arrey
// for (let i=0; i<list.length; i++){
//     console.log(list[i]);

// }
let i=0;
while(i<list.length){
    let elem =document.createElement('li');
    elem.innerText = list[i];
    list_dom.append(elem);
    i++;
}