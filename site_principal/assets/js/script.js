// vai pegar o identificador
const elementosDuvida = document.querySelectorAll('.duvida')
// função para abrir a caixa de pergunta com um toque
elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
    duvida.classList.toggle('ativa')
  })
})