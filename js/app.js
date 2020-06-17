// Grab the buttons
const buttons = document.querySelectorAll('.btn-circle');
const scoreElement = document.getElementById('score');
const option = document.getElementById('option');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const userSelect = document.getElementById('user-select');
const computerSelect = document.getElementById('computer-select');
const winner = document.getElementById('winner');

const choices = ['paper', 'rock', 'scissors'];

let score = 0;
let userChoice = undefined;

// Loop over the buttons
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		// Retrieves the user's choice from the button
		userChoice = button.getAttribute('data-choice');

		checkWinner();
	});
});

// Reset the game
reset.addEventListener('click', () => {
	//show the selection | hide the main
	option.style.display = 'flex';
	selection.style.display = 'none';
});

function checkWinner() {
	const computerChoice = pickRandomChoice();

	// Update the view
	updateSelection(userSelect, userChoice);
	updateSelection(computerSelect, computerChoice);

	if (userChoice === computerChoice) {
		// draw
		winner.innerHTML = 'drew';
	} else if ((userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper')) {
		//user won
		updateScore(1);
		winner.innerText = 'win';
	} else {
		//user lost
		updateScore(-1);
		winner.innerText = 'lost';
	}
	//show the selection | hide the main
	option.style.display = 'none';
	selection.style.display = 'flex';
}

function updateScore(value) {
	score += value;

	// Updates the score element
	scoreElement.innerText = score;
}

// Randomly picks from the array for the computer
function pickRandomChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionElement, choice) {
	selectionElement.classList.remove('paper');
	selectionElement.classList.remove('rock');
	selectionElement.classList.remove('scissors');

	// Update the image
	const img = document.querySelector('img');
	selectionElement.classList.add(`${choice}`);
	selectionElement.querySelector('img').src = `images/icon-${choice}.svg`;
	img.alt = choice;
}

// *MODAL
const modalBtn = document.querySelector('.modal-btn');
const modalOuter = document.querySelector('.modal-outer');
const close = document.querySelector('.close');

modalBtn.addEventListener('click', (event) => {
	modalOuter.classList.add('open');
});

close.addEventListener('click', (event) => {
	modalOuter.classList.remove('open');
});

// Closes modal when window is clicked
modalOuter.addEventListener('click', (event) => {
	const isOutside = !event.target.closest('.modal-inner');
	if (isOutside) {
		modalOuter.classList.remove('open');
	}
});

// Adding escape key functionality
window.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		modalOuter.classList.remove('open');
	}
});


