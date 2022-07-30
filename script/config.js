function openPlayerConfig(event) {
    playerName = +event.target.dataset.playerid;
    PlayerConfigOverlayEle.style.display = "block";
    backdropEle.style.display = "block";
}

function closePlayerConfig() {
    PlayerConfigOverlayEle.style.display = "none";
    backdropEle.style.display = "none";
    errorsOutput.textContent = "";
    formEle.firstElementChild.classList.remove("error");
    document.getElementById('player-name').innerHTML = "";
    console.dir(formEle);
}

function Psave(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const enteredPname = formData.get("user").trim();
    //	console.log(enteredPname);

    if (!enteredPname) {
        //	|| players[0].name === players[1].name
        event.target.firstElementChild.classList.add("error");
        errorsOutput.textContent = "Please Enter a valid Name";
        return;
    }

    const updatedPLayerData = document.getElementById("player-" + playerName);
    updatedPLayerData.children[1].textContent = enteredPname;

    players[playerName - 1].name = enteredPname;

    closePlayerConfig();
}