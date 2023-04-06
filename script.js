let modalBtn = document.querySelector(".modal-btn");
let modalContainer = document.querySelector(".modal-container");
let closeBtn = document.querySelector(".close-btn");
// console.log(modalBtn);
// console.log(modalWindow.style.opacity);

modalBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
