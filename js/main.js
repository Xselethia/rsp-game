const aiChoicePool = ["Rock", "Paper", "Scissors"]
function userClicked(params) {
  console.log("You choose " + params)
  const randomNumber = Math.floor(Math.random() * 3)
  console.log("AI chooses:" + aiChoicePool[randomNumber])
  document.getElementById("ai_choice_span").innerHTML = aiChoicePool[randomNumber];
  const result = compareResults(params, aiChoicePool[randomNumber])
  document.getElementById("result_span").innerHTML = result;
}
function compareResults(userData, aiData) {
  if (userData === aiData) {
    console.log("Draw!")
    return "Draw"
  }
  // if (userData)
}