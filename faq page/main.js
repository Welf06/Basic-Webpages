const accItems = document.querySelectorAll(".accordion__item");

accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

function toggleAcc() {

  accItems.forEach((item) => item != this ? item.classList.remove("accordion__item--active") : null
  );
  if (this.classList != "accordion__item--active") {
    this.classList.toggle("accordion__item--active");
  }
}
