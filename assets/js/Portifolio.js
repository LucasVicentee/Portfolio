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

// Calcular idade atual de acordo com o ano atual
const dataNascimento = new Date('2004-02-06'); // Minha data de nascimento

  const hoje = new Date(); // Data atual do dispositivo
  let idade = hoje.getFullYear() - dataNascimento.getFullYear(); // Calculando a diferença dos anos
  const mesAtual = hoje.getMonth(); // Mês atual (0 a 11)
  const diaAtual = hoje.getDate(); // Dia atual do mês (1 a 31)

  // Verifica se o aniversário já aconteceu neste ano
  if (
    mesAtual < dataNascimento.getMonth() || (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())
  ) {
    idade--;
  }

  document.getElementById('idade-atual').textContent = idade; // Exibe a idade no HTML

  // ScrollReveal 
ScrollReveal({ 
  reset: true,        // Faz a animação repetir ao rolar para cima/baixo
  distance: '60px',   // Distância do movimento
  duration: 1200,     // Duração da animação (em ms)
  delay: 200          // Atraso inicial
});

// Revela cada seção principal
ScrollReveal().reveal('#sobre-mim', { origin: 'left' });
ScrollReveal().reveal('#tecnologias-utilizadas', { origin: 'bottom' });
ScrollReveal().reveal('#certificados-obtidos', { origin: 'right' });
ScrollReveal().reveal('#formacao', { origin: 'top' });

// Revela elementos internos com efeitos suaves
ScrollReveal().reveal('.card-tecnologia', { interval: 150, origin: 'bottom' });
ScrollReveal().reveal('.formacao-container img', { origin: 'left', delay: 300 });
ScrollReveal().reveal('.formacao-container p', { origin: 'right', delay: 400 });