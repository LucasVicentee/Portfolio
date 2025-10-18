// Função de alterar cor de fundo com o trilho de Dark Mode e Light Mode
// Inicio
let trilho = document.getElementById("trilho"); 
let body = document.querySelector("body"); 

trilho.addEventListener("click", () => { 
    trilho.classList.toggle("dark"); 
    body.classList.toggle("dark");
});
// Fim

// Função de expandir e recolher o menu de navegação com a utilização do "Hamburger"
// Início
var menuItem = document.querySelectorAll('.item-menu'); // Seleciona todos os itens do menu

function selectLink() { // Função para selecionar o link clicado
    menuItem.forEach((item) => 
        item.classList.remove('ativo') // Remove a classe 'ativo' de todos os itens do menu
    )
    this.classList.add('ativo') // Adiciona a classe 'ativo' ao item clicado
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink) // Adiciona o evento de clique a cada item do menu
)
// Fim

var btnExpandir = document.querySelector('#btn-expandir');
var menuNavegacao = document.querySelector('#menu-navegacao');

btnExpandir.addEventListener('click', function() { 
    menuNavegacao.classList.toggle('expandir'); // Alterna a classe 'expandir' no menu de navegação
});