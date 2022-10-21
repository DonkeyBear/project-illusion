let cardBack = document.getElementById("card-back");
let cardFront = document.getElementById("card-front");

cardBack.onclick = () => { swapCard() }

function swapCard() {
  cardBack.classList.toggle("d-none");
  cardFront.classList.toggle("d-none");
  window.onscroll = () => {
    slideOutCard();
    window.onscroll = undefined;
  }
}

function slideOutCard() {
  cardFront.classList.toggle("animate__animated");
  cardFront.classList.toggle("animate__slideOutDown");
  cardFront.classList.toggle("animate__fastest");
  setTimeout(() => { cardFront.classList.toggle("d-none") }, 70);
}