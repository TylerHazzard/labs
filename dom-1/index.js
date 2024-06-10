document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const menuOptions = document.querySelector(".menu-options");
    const lettersOption = document.getElementById("letters-option");
    const numbersOption = document.getElementById("numbers-option");
    const lettersContent = document.getElementById("letters-content");
    const numbersContent = document.getElementById("numbers-content");

    menuButton.addEventListener("click", function() {
      menuOptions.style.display = menuOptions.style.display === "block" ? "none" : "block";
    });

    lettersOption.addEventListener("click", function(event) {
      event.preventDefault();
      menuOptions.style.display = "none";
      lettersContent.classList.remove("hidden");
      numbersContent.classList.add("hidden");
    });

    numbersOption.addEventListener("click", function(event) {
      event.preventDefault();
      menuOptions.style.display = "none";
      lettersContent.classList.add("hidden");
      numbersContent.classList.remove("hidden");
    });
  });