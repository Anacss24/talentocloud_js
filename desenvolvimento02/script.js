let corpo = document.createElement('h1')

corpo.innerHTML = "Titulo"
corpo.id = 'titulo'

let titulo = document.querySelector('body')

titulo.appendChild(corpo)

let div = document.createElement('div')

div.innerHTML = `
<h2> Nome do produto </h2>
<p> Descrição</p>
<p> R$ 20.00</p>
<img src='caderno.jpeg'>
`
titulo.appendChild(div)