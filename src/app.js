const suits = ["♦", "♥", "♠", "♣"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const card = document.getElementById("card");
const topSuit = document.getElementById("top-suit");
const bottomSuit = document.getElementById("bottom-suit");
const value = document.getElementById("value");
const newCardBtn = document.getElementById("newCardBtn");

const resizeBtn = document.getElementById("resizeBtn");
const cardWidthInput = document.getElementById("cardWidth");
const cardHeightInput = document.getElementById("cardHeight");

function generateCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  topSuit.textContent = randomSuit;
  bottomSuit.textContent = randomSuit;
  value.textContent = randomValue;

  card.className = "card";

  if (randomSuit === "♥") card.classList.add("heart");
  if (randomSuit === "♦") card.classList.add("diamond");
  if (randomSuit === "♠") card.classList.add("spade");
  if (randomSuit === "♣") card.classList.add("club");
}

window.onload = generateCard;
newCardBtn.addEventListener("click", generateCard);
setInterval(generateCard, 10000);

resizeBtn.addEventListener("click", () => {
  const width = cardWidthInput.value;
  const height = cardHeightInput.value;

  if (width) card.style.width = width + "px";
  if (height) card.style.height = height + "px";
});
