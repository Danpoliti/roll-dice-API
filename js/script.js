document.addEventListener("DOMContentLoaded", function () {
  console.log("Ready!");
  document.getElementById("btn-roll").addEventListener("click", rollDice)


  const diceNumber = document.getElementById("random-number");
  const rollMessage = document.getElementById("message");

  // Function to roll the dice and decide which IMG to use according to the dice number
  function rollDice() {
    // Roll Dice API
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
        if (response.data.Dice === 2) {
          var img = "img/inverted-dice-2.svg"
          document.getElementById("img").src = img;
        } else if (response.data.Dice === 1) {
          var img = "img/inverted-dice-1.svg"
          document.getElementById("img").src = img;
        } else if (response.data.Dice === 3) {
          var img = "img/inverted-dice-3.svg"
          document.getElementById("img").src = img;
        } else if (response.data.Dice === 4) {
          var img = "img/inverted-dice-4.svg"
          document.getElementById("img").src = img;
        } else if (response.data.Dice === 5) {
          var img = "img/inverted-dice-5.svg"
          document.getElementById("img").src = img;
        } else if (response.data.Dice === 6) {
          var img = "img/inverted-dice-6.svg"
          document.getElementById("img").src = img;
        }
        rollMessage.innerHTML = response.data.talk;
      })
      .catch((err) => {
        console.error(err);
      });

  }

  rollDice();
});