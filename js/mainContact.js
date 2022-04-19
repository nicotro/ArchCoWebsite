const MY_INPUTS = document
  .getElementById("main_contact")
  .getElementsByTagName("input");
const MY_TEXTAREAS = document
  .getElementById("main_contact")
  .getElementsByTagName("textarea");

for (let myinput of MY_INPUTS) {
  const MY_LABEL = myinput.parentNode.children[0];
  myinput.addEventListener("focusin", () => {
    MY_LABEL.classList.add("small-text");
    MY_LABEL.classList.remove("large-text");
  });
  myinput.addEventListener("focusout", () => {
    if (myinput.value === "") {
      MY_LABEL.classList.remove("small-text");
      MY_LABEL.classList.add("large-text");
    }
  });
}
for (let mytextarea of MY_TEXTAREAS) {
  const MY_LABEL = mytextarea.parentNode.children[0];
  mytextarea.addEventListener("focusin", () => {
    MY_LABEL.classList.add("small-text");
    MY_LABEL.classList.remove("large-text");
  });
  mytextarea.addEventListener("focusout", () => {
    if (mytextarea.value === "") {
      MY_LABEL.classList.remove("small-text");
      MY_LABEL.classList.add("large-text");
    }
  });
}

const MY_SEND_BTN = document.getElementById("id_send_btn");
const MY_MODAL = document.getElementById("id_send_modal");
const MY_MODAL_BTN = document.getElementById("id_send_modal_close");

function toggleModal() {
  MY_MODAL.classList.toggle("show-modal");
  console.log("toggle!");
}

function windowOnClick(ev) {
  if (ev.target === MY_MODAL) {
    toggleModal();
  }
}

MY_SEND_BTN.addEventListener("click", (ev) => {
  ev.preventDefault();
  toggleModal();
});

window.addEventListener("click", windowOnClick);
MY_MODAL_BTN.addEventListener("click", toggleModal);
