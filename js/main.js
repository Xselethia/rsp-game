const choices = [{
    id: 1,
    animationClass: "fl-rock",
    text: "Rock",
    compare: function compare(item) {
      if (item.text === this.text) {
        return {
          text: "Draw",
          animationClass: "fl-draw"
        }
      }
      if (item.text === "Paper") {
        return item;
      }
      if (item.text === "Scissors") {
        return this;
      }
    }
  },
  {
    id: 2,
    animationClass: "fl-paper",
    text: "Paper",
    compare: function compare(item) {
      if (item.text === this.text) {
        return {
          text: "Draw",
          animationClass: "fl-draw"
        }
      }
      if (item.text === "Rock") {
        return this;
      }
      if (item.text === "Scissors") {
        return item;
      }
    }
  },
  {
    id: 3,
    animationClass: "fl-scissors",
    text: "Scissors",
    compare: function compare(item) {
      if (item.text === this.text) {
        return {
          text: "Draw",
          animationClass: "fl-draw"
        }
      }
      if (item.text === "Rock") {
        return item;
      }
      if (item.text === "Paper") {
        return this;
      }
    }
  }
]

function userClicked(selectedId) {
  const userChoice = choices.find(t => t.id === selectedId);
  console.log("You choose " + selectedId)

  //initialize user animations  
  initUserAnimation(userChoice);

  // get random choice
  const aiChoice = getRandomAiChoice();
  // document.getElementById("ai_choice_span").innerHTML = randomChoice;

  //initialize ai animations
  initAiAnimation(aiChoice)

  //compare choices
  const result = userChoice.compare(aiChoice);
  //compareResults(userChoice, aiChoice)
  // setTimeout(() => {
  //   alert(result)
  // }, 300);
  handleResult(result)
}

function compareResults(userData, aiData) {
  debugger;
  let aiWin = "You Lose!"
  const userWin = "You win!";
  const draw = "Draw!";
  if (userData === aiData) {
    console.log("Draw!")
    return draw;
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
  setTimeout(() => {
    document.getElementById('user_selection').classList.add(selection.animationClass, "slide-in-fwd-left")
  }, 100);
}

function initAiAnimation(aiChoice) {
  document.getElementById('ai_selection').classList.remove("fl-rock", "fl-paper", "fl-scissors", "slide-in-fwd-right")
  setTimeout(() => {
    document.getElementById('ai_selection').classList.add(aiChoice.animationClass, "slide-in-fwd-right")
  }, 100);
}

function handleResult(input) {
  debugger;
  document.getElementById("result_span").innerHTML = ""
  document.getElementById("result_span").classList.remove("text-focus-in")
  setTimeout(() => {
    debugger;
    document.getElementById("result_span").innerHTML = input;
    document.getElementById("result_span").classList.add("text-focus-in")
  }, 100);
}

function getRandomAiChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  console.log("AI chooses:" + choices[randomNumber]);
  const aiChoice = choices[randomNumber];
  return aiChoice;
}