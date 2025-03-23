document.getElementById("show-bafarada").addEventListener("click", function () {
  document.querySelector(".bafarada-container").classList.add("visible");
  this.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".secondary-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const hiddenInfo = card.querySelector(".secondary-card-hidden-info");

      if (window.matchMedia("(hover: none)").matches) {
        hiddenInfo.classList.toggle("visible");
      }
    });
  });
});
