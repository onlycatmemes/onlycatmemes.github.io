var gameData = 
{
    playscore: 0,
    compscore: 0,
    playwon: 0,
    compwon: 0,
    playchoice: 0,
    compchoice: 0,
  }
  function rock() {
rock() style.visibility = 'hidden';
paper() style.display = 0;
scissors() style.display = 0;
  playchoice = 1;
  compchoice = Math.floor((Math.random() * 3) + 1);
  compcho Text = "Computer chooses";

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