function gameStart() {

	var playerBet = parseInt(document.getElementById("Bet").value);
	var playerMoney = parseInt(document.getElementById("Bet").value);
	var totalRolls = 0;
	var maxPayout = playerMoney;
	var rollAtMaxPayout = 0;

	while (playerMoney > 0) {
		var die1 = Math.floor(Math.random() * 6) + 1; // rolling die 1
		var die2 = Math.floor(Math.random() * 6) + 1; // rolling die 2
		var dieTotal = die1 + die2; // sum of roll
		totalRolls++; // adding 1 to the total number of rolls
		if (dieTotal == 7){
			playerMoney += 4; // player wins $4.00
		} else {
			playerMoney -= 1; // player loses $1.00
		}
		if (playerMoney > maxPayout) {
			maxPayout = playerMoney; // tracking max possible payout
			rollAtMaxPayout = totalRolls; // tracking when the max possible payout was reached
		}
	}

	if (playerMoney <= 0) {
		results();
		playAgain();

		function results() {
			document.getElementById("Result1").innerHTML = playerBet;
			document.getElementById("Result2").innerHTML = totalRolls;
			document.getElementById("Result3").innerHTML = maxPayout;
			document.getElementById("Result4").innerHTML = rollAtMaxPayout;
		}

		function playAgain() {
			document.getElementById("startingButton").innerHTML = "Play Again?";
		}
	}
