const gameData = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

let playerName = 0;
let activePlayer = 0;
let currentRound = 1;
let player1Points = 0;
let player2Points = 0;
const players = [
	{
		name: "",
		symbol: "X",
		points: "0",
	},
	{
		name: "",
		symbol: "O",
		points: "0",
	},
];

const PlayerConfigOverlayEle = document.getElementById("config-overlay");
const backdropEle = document.getElementById("backdrop");
const formEle = document.querySelector("form");
const errorsOutput = document.getElementById("Config-error");
const gameAreaEle = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-playername");
const gameOverEle = document.getElementById("game-over");

const editP1 = document.getElementById("edit-p1");
const editP2 = document.getElementById("edit-p2");
const cancleBtn = document.getElementById("cancle-btn");
const startNewGameBtn = document.getElementById("start-game");
const gameFieldEle = document.querySelectorAll("#game-bord li");
const resetBoard = document.getElementById("Reset-game");

editP1.addEventListener("click", openPlayerConfig);
editP2.addEventListener("click", openPlayerConfig);
cancleBtn.addEventListener("click", closePlayerConfig);
backdropEle.addEventListener("click", closePlayerConfig);
formEle.addEventListener("submit", Psave);
resetBoard.addEventListener("click", resetgame1);

startNewGameBtn.addEventListener("click", newGame);

//for (const gameFieldElement of gameFieldEle) {
//	gameFieldElement.addEventListener("click", selectGameField);
//}

const gameBoardEle = document.getElementById("game-bord");

gameBoardEle.addEventListener("click", selectGameField);
