// buttons
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
console.log(Math.trunc(Math.random() * 6) + 1)
// dice image
const diceImg = document.querySelector('.dice')
diceImg.style.display = 'none'

// variables
let currentStore = 0
let activePlayer = 0
let score = [0, 0]
let gameOver = true

const switchPlayer = () => {
  currentStore = 0
  document.getElementById(`current--${activePlayer}`).textContent = currentStore
  activePlayer = activePlayer === 0 ? 1 : 0
  document.querySelector('.player--0').classList.toggle('player--active')
  document.querySelector('.player--1').classList.toggle('player--active')
}

btnRoll.addEventListener('click', () => {
  if (gameOver) {
    diceImg.style.display = 'block'

    const random = Math.trunc(Math.random() * 6) + 1
    diceImg.src = `dice-${random}.png`

    if (random !== 1) {
      currentStore += random
      document.getElementById(`current--${activePlayer}`).textContent =
        currentStore
    } else {
      switchPlayer()
    }
  }
})

// hold btn
btnHold.addEventListener('click', () => {
  if (gameOver) {
    score[activePlayer] += currentStore
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer]
    if (score[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner')
      gameOver = false
      alert(`Player ${activePlayer + 1} Wins`)
    } else {
      switchPlayer()
    }
  }
})

// new game btn
btnNew.addEventListener('click', () => {
  document.location.reload()
})
