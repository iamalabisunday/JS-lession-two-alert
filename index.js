const clickMe = document.querySelector(".click");
const popupBox = document.querySelector(".popup_box");
const closeBtn = document.querySelector(".btn1");
const deleteBtn = document.querySelector(".btn2");
const atomBox = document.querySelector(".atom_box");
const atomCloseBtn = document.querySelector(".fa-xmark");
const atomBtn = document.querySelector(".btn3");

// Open the popup box on clicking the click me button
clickMe.addEventListener("click", openPopup);

function openPopup(e) {
  e.preventDefault();
  if (clickMe.textContent === "Account Deleted") {
    clickMe.textContent = "Click Me";
  } else {
    popupBox.style.opacity = "1";
    popupBox.style.pointerEvents = "auto";
  }
}

// Close the popup box on clicking the close button
closeBtn.addEventListener("click", closePopup);

function closePopup(e) {
  e.preventDefault();
  popupBox.style.opacity = "0";
  popupBox.style.pointerEvents = "none";
}

// Close the popup box on clicking the delete button
deleteBtn.addEventListener("click", deletePopup);

function deletePopup(e) {
  e.preventDefault();
  atomBox.style.opacity = "1";
  atomBox.style.pointerEvents = "auto";
}

// Close the atom box on clicking the close icon
atomCloseBtn.addEventListener("click", closeAtomBox);

function closeAtomBox(e) {
  e.preventDefault();
  atomBox.style.opacity = "0";
  atomBox.style.pointerEvents = "none";
}

// Close the atom box on clicking the ok button
atomBtn.addEventListener("click", okDelete);

function okDelete(e) {
  e.preventDefault();
  clickMe.textContent = "Account Deleted";

  popupBox.style.opacity = "0";
  popupBox.style.pointerEvents = "none";

  atomBox.style.opacity = "0";
  atomBox.style.pointerEvents = "none";
}
