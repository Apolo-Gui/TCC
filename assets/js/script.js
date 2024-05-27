// vai pegar o identificador
const elementosDuvida = document.querySelectorAll('.duvida')
// função para abrir a caixa de pergunta com um toque
elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
    duvida.classList.toggle('ativa')
  })
})

// Quando o usuário rolar a partir do topo do documento, mostrar ou ocultar o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("myBtn").style.opacity = "1"; // Torna o botão visível
  } else {
    document.getElementById("myBtn").style.opacity = "0"; // Torna o botão invisível suavemente
    setTimeout(function(){
      document.getElementById("myBtn").style.display = "none"; // Esconde o botão após a transição
    }, 300);
  }
}

// Quando o usuário clicar no botão, rolar para o topo do documento
function topFunction() {
  document.body.scrollTop = 0; // Para browsers da Safari
  document.documentElement.scrollTop = 0; // Para outros browsers
}

const btn = document.getElementById('modo-btn');
const body = document.body;

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const mode = body.classList.contains('dark-mode') ? 'claro' : 'escuro';
    btn.textContent = `Modo ${mode}`;
});