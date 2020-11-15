const aiChoicePool = ["Rock", "Paper", "Scissors"]

function userClicked(selected) {
  console.log("You choose " + selected)

  //initialize user animations  
  initUserAnimation(selected);

  // get random choice
  const randomChoice = getRandomAiChoice();
  document.getElementById("ai_choice_span").innerHTML = randomChoice;

  //initialize ai animations
  initAiAnimation(randomChoice)

  //compare choices
  const result = compareResults(selected, randomChoice)
  // setTimeout(() => {
  //   alert(result)
  // }, 300);

  document.getElementById("result_span").innerHTML = result;
}

function compareResults(userData, aiData) {
  const aiWin = "You Lose!";
  const userWin = "You win!";
  if (userData === aiData) {
    console.log("Draw!")
    return "Draw"
  }
  if (
    (userData === "Rock" && aiData === "Paper") ||
    (userData === "Paper" && aiData === "Scissors") ||
    (userData === "Scissors" && aiData === "Rock")
  ) {
    console.log("You lose!")
    return aiWin;
  }
  if (
    (userData === "Rock" && aiData === "Scissors") ||
    (userData === "Paper" && aiData === "Rock") ||
    (userData === "Scissors" && aiData === "Paper")
  ) {
    console.log("You win!")
    return userWin;
  }
}

function initUserAnimation(selection) {
  document.getElementById('user_selection').classList.remove("fl-rock", "fl-paper", "fl-scissors", "slide-in-fwd-left")
  const className = "fl-" + selection.toLowerCase()
  setTimeout(() => {
    document.getElementById('user_selection').classList.add(className, "slide-in-fwd-left")
  }, 100);
}

function initAiAnimation(aiChoice) {
  document.getElementById('ai_selection').classList.remove("fl-rock", "fl-paper", "fl-scissors", "slide-in-fwd-right")
  const className = "fl-" + aiChoice.toLowerCase()
  setTimeout(() => {
    document.getElementById('ai_selection').classList.add(className, "slide-in-fwd-right")
  }, 100);
}

function getRandomAiChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  console.log("AI chooses:" + aiChoicePool[randomNumber])
  return aiChoicePool[randomNumber];
}