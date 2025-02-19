document.addEventListener("DOMContentLoaded", function () {
  const countElement = document.getElementById("count");
  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("minus");

  // Ensure the elements exist
  if (!plusButton || !minusButton || !countElement) {
    console.log("Some elements are missing");
    return;
  }

  let count = 0;

  plusButton.addEventListener("click", () => {
    count++;
    countElement.textContent = count;
  });

  minusButton.addEventListener("click", () => {
    if (count > 0) {
      count--;
      countElement.textContent = count;
    }
  });

  // DROPDOWN
  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  const dropdownContents = document.querySelectorAll(".dropdown-content");

  dropdownButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const content = dropdownContents[index];
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
