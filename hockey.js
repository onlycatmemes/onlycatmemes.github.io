/*
const TBL = ["3.46", "2.49", "3.49", "3.07"]
const COL = ["4.15", "2.56", "3.37", "3.10"]

function hometeam() {
let HT = document.getElementById("home").value;
document.getElementById("print").innerHTML = HT;
}

function awayteam() {
let AT = document.getElementById("away").value;
console.log(AT);
}
*/
const TEAMS = [
    {
      name: "TBL",
      stats: ["3.46", "2.49", "3.49", "3.07"]
    },
    {
      name: "COL",
      stats: ["3.46", "2.49", "3.49", "3.07"]
    },
  ]
  
  function hometeam() {
  let HT = document.getElementById("home").value;
  let AT = document.getElementById("away").value;
   
//loop through every team in TEAMS array
    TEAMS.map( team => {
     // if the value from our form is the same as the teams name
      if(HT == team.name) {
        //get stats from array here
        console.log(team.stats)

document.getElementById("print").innerHTML = HT;
      }
    })
  }