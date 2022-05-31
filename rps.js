//game variables

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
  
//functions for user playing rock

function rock() {
    document.getElementById("roc").style.display = 'none';
    document.getElementById("pap").style.display = 'none';
    document.getElementById("sci").style.display = 'none';
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
        document.getElementById("compscores").innerHTML = 
        "Computer's Score:<br><b><h2>" + gameData.compscore;
        document.getElementById("compcho").innerHTML = 'Computer Chooses: ' + gameData.compcho + '! You ' + gameData.wintext;
        if (gameData.compscore === gameData.winvalue) {
            document.getElementById("compcho").innerHTML = 
        "Game Over, The Computer Wins Again";
        document.getElementById("res").style.display = 'none';
        document.getElementById("newga").style.display = 'block';
        }

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
        if (gameData.playscore === gameData.winvalue) {
            gameData.winvalue += 2;
            document.getElementById("rockrules").innerHTML = '<i>First to <u>' + gameData.winvalue + '</u> wins.</i>'
        }
    } 
}

//function for paper
function paper() {
    document.getElementById("roc").style.display = 'none';
    document.getElementById("pap").style.display = 'none';
    document.getElementById("sci").style.display = 'none';
    gameData.compchoice = Math.floor((Math.random() * 3) + 1);
    if (gameData.compchoice === 1) {
        document.getElementById("pap").style.display = 'block';
        document.getElementById("pap").disabled = true; 
        gameData.compcho = 'PAPER';
        gameData.wintext = 'Tie!';
        document.getElementById("res").style.display = 'block';
        document.getElementById("compcho").innerHTML = 'Computer Chooses: ' + gameData.compcho + '! You ' + gameData.wintext;
    } 
    else if (gameData.compchoice === 2) {
        document.getElementById("sci").style.display = 'block';
        document.getElementById("sci").disabled = true; 
        gameData.compcho = 'SCISSORS';
        gameData.wintext = 'Lose!';
        gameData.compscore ++;
        document.getElementById("res").style.display = 'block';
        document.getElementById("compscores").innerHTML = 
        "Computer's Score:<br><b><h2>" + gameData.compscore;
        document.getElementById("compcho").innerHTML = 'Computer Chooses: ' + gameData.compcho + '! You ' + gameData.wintext;
        if (gameData.compscore === gameData.winvalue) {
            document.getElementById("compcho").innerHTML = 
        "Game Over, The Computer Wins Again";
        document.getElementById("res").style.display = 'none';
        document.getElementById("newga").style.display = 'block';
        }

    } 
    else if (gameData.compchoice === 3) {
        document.getElementById("roc").style.display = 'block';
        document.getElementById("roc").disabled = true; 
        gameData.compcho = 'ROCK';
        gameData.wintext = 'Win!';
        gameData.playscore ++;
        document.getElementById("playscores").innerHTML = 
        "Player's Score:<br><b><h2>" + gameData.playscore;
        document.getElementById("res").style.display = 'block';
        document.getElementById("compcho").innerHTML = 'Computer Chooses: ' + gameData.compcho + '! You ' + gameData.wintext;
        if (gameData.playscore === gameData.winvalue) {
            gameData.winvalue += 2;
            document.getElementById("rockrules").innerHTML = '<i>First to <u>' + gameData.winvalue + '</u> wins.</i>'
        }
    } 
}
//function for scissors
function scissors() {
    document.getElementById("roc").style.display = 'none';
    document.getElementById("pap").style.display = 'none';
    document.getElementById("sci").style.display = 'none';
    gameData.compchoice = Math.floor((Math.random() * 3) + 1);
    if (gameData.compchoice === 1) {
        document.getElementById("sci").style.display = 'block';
        document.getElementById("sci").disabled = true; 
        gameData.compcho = 'SCISSORS';
        gameData.wintext = 'Tie!';
        document.getElementById("res").style.display = 'block';
        document.getElementById("compcho").innerHTML = 'Computer Chooses: ' + gameData.compcho + '! You ' + gameData.wintext;
    } 
    else if (gameData.compchoice === 2) {
        document.getElementById("roc").style.display = 'block';
        document.getElementById("roc").disabled = true; 
        gameData.compcho = 'ROCK';
        gameData.wintext = 'Lose!';
        gameData.compscore ++;
        document.getElementById("res").style.display = 'block';
        document.getElementById("compscores").innerHTML = 
        "Computer's Score:<br><b><h2>" + gameData.compscore;
        document.getElementById("compcho").innerHTML = 'Computer Chooses: ' + gameData.compcho + '! You ' + gameData.wintext;
        if (gameData.compscore === gameData.winvalue) {
            document.getElementById("compcho").innerHTML = 
        "Game Over, The Computer Wins Again";
        document.getElementById("res").style.display = 'none';
        document.getElementById("newga").style.display = 'block';
        }

    } 
    else if (gameData.compchoice === 3) {
        document.getElementById("pap").style.display = 'block';
        document.getElementById("pap").disabled = true; 
        gameData.compcho = 'PAPER';
        gameData.wintext = 'Win!';
        gameData.playscore ++;
        document.getElementById("playscores").innerHTML = 
        "Player's Score:<br><b><h2>" + gameData.playscore;
        document.getElementById("res").style.display = 'block';
        document.getElementById("compcho").innerHTML = 'Computer Chooses: ' + gameData.compcho + '! You ' + gameData.wintext;
        if (gameData.playscore === gameData.winvalue) {
            gameData.winvalue += 2;
            document.getElementById("rockrules").innerHTML = '<i>First to <u>' + gameData.winvalue + '</u> wins.</i>'
        }
    } 
}

//reset button function
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
//new game button function
function newgame() {
    gameData.playscore = 0;
    gameData.compscore = 0;
    gameData.firstto = 0;
    gameData.compwon ++;
    gameData.playchoice = 0;
    gameData.compchoice = 0;
    gameData.compcho = 0;
    gameData.wintext = 0;
    gameData.winvalue = 3;
    document.getElementById("sci").style.display = 'block';
    document.getElementById("pap").style.display = 'block';
    document.getElementById("roc").style.display = 'block';
    document.getElementById("res").style.display = 'none';
    document.getElementById("compcho").innerHTML = 'Choose one:';
    document.getElementById("roc").disabled = false; 
    document.getElementById("pap").disabled = false; 
    document.getElementById("sci").disabled = false; 
    document.getElementById("newga").style.display = 'none';
    document.getElementById("playscores").innerHTML = 
    "Player's Score:<br><b><h2>" + gameData.playscore;
    document.getElementById("compscores").innerHTML = 
    "Computer's Score:<br><b><h2>" + gameData.playscore;
    document.getElementById("compwins").style.display = 'block';
    document.getElementById("compwins").innerHTML = "Computer has won " + gameData.compwon + " game(s).";
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