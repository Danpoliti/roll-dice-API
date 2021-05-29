document.addEventListener("DOMContentLoaded", function () {
    console.log("Ready!");
    document.getElementById("btn-roll").addEventListener("click", rollDice)
  
  
    const diceNumber = document.getElementById("random-number");
    const rollMessage = document.getElementById("message");
  
    function rollDice() {
      fetch("https://roll-dice1.p.rapidapi.com/rollDice", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "09b5d21645msh4b1a9dba5edf175p1bb3d6jsnb0e63d854304",
          "x-rapidapi-host": "roll-dice1.p.rapidapi.com"
        }
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response.data);
          diceNumber.innerHTML = response.data.Dice;
          rollMessage.innerHTML = response.data.talk;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  
    rollDice();
  });