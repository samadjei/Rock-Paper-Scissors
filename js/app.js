// Modal
// Get Modal
let modal = document.querySelector(".modal-content");
// Get the button that opens the modal
let btn = document.querySelector(".modal-btn");
// Get the <a> element that closes the modal
let close = document.querySelector(".close")[0];
// When the user clicks the GamepadButton, open the modal
btn.addEventListener("click", function (e) {
	e.preventDefault();
	modal.style.display = "block";
});

// Get the Close button 
close.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(close);
	modal.style.display = "none";
});

