const cardElement = document.getElementById("fortune-card");
const generateCharacterButton = document.getElementById("generate-btn");
const closeFortuneBtn = document.getElementById("close-btn");
const fortuneResult = document.getElementById("fortune-result");
const conditionResult = document.getElementById("condition-result");
const avoidResult = document.getElementById("avoid-result");
const itemResult = document.getElementById("item-result");
const adviceResult = document.getElementById("advice-result");

let fortuneData = {};
// I need the {} now because it initialises it as an object
// I'm pulling different values from the JSON file, not just one.

// Loading the JSON thingy
function loadFortunes() {
  fetch("fortunes.json")
    .then((response) => response.json())
    .then((data) => {
      fortuneData = data.fortunes;
    });
}

// Utility to get the random item
function getRandomItemFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Update the card back with the random fortune predictions
function showFortuneOnCardBack() {
  fortuneResult.textContent = getRandomItemFromList(fortuneData.text);
  conditionResult.textContent = getRandomItemFromList(
    fortuneData.onlyAppliesIf
  );
  avoidResult.textContent = getRandomItemFromList(fortuneData.avoid);
  itemResult.textContent = getRandomItemFromList(fortuneData.luckyItem);
  adviceResult.textContent = getRandomItemFromList(fortuneData.crypticAdvice);

  cardElement.classList.add("flipped");
}

// FliP the card
function showCardFront() {
  cardElement.classList.remove("flipped");
}

// Event listeners
generateCharacterButton.addEventListener("click", showFortuneOnCardBack);
closeFortuneBtn.addEventListener("click", showCardFront); //for the x

// Initial load
loadFortunes();
