var gameData = 
{
    playscore: 0,
    compscore: 0,
    playwon: 0,
    compwon: 0,
    playchoice: 0,
    compchoice: 0,
    compcho:0,
  }
  
  function rock() {
    document.getElementById("roc").style.display = 'none';
    document.getElementById("pap").style.display = 'none';
    document.getElementById("sci").style.display = 'none';
    gameData.playchoice = 1;
    gameData.compchoice = Math.floor((Math.random() * 3) + 1);
    if (gameData.compchoice === 1) {
        document.getElementById("roc").style.display = 'block';
        gameData.compcho = 'ROCK';
    } 
document.getElementById("compcho").innerHTML = 'Computer Chooses: ' + gameData.compcho + gameData.compchoice;
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