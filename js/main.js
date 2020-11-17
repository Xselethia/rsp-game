let locked = false;
const results = [{
  text: "DRAW!",
  cssClass: "fl-draw"
}, {
  text: "AI WINS!",
  cssClass: "fl-ai-wins",
}, {
  text: "YOU WIN!",
  cssClass: "fl-user-wins"
}]
const choices = [{
    id: 1,
    animationClass: "fl-rock",
    text: "Rock",
    audio: "./audio/rock.mp3",
    compare: function compare(item) {
      if (item.text === this.text) {
        return results[0];
      }
      if (item.text === "Paper") {
        let result = {
          ...results[1],
          ...{
            item: item
          }
        };
        return result;
      }
      if (item.text === "Scissors") {
        let result = {
          ...results[2],
          ...{
            item: item
          }
        };
        return result;
      }
    }
  },
  {
    id: 2,
    animationClass: "fl-paper",
    text: "Paper",
    audio: "./audio/paper.mp3",
    compare: function compare(item) {
      if (item.text === this.text) {
        return results[0];
      }
      if (item.text === "Rock") {
        let result = {
          ...results[2],
          ...{
            item: item
          }
        };
        return result;
      }
      if (item.text === "Scissors") {
        let result = {
          ...results[1],
          ...{
            item: item
          }
        };
        return result;
      }
    }
  },
  {
    id: 3,
    animationClass: "fl-scissors",
    text: "Scissors",
    audio: "./audio/scissors.mp3",
    compare: function compare(item) {
      if (item.text === this.text) {
        return results[0];
      }
      if (item.text === "Rock") {
        let result = {
          ...results[1],
          ...{
            item: item
          }
        };
        return result;
      }
      if (item.text === "Paper") {
        let result = {
          ...results[2],
          ...{
            item: item
          }
        };
        return result;
      }
    }
  }
]

function userClicked(selectedId) {
  if (locked === true) {
    return;
  }
  locked = true;
  const userChoice = choices.find(t => t.id === selectedId);

  //initialize user animations  
  initUserAnimation(userChoice);

  // get random choice
  const aiChoice = getRandomAiChoice();

  //initialize ai animations
  initAiAnimation(aiChoice)

  //compare choices
  const result = userChoice.compare(aiChoice);
  handleResult(result);
  setTimeout(() => {
    locked = false;
  }, 3000);
}

function initUserAnimation(selection) {
  document.getElementById('user_selection').classList.remove("fl-rock", "fl-paper", "fl-scissors", "slide-in-fwd-left")
  setTimeout(() => {
    const audio = new Audio(selection.audio);
    audio.play();
    document.getElementById('user_selection').classList.add(selection.animationClass, "slide-in-fwd-left");
  }, 100);
}

function initAiAnimation(aiChoice) {
  document.getElementById('ai_selection').classList.remove("fl-rock", "fl-paper", "fl-scissors", "slide-in-fwd-right")
  setTimeout(() => {
    document.getElementById('ai_selection').classList.add(aiChoice.animationClass, "slide-in-fwd-right")
  }, 100);
}

function handleResult(input) {
  document.getElementById("result_span").innerHTML = ""
  document.getElementById("result_span").classList.remove("text-focus-in")
  setTimeout(() => {
    document.getElementById("result_span").innerHTML = input.text;
    document.getElementById("result_span").classList.add("text-focus-in");
  }, 100);
}

function getRandomAiChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const aiChoice = choices[randomNumber];
  return aiChoice;
}