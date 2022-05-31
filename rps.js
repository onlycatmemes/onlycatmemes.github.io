var gameData = 
{
    playscore: 0,
    compscore: 0,
    firstto: 0,
    compwon: 0,
    playchoice: 0,
    compchoice: 0,
    compcho:0,
    wintext:0,
    winvalue:3,

}
  
function rock() {
    document.getElementById("roc").style.display = 'none';
    document.getElementById("pap").style.display = 'none';
    document.getElementById("sci").style.display = 'none';
    gameData.playchoice = 1;
    gameData.compchoice = Math.floor((Math.random() * 3) + 1);
    if (gameData.compchoice === 1) {
        document.getElementById("roc").style.display = 'block';
        document.getElementById("roc").disabled = true; 
        gameData.compcho = 'ROCK';
        gameData.wintext = 'Tie!';
        document.getElementById("res").style.display = 'block';
        document.getElementById("compcho").innerHTML = 'Computer Chooses: ' + gameData.compcho + '! You ' + gameData.wintext;
    } 
    else if (gameData.compchoice === 2) {
        document.getElementById("pap").style.display = 'block';
        document.getElementById("pap").disabled = true; 
        gameData.compcho = 'PAPER';
        gameData.wintext = 'Lose!';
        gameData.compscore ++;
        document.getElementById("res").style.display = 'block';
        document.getElementById("compcho").innerHTML = 'Computer Chooses: ' + gameData.compcho + '! You ' + gameData.wintext;
        if (gameData.compscore === gameData.winvalue) {
            document.getElementById("compcho").innerHTML = 
        "Game Over, The Computer Wins Again";
        document.getElementById("res").style.display = 'none';
        document.getElementById("newgame").style.display = 'block';
        }
        else {
            document.getElementById("compscores").innerHTML = 
        "Computer's Score:<br><b><h2>" + gameData.compscore;}

        
    } 
    else if (gameData.compchoice === 3) {
        document.getElementById("sci").style.display = 'block';
        document.getElementById("sci").disabled = true; 
        gameData.compcho = 'SCISSORS';
        gameData.wintext = 'Win!';
        gameData.playscore ++;
        document.getElementById("playscores").innerHTML = 
        "Player's Score:<br><b><h2>" + gameData.playscore;
        document.getElementById("res").style.display = 'block';
        document.getElementById("compcho").innerHTML = 'Computer Chooses: ' + gameData.compcho + '! You ' + gameData.wintext;
    } 
}
function reset() {
    document.getElementById("sci").style.display = 'block';
    document.getElementById("pap").style.display = 'block';
    document.getElementById("roc").style.display = 'block';
    document.getElementById("res").style.display = 'none';
    document.getElementById("compcho").innerHTML = 'Choose one:';
    document.getElementById("roc").disabled = false; 
    document.getElementById("pap").disabled = false; 
    document.getElementById("sci").disabled = false; 
}


  function paper() {
    document.getElementById("roc").style.display = 'none';
    document.getElementById("pap").style.display = 'none';
    document.getElementById("sci").style.display = 'none';
    document.getElementById("compcho").innerHTML = 'Computer Chooses: ';
    gameData.playchoice = 2;
    gameData.compchoice = Math.floor((Math.random() * 3) + 1);
 
  }
  function scissors() {
    document.getElementById("roc").style.display = 'none';
    document.getElementById("pap").style.display = 'none';
    document.getElementById("sci").style.display = 'none';
    document.getElementById("compcho").innerHTML = 'Computer Chooses: ';
    gameData.playchoice = 3;
    gameData.compchoice = Math.floor((Math.random() * 3) + 1);
 
  }

function playchoose() {
  }

function playerwin() {
    playscore += 1
}
function compwin() {
    compscore += 1
}

function playerwon() {
    playwon += 1
}

function compwon() {
    compwon += 1
}