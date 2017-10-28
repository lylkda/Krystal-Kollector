$('document').ready(function(){



//Global Variables
var win = 0;
var losses = 0;
var winScore;
var total = 0;
var kryRed;
var kryBlue;
var kryYellow;
var kryGreen;

//Initialize Function
// function start(){

	$(".krystals").on("click", function(evt) { 
		var val = 0;
		switch(evt.target.id) {
			case "kryred":
			val = kryRed;
			break;

			case "kryblue":
			val = kryBlue;
			break;

			case "krybrown":
			val = kryGreen;
			break;

			case "kryyellow":
			val = kryYellow;
			break;
		}

		total += val;
		update();
		compare();
	})

// $("#kryred").on("click", function(){
// 	total += kryRed;
// 	update();
// 	compare();
// })

// $("#kryblue").on("click", function(){
// 	total += kryBlue;
// 	update();
// 	compare();
// })

// $("#kryyellow").on("click", function(){
// 	total += kryYellow;
// 	update();
// 	compare();
// })

// $("#krybrown").on("click", function(){
// 	total += kryGreen;
// 	update();
// 	compare();

// })


// }

//Update Current Score
function update(){
	$("#current-score").html("<p> " + total + "</p>");
	$("#score").html("<p>Wins: " + win + "</p>" + 
		"<p>Losses: " + losses + "</p>");
}

//Compare Scores
function compare(){
	if (total === winScore){
		reset();
		++win;
		update();
		var sound = $('#winSound');
		sound[0].play();
		alert("NUMBER 1!!!");


	}

	if (total > winScore){
		reset();
		++losses;
		update();
		var sound = $('#loseSound');
		sound[0].play();
		alert("Loser!");
	}
}
//Reset Win Score, Crystals 1-12, Total Score
function reset(){

	kryRed = Math.floor(Math.random()*12+1);
	kryBlue = Math.floor(Math.random()*12+1);
	kryYellow = Math.floor(Math.random()*12+1);
	kryGreen = Math.floor(Math.random()*12+1);
	total = 0;
	update();

	winScore = Math.floor(Math.random()*101+19);

	$("#random-number").html(winScore);
// $("#score").html("<p>Wins: " + win + "</p>" + 
				// "<p>Losses: " + losses + "</p>");

			}
// start();
reset();

})