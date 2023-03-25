var randnum_player_1 = Math.floor(Math.random() * 6) + 1;

var player_1 = "images/dice" + randnum_player_1 + ".png";

var image_1 = document.querySelectorAll("img")[0];
image_1.setAttribute("src", player_1);



var randnum_player_2 = Math.floor(Math.random() * 6) + 1;

var player_2 = "images/dice" + randnum_player_2 + ".png";

var image_2 = document.querySelectorAll("img")[1];
image_2.setAttribute("src", player_2);


if (randnum_player_1 > randnum_player_2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randnum_player_1 < randnum_player_2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "The Match Ties!";
}