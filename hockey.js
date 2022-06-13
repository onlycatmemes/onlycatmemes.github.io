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
let homegf, homega, awaygf, awayga, HT, AT
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
  HT = document.getElementById("home").value;
//loop through every team in TEAMS array
    TEAMS.map( team => {
     // if the value from our form is the same as the teams name
      if(HT == team.name) {
      homegf = team.stats[0];
      homega = team.stats[1];
      }
    })
  }
  function awayteam() {
    AT = document.getElementById("away").value;
  //loop through every team in TEAMS array
      TEAMS.map( team => {
       // if the value from our form is the same as the teams name
        if(AT == team.name) {
        awaygf = team.stats[2];
        awayga = team.stats[3];
        }
      })
    }

  function run() {
    let expHG = (parseFloat(homegf) + parseFloat(awayga)) / 2 / 60;
    let expAG = (parseFloat(homega) + parseFloat(awaygf)) / 2 / 60;
    let homeG = 0;
    let awayG = 0;
    for (let i = 0; i < 60; i++) {
      let rand = Math.random()
      if (expHG > rand) { 
        homeG ++;
      }
    }
      for (let i = 0; i < 60; i++) {
        let rand = Math.random()
        if (expAG > rand) { 
          awayG ++;
        }
  }
  document.getElementById("print").innerHTML = HT + " expected goals: " + (expHG * 60).toFixed(1)
  document.getElementById("print1").innerHTML = AT + " expected goals: " + (expAG * 60).toFixed(1);
  document.getElementById("print2").innerHTML = "Final Score: " 
  + HT + " :" + homeG + " " + AT + " :" + awayG;
}