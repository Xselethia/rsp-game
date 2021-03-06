let username = localStorage.getItem("username");
document.getElementById("user1_name").innerHTML = username
document.getElementById("user2_name").innerHTML = "AI"

let userScore = 0;
document.getElementById("user1_score").innerHTML = userScore;
let aiScore = 0;
document.getElementById("user2_score").innerHTML = aiScore;

let locked = false;
const results = [{
  text: "DRAW!",
  cssClass: "fl-draw",
  winner: 0
}, {
  text: "AI WINS!",
  cssClass: "fl-ai-wins",
  winner: 2
}, {
  text: "YOU WIN!",
  cssClass: "fl-user-wins",
  winner: 1
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

  setTimeout(() => {
    if (input.winner == 1) { //user1 wins
      userScore += 1;
      document.getElementById("user1_score").innerHTML = userScore;
    } else if (input.winner == 2) { //AI/user2 wins
      aiScore += 1;
      document.getElementById("user2_score").innerHTML = aiScore;
    }
  }, 500);
}

function getRandomAiChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const aiChoice = choices[randomNumber];
  return aiChoice;
}

// function tableCreate(){
//   var body = document.body,
//       tbl  = document.createElement('table');
//   tbl.style.width  = '100px';
//   tbl.style.border = '1px solid black';

//   for(var i = 0; i < 3; i++){
//       var tr = tbl.insertRow();
//       for(var j = 0; j < 2; j++){
//           if(i == 2 && j == 1){
//               break;
//           } else {
//               var td = tr.insertCell();
//               td.appendChild(document.createTextNode('Cell'));
//               td.style.border = '1px solid black';
//               if(i == 1 && j == 1){
//                   td.setAttribute('rowSpan', '2');
//               }
//           }
//       }
//   }
//   body.appendChild(tbl);
// }
// tableCreate();