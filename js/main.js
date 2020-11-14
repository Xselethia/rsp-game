const aiChoicePool = ["Rock", "Paper", "Scissors"]


function rockClicked() {
  console.log("You choose 'Rock'")
  const randomNumber = Math.floor(Math.random() * 3)
  console.log("AI chooses:" + aiChoicePool[randomNumber])
  document.getElementById("ai_choice_span").innerHTML = aiChoicePool[randomNumber];
}
function paperClicked() {
  console.log("You choose 'Paper'")
  const randomNumber = Math.floor(Math.random() * 3)
  console.log("AI chooses:" + aiChoicePool[randomNumber])
  document.getElementById("ai_choice_span").innerHTML = aiChoicePool[randomNumber];
}
function scissorsClicked() {
  console.log("You choose 'Scissors'")
  const randomNumber = Math.floor(Math.random() * 3)
  console.log("AI chooses:" + aiChoicePool[randomNumber])
  document.getElementById("ai_choice_span").innerHTML = aiChoicePool[randomNumber];
}