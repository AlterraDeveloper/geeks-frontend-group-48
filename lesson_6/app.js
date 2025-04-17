const openModalBtn = document.querySelector("#open");
const closeModalBtn = document.querySelector("#modal-close");
const modalBackground = document.querySelector("#modal_container");

openModalBtn.onclick = openModal;

// closeModalBtn.onclick = function () {
//   closeModal();
// };

modalBackground.onclick = function (event) {
  if (event.target === closeModalBtn || event.target === modalBackground) {
    closeModal();
  }
};

function openModal() {
  const modal = document.querySelector("#modal_container");
  modal.classList.add("show");
}

function closeModal() {
  const modal = document.querySelector("#modal_container");
  modal.classList.remove("show");
}

// event propagation - распросранение событий

// const modalWindow = modalBackground.querySelector(".modal");
// modalWindow.onclick = function(event) {
//     event.stopPropagation();
// }

const form = document.querySelector("#form");

form.onsubmit = function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  console.log("form submitted", formData);
};

const passwordEye = document.querySelector("#password-eye");

passwordEye.onmouseenter = function () {
  const passwordField = document.querySelector("#userPassword");
  passwordField.setAttribute("type", "text");
};

passwordEye.onmouseleave = function () {
  const passwordField = document.querySelector("#userPassword");
  passwordField.setAttribute("type", "password");
};

document.body.addEventListener("contextmenu", function (event) {
  event.preventDefault();

  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = `calc(${event.clientY}px - 50px)`;
  div.style.left = `calc(${event.clientX}px - 50px)`;
  div.style.backgroundColor = "blue";
  div.style.width = "200px";
  div.style.height = "400px";

  document.body.appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 1000);
});

document.body.addEventListener("keydown", function (event) {

    console.log(event);

  if (event.key === "c" && event.ctrlKey !== true) {
    console.log("Simple C");
  }

  if (event.key === "c" && event.ctrlKey === true) {
    console.log("Ctrl C => Copy");
  }
});
