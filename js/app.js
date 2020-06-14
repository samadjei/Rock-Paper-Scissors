// // Modal
// // Get Modal
// const modal = document.querySelector(".modal-inner");
// // Get the button that opens the modal
// const btn = document.querySelector(".modal-btn");
// // Get the <a> element that closes the modal
// const close = document.querySelector(".close");
// // When the user clicks the GamepadButton, open the modal
// btn.addEventListener("click", function (e) {
// 	e.preventDefault();
// 	modal.style.display = "block";
// });

// // Get the Close button
// close.addEventListener("click", function (e) {
//   e.preventDefault();
// 	modal.style.display = "none";
// });

// MODAL
const modalBtn = document.querySelector(".modal-btn");
const modalOuter = document.querySelector(".modal-outer");
const close = document.querySelector(".close");

modalBtn.addEventListener("click", (e) => {
	modalOuter.classList.add("open");
});

close.addEventListener("click", (e) => {
	modalOuter.classList.remove("open");
});
