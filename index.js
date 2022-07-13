let productsCart = [
    {
        id: 0,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 1,
        name: 'Vinho Canção',
        price: 17.98
    },
    {
        id: 2,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 3,
        name: 'Mamão',
        price: 9.98
    },
    {
        id: 4,
        name: 'Água tônica',
        price: 17.98
    }
]

function somarProdutos(){
    let soma = 0
    for(let i = 0; i < productsCart.length; i++){
        soma += productsCart[i].price
    } 
    console.log(soma)
    return soma
}



let main = document.createElement('main')
let body = document.querySelector('body')
body.appendChild(main)
main.classList.add('container')

let h1 = document.createElement('h1')
main.appendChild(h1)
h1.innerText = 'Virtual Market'

let div = document.createElement('div')
main.appendChild(div)
div.classList.add('itens')

let span = document.createElement('span')
div.appendChild(span)
span.innerText = 'Item'
span.classList.add('item')

let span1 = document.createElement('span')
div.appendChild(span1)
span1.innerText = 'Valor'
span1.classList.add('valor')

let div1 = document.createElement('div')
main.appendChild(div1)
div1.classList.add('listaProdutos')

let ul = document.createElement('ul')
ul.id = 'list-ul'
div1.appendChild(ul)

let lista = document.getElementById('list-ul')

for(let i = 0; i < productsCart.length; i++) {
    let li = document.createElement('li')
    li.classList.add('productsList')
    li.innerHTML = `<h3>${productsCart[i].name}</h3> <h3>${productsCart[i].price}</h3>`
    lista.appendChild(li)
}

let section = document.createElement('section')
main.appendChild(section)

let divTotal = document.createElement('div')
section.appendChild(divTotal)
divTotal.classList.add('total')

let spanTotal = document.createElement('span')
divTotal.appendChild(spanTotal)
spanTotal.classList.add('spanTotal')
spanTotal.innerText = 'Total'

let spanValorTotal = document.createElement('span')
divTotal.appendChild(spanValorTotal)
spanValorTotal.classList.add('spanValorTotal')
spanValorTotal.innerText = ''

let button = document.createElement('button')
section.appendChild(button)
button.classList.add('finalizarCompra')
button.innerText = 'Finalizar compra' 

button.addEventListener('click', function(){
    spanValorTotal.innerText = somarProdutos()
})

