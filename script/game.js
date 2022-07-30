function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameOverEle.firstElementChild.innerHTML =
        'You Won!,<span id="winner-name">PLAYER Name</span>';
    gameOverEle.style.display = "none";

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] === 0;
            const gameBoardItemEle = gameBoardEle.children[gameBoardIndex];
            gameBoardItemEle.textContent = " ";
            gameBoardItemEle.classList.remove("disabled");
            gameBoardIndex++;
            b5
        }
    }
}

//function resetgame1() {
//$("#active-game").load(window.location.href + " #active-game");
// $("#winner-name").load(window.location.href + " #winner-name");
//$("#game-bord").load(window.location.href + " #game-bord");
//}

function newGame() {

    if (players[0].name === "" || players[1].name === "") {
        alert("please Set Player Names");
        return;
    }

    //$( "#here" ).load(window.location.href + " #here" );
    resetGameStatus();
    activePlayerName.textContent = players[activePlayer].name;
    gameAreaEle.style.display = "block";
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if (event.target.tagName !== "LI") {
        return;
    }

    const selectField = event.target;
    const selectedCol = selectField.dataset.col - 1;
    const selectedRow = selectField.dataset.row - 1;

    //console.dir(event);

    if (gameData[selectedRow][selectedCol] > 0) {
        return;
    }

    event.target.textcontent = players[activePlayer].symbol;
    event.target.innerHTML = players[activePlayer].symbol;

    event.target.classList.add("disabled");

    gameData[selectedRow][selectedCol] = activePlayer + 1;
    //console.log(gameData);

    const winnerId = checkForGameOver();

    if (winnerId !== 0) {
        endGame(winnerId);
    }

    //console.log(winnerId);

    currentRound++;

    switchPlayer();
}

function checkForGameOver() {
    //checking Rows for equality
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }

        //      checking colomn for equality
        for (let i = 0; i < 3; i++) {
            if (
                gameData[0][i] > 0 &&
                gameData[0][i] === gameData[1][i] &&
                gameData[0][i] === gameData[2][i]
            ) {
                return gameData[0][i];
            }
        }

        //checking diagonaly
        if (
            gameData[0][0] > 0 &&
            gameData[0][0] === gameData[1][1] &&
            gameData[1][1] === gameData[2][2]
        ) {
            return gameData[0][0];
        }

        if (
            gameData[2][0] > 0 &&
            gameData[2][0] === gameData[1][1] &&
            gameData[1][1] === gameData[0][2]
        ) {
            return gameData[2][0];
        }

        if (currentRound === 9) {
            return -1;
        }
        return 0;
    }
}

function endGame(winnerId) {
    gameOverEle.style.display = "block";

    if (winnerId > 0) {
        gameOverEle.firstElementChild.firstElementChild.textContent =
            players[winnerId - 1].name;

        if (winnerId - 1 === 0) {
            const p1Points = document.getElementById("p1-points");
            player1Points++;
            p1Points.innerHTML = player1Points;
        } else if (winnerId - 1 === 1) {
            const p2Points = document.getElementById("p2-points");
            player2Points++;
            p2Points.innerHTML = player2Points;
        }
    } else {
        gameOverEle.firstElementChild.textContent = "It's a draw!";
    }
}