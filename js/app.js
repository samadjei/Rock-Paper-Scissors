// Grab the buttons
const buttons = document.querySelectorAll(".btn-circle");
const scoreElement = document.getElementById("score");
const choices = ["paper", "rock", "scissors"];

let score = 0;
let userChoice = undefined;

// Loop over the buttons
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		// Retrieves the user's choice from the button
		userChoice = button.getAttribute("data-choice");

		checkWinner();
	});
});

function checkWinner() {
	const computerChoice = pickRandomChoice();

	if (userChoice === computerChoice) {
		// draw
	} else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper")) {
		//user won
		updateScore(1);
	} else {
		//user lost
		updateScore(-1);
	}
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

// *MODAL
const modalBtn = document.querySelector(".modal-btn");
const modalOuter = document.querySelector(".modal-outer");
const close = document.querySelector(".close");

modalBtn.addEventListener("click", (event) => {
	modalOuter.classList.add("open");
});

close.addEventListener("click", (event) => {
	modalOuter.classList.remove("open");
});

// Closes modal when window is clicked
modalOuter.addEventListener("click", (event) => {
	const isOutside = !event.target.closest(".modal-inner");
	if (isOutside) {
		modalOuter.classList.remove("open");
	}
});

// Adding escape key functionality
window.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		modalOuter.classList.remove("open");
	}
});

// *BUTTONS
