

let computerPossibilities = [{
  number: 1,
  choice: 'rock'
},
{
  number: 2,
  choice: 'paper'
},
{
  number: 3,
  choice: 'scissors'
}]

function randomNumberGenerator() {
  return Math.floor(Math.random() * 3)
}

function computerChoiceSelector() {
  return computerPossibilities[randomNumberGenerator()].choice
}







function play(playerChoice) {
  let computerChoice = computerChoiceSelector()
  if (playerChoice === computerChoice) {
    // alert('Tie')
    document.getElementById('winnerBlock').innerHTML = 'tie'
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    // alert('Paper beats Rock: Computer Wins!')
    document.getElementById('winnerBlock').innerHTML = 'Paper beats Rock: Computer Wins!'
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    // alert('Rock beats Scissors: You Win!')
    document.getElementById('winnerBlock').innerHTML = 'Rock beats Scissors: You Win!'
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    // alert('Paper beats Rock: You Win!')
    document.getElementById('winnerBlock').innerHTML = 'Paper beats Rock: You Win!'
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    // alert('Scissors beats Paper: Computer Wins!')
    document.getElementById('winnerBlock').innerHTML = 'Scissors beats Paper: Computer Wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    // alert('Rock beats Scissors: Computer Wins!')
    document.getElementById('winnerBlock').innerHTML = 'Rock beats Scissors: Computer Wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    // alert('Scissors beats Paper: You Win!')
    document.getElementById('winnerBlock').innerHTML = 'Scissors beats Paper: You Win!'
  }
}





