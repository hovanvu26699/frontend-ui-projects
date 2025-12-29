let btnOpen = document.querySelector(".open__modal-btn");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".modal__header i");
let iconModal = document.querySelector(".modal__close-btn");

function toggleModal(e) {
  if (e.target === e.currentTarget) {
    modal.classList.toggle("show");
  }
}

btnOpen.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
iconModal.addEventListener("click", toggleModal);
modal.addEventListener("click", toggleModal);
