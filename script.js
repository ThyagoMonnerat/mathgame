let button_start = document.getElementById('button-start')
let menu = document.getElementById('start-menu')
let game_ui = document.getElementById('game')
let countdown = document.getElementById('countdown')
let first_product = document.getElementById('first-product')
let second_product = document.getElementById('second-product')
let signal = document.getElementById('between-signal')
let user_answer = document.getElementById('user-answer')
let button = document.getElementById('calc-button')
let historic = document.getElementById('historic')
let score = document.getElementById('score')


countdown.value = 10

let signals_data = ['+', '-', 'x']
function randomize_signals() {
  let signal_randomize =
    signals_data[Math.floor(Math.random() * signals_data.length)]
  signal.innerText = signal_randomize
}

function random_values(a, b) {
  a.value = Math.round(Math.random() * 10)
  b.value = Math.round(Math.random() * 10)
}

function reset(a) {
  return (a.value = 10)
}

function calculate() {
  let result = ''

  if (signal.innerText == '+') {
    result = Number(first_product.value) + Number(second_product.value)
  }
  if (signal.innerText == '-') {
    result = Number(first_product.value) - Number(second_product.value)
  }
  if (signal.innerText == 'x') {
    result = Number(first_product.value) * Number(second_product.value)
  }

  if (user_answer.value == result) {
    random_values(first_product, second_product)
    score.value++
    randomize_signals()
    reset(countdown)
    user_answer.value = ''
    historic.innerHTML += `<span>${result}</span>`
  } else {
    location.reload()
  }
}

function countdown_function() {
  setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      location.reload()
    }
  }, 1000)
}

button_start.addEventListener('click', () => {
  countdown_function()
  game_ui.style = 'display: block'
  menu.style = 'display: none'
})

button.addEventListener('click', calculate)
addEventListener('keypress', event => {
  if (event.key == 'Enter') {
    calculate()
  }
})

randomize_signals()
random_values(first_product, second_product)
