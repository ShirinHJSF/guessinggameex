var userInput = prompt("Guess a number!");

var correctNumber = 5;

if (parseInt(userInput) === 5) {
  alert("You Won!");

} else if (parseInt(userInput) < 5) {
  alert("It's too low!");

} else {
  alert("It's too high!");
}
