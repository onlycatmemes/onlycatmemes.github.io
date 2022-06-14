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
let homegf, homega, awaygf, awayga, HT, AT, HOT, AOT
const TEAMS = [
    {
     name: "ANA",
     stats: ["2.76", "3.00", "2.8", "3.49"]
    },
    {
      name: "ARI",
      stats: ["2.51", "3.76", "2.51", "3.78"]
    },
    {
      name: "BOS",
      stats: ["3.20", "2.78", "2.98", "2.54"]
    },
    {
      name: "BUF",
      stats: ["2.95", "3.37", "2.63", "3.63"]
    },
    {
      name: "CGY",
      stats: ["3.78", "2.39", "3.32", "2.63"]
    },
    {
      name: "CAR",
      stats: ["3.29", "2.12", "3.46", "2.76"]
    },
    {
      name: "CHI",
      stats: ["2.63", "3.63", "2.56", "3.41"]
    },
    {
      name: "COL",
      stats: ["3.46", "2.49", "3.37", "3.10"]
    },
    {
      name: "CBJ",
      stats: ["3.39", "3.39", "2.9", "3.85"]
    },
    {
      name: "DAL",
      stats: ["3.17", "2.76", "2.51", "3.20"]
    },
    {
      name: "DET",
      stats: ["3.17", "3.76", "2.37", "3.8"]
    },
    {
      name: "EDM",
      stats: ["3.68", "3.10", "3.27", "3.02"]
    },
    {
      name: "FLA",
      stats: ["4.66", "2.90", "3.56", "3.00"]
    },
    {
      name: "LAK",
      stats: ["2.90", "2.76", "2.83", "2.9"]
    },
    {
      name: "MIN",
      stats: ["4.1", "2.93", "3.34", "3.15"]
    },
    {
      name: "MON",
      stats: ["2.66", "3.68", "2.66", "4.05"]
    },
    {
      name: "NSH",
      stats: ["3.1", "2.73", "3.29", "3.37"]
    },
    {
      name: "NJD",
      stats: ["3.02", "3.41", "2.95", "3.95"]
    },
    {
      name: "NYI",
      stats: ["2.9", "2.56", "2.68", "3.07"]
    },
    {
      name: "NYR",
      stats: ["3.15", "2.27", "2.95", "2.71"]
    },
    {
      name: "OTT",
      stats: ["2.71", "3.2", "2.76", "3.24"]
    },
    {
      name: "PHI",
      stats: ["2.78", "3.46", "2.34", "3.71"]
    },
    {
      name: "PIT",
      stats: ["3.51", "2.93", "3.05", "2.49"]
    },
    {
      name: "SJS",
      stats: ["2.56", "3.22", "2.59", "3.15"]
    },
    {
      name: "SEA",
      stats: ["2.63", "3.51", "2.56", "3.41"]
    },
    {
      name: "STL",
      stats: ["3.78", "2.78", "3.76", "3.05"]
    },
    {
      name: "TBL",
      stats: ["3.46", "2.49", "3.49", "3.07"]
    },
    {
      name: "TOR",
      stats: ["3.73", "2.59", "3.88", "3.56"]
    },
    {
      name: "VAN",
      stats: ["3.05", "2.61", "2.95", "3.02"]
    },
    {
      name: "VGK",
      stats: ["3.37", "2.93", "3.02", "3.02"]
    }, {
      name: "WSH",
      stats: ["3.15", "3.1", "3.44", "2.8"]
    }, {
      name: "WPG",
      stats: ["3.41", "2.80", "2.68", "3.37"]
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
  document.getElementById("print").innerHTML = HT + " expected goals: " + (expHG * 60).toFixed(1);
  document.getElementById("print1").innerHTML = AT + " expected goals: " + (expAG * 60).toFixed(1);
  document.getElementById("print2").innerHTML = "Final Score: " + HT + " :" + homeG + " " + AT + " :" + awayG;
  document.getElementById("print3").innerHTML = "";

//overtime
  if (awayG == homeG) {
    document.getElementById("print3").innerHTML = "Game went to Overtime.";
    let expHG = (parseFloat(homegf) + parseFloat(awayga)) / 20 * 1.29;
    let expAG = (parseFloat(homega) + parseFloat(awaygf)) / 20  * 1.29;
    console.log(expAG);
    
      let rand = Math.random();
      if (expHG > rand) { 
        let HOT = 1;
        console.log(HOT + "home");
      }
      let rand2 = Math.random()
      if (expAG > rand2) { 
        let AOT = 1;
        console.log(AOT + "away");
      }
      /*if both teams score in loop
      if (HOT == 1 && AOT == 1) {
        console.log("ti work");
        if (rand > rand2) {
          awayG ++;
          console.log("tie");
          document.getElementById("print4").innerHTML = AT + " wins in overtime " + awayG + " to " + homeG;
          return;
      }
      else if (rand < rand2) {
        homeG ++;
        document.getElementById("print4").innerHTML = HT + " wins in overtime " + homeG + " to " + awayG;
        return;
    }
  }*/
      if (HOT > 0 ) {
        homeG ++;
        console.log("homewin");
        document.getElementById("print4").innerHTML = HT + " wins in overtime " + homeG + " to " + awayG;
      }
      if (valueOf(AOT) > 0) {
        awayG ++;
        console.log("awaywin");
        document.getElementById("print4").innerHTML = AT + " wins in overtime " + awayG + " to " + homeG;
      }
  }
  
}

/* add overtime, and shootout */