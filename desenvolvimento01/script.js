let elementoH1 = document.getElementById('titulo')

elementoH1.innerText = 'Título da Página'

let elementoA = document.querySelector('a')

elementoA.innerText = 'Site Proz'

let elementoOl = document.querySelector('ol')

elementoOl.innerHTML = `
<li>
 <a href="https://prozeducacao.com.br">Site 01 </a></li>
 <li>
 <a href="https://prozeducacao.com.br"> Site 02</a></li> 
 <li>
 <a href="https://prozeducacao.com.br"> Site 03 </a></li>
 
`

let elementoUl = document.querySelector('ul')

elementoUl.innerHTML = `
 <li>Primeiro Elemento </li>
 <li>Segundo Elemento </li>
 <li>Terceiro Elemento </li>
`