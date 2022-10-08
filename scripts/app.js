//---------------------------------------------------clock work----------------------------------------------------------------//

setInterval(() => {
	let hh = document.getElementById("hh");
	let mm = document.getElementById("mm");
	let ss = document.getElementById("ss");
	let sec_dot = document.querySelector(".sec_dot");
	let min_dot = document.querySelector(".min_dot");
	let hr_dot = document.querySelector(".hr_dot");
	let hrs = document.getElementById("hrs");
	let mins = document.getElementById("mins");
	let secs = document.getElementById("secs");
	let ampm = document.getElementById("ampm");

	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();

	let am = h > 12 ? "PM" : "AM";

	hrs.innerHTML = h;
	mins.innerHTML = m;
	secs.innerHTML = s;

	hh.style.strokeDashoffset = 510 - (510 * h) / 12;

	mm.style.strokeDashoffset = 610 - (610 * m) / 60;

	ss.style.strokeDashoffset = 760 - (760 * s) / 60;

	ampm.innerHTML = am;

	if (h > 12) {
		h = h - 12;
	}

	sec_dot.style.transform = `rotatez(${s * 6}deg`;
	min_dot.style.transform = `rotatez(${m * 6}deg`;
	hr_dot.style.transform = `rotatez(${h * 30}deg`;
});

//---------------------------------------------------clock work----------------------------------------------------------------//

const gameData = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
	{
		name: "",
		symbol: "X",
	},
	{
		name: "",
		symbol: "O",
	},
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const footerElement = document.getElementById("main-footer");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById("game-board");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener("click", selectGameField);
