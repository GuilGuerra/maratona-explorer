const respostaEl = document.querySelector('#resposta')
const input = document.querySelector('#pergunta')
const button = document.getElementById('btn')

input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    button.click()
  }
})

const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

function fazerPergunta() {
  if (input.value == '') {
    alert('Digite sua pergunta')
    return
  }

  button.setAttribute('disabled', true)

  const pergunta = '<div>' + input.value + '</div>'

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  respostaEl.innerHTML = pergunta + respostas[numeroAleatorio]
  respostaEl.style.opacity = 1

  setTimeout(function () {
    respostaEl.style.opacity = 0
    button.removeAttribute('disabled')
  }, 3000)
}
