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
     name: "ANA",
     stats: ["2.76", "3.00", "3.49", "3.07"]
    },
    {
      name: "ARI",
      stats: ["2.51", "3.76", "3.49", "3.07"]
    },
    {
      name: "BOS",
      stats: ["3.20", "2.78", "3.49", "3.07"]
    },
    {
      name: "BUF",
      stats: ["2.95", "3.37", "3.49", "3.07"]
    },
    {
      name: "CGY",
      stats: ["3.78", "2.39", "3.49", "3.07"]
    },
    {
      name: "CAR",
      stats: ["3.29", "2.12", "3.49", "3.07"]
    },
    {
      name: "CHI",
      stats: ["2.63", "3.63", "3.49", "3.07"]
    },
    {
      name: "COL",
      stats: ["3.46", "2.49", "3.49", "3.07"]
    },
    {
      name: "CBJ",
      stats: ["3.39", "3.39", "3.49", "3.07"]
    },
    {
      name: "DAL",
      stats: ["3.17", "2.76", "3.49", "3.07"]
    },
    {
      name: "DET",
      stats: ["3.17", "3.76", "3.49", "3.07"]
    },
    {
      name: "EDM",
      stats: ["3.68", "3.10", "3.49", "3.07"]
    },
    {
      name: "FLA",
      stats: ["4.66", "2.90", "3.49", "3.07"]
    },
    {
      name: "LAK",
      stats: ["2.90", "2.76", "3.49", "3.07"]
    },
    {
      name: "MIN",
      stats: ["4.1", "2.93", "3.49", "3.07"]
    },
    {
      name: "MON",
      stats: ["2.66", "3.68", "3.49", "3.07"]
    },
    {
      name: "NSH",
      stats: ["3.1", "2.73", "3.49", "3.07"]
    },
    {
      name: "NJD",
      stats: ["3.02", "3.41", "3.49", "3.07"]
    },
    {
      name: "NYI",
      stats: ["2.9", "2.56", "3.49", "3.07"]
    },
    {
      name: "NYR",
      stats: ["3.15", "2.27", "3.49", "3.07"]
    },
    {
      name: "OTT",
      stats: ["2.71", "3.2", "3.49", "3.07"]
    },
    {
      name: "PHI",
      stats: ["2.78", "3.46", "3.49", "3.07"]
    },
    {
      name: "PIT",
      stats: ["3.51", "2.93", "3.49", "3.07"]
    },
    {
      name: "SJS",
      stats: ["2.56", "3.22", "3.49", "3.07"]
    },
    {
      name: "SEA",
      stats: ["2.63", "3.51", "3.49", "3.07"]
    },
    {
      name: "STL",
      stats: ["3.78", "2.78", "3.49", "3.07"]
    },
    {
      name: "TBL",
      stats: ["3.46", "2.49", "3.49", "3.07"]
    },
    {
      name: "TOR",
      stats: ["3.73", "2.59", "3.49", "3.07"]
    },
    {
      name: "VAN",
      stats: ["3.05", "2.61", "3.49", "3.07"]
    },
    {
      name: "VGK",
      stats: ["3.37", "2.93", "3.49", "3.07"]
    }, {
      name: "WAS",
      stats: ["3.15", "3.1", "3.49", "3.07"]
    }, {
      name: "WPG",
      stats: ["3.41", "2.80", "3.49", "3.07"]
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