// Get elements
const choices = document.querySelectorAll('.choice');
const userChoiceSpan = document.querySelector('#user-choice span');
const computerChoiceSpan = document.querySelector('#computer-choice span');
const winnerSpan = document.querySelector('#winner span');

// Choices array
const options = ['stone', 'paper', 'scissors'];

// Game logic
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.dataset.choice;
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    const winner = determineWinner(userChoice, computerChoice);

    // Update UI
    userChoiceSpan.textContent = capitalize(userChoice);
    computerChoiceSpan.textContent = capitalize(computerChoice);
    winnerSpan.textContent = winner;
  });
});

// Determine winner
function determineWinner(user, computer) {
  if (user === computer) {
    return 'It\'s a tie!';
  }

  if (
    (user === 'stone' && computer === 'scissors') ||
    (user === 'paper' && computer === 'stone') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Capitalize function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
