//This contains info: Arcade matches, Highscore, Average Score, Max 1000 points in a game, Level
var arcadeInfo = JSON.parse(localStorage.getItem("ArcadeStats"));
var arcadeHistory = JSON.parse(localStorage.getItem("ArcadeHistory"));

//Arcade Levels
function arcadeLevel() {
  $(".aLevelH2").html("Level " + arcadeInfo[4]);
  switch (arcadeInfo[4]) {
    case null:
    case 0:
      $("#arcadeUpgrade").html("Matches played:<br><i>" + arcadeInfo[0] + "/3</i>");
      if (arcadeInfo[0] >= 3) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 1:
      $("#arcadeUpgrade").html("Highscore:<br><i>" + arcadeInfo[1] + "/5000</i>");
      if (arcadeInfo[1] >= 5000) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 2:
      $("#arcadeUpgrade").html("Average Score:<br><i>" + Math.round(arcadeInfo[2]) + "/4000</i>");
      if (Math.round(arcadeInfo[2]) >= 4000) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 3:
      $("#arcadeUpgrade").html("1000XP gotten in one game:<br><i>" + arcadeInfo[3] + "/4</i>");
      if (arcadeInfo[3] >= 4) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 4:
      $("#arcadeUpgrade").html("Get less than 1000XP in a match:<br><i>" + Math.min(...arcadeHistory) + "/1000</i>");
      if (Math.min(...arcadeHistory) <= 1000) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 5:
      $("#arcadeUpgrade").html("Highscore:<br><i>" + arcadeInfo[1] + "/6500</i><br>Award: <i><br>More Scenarios</i>");
      if (arcadeInfo[1] >= 6500) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 6:
      $("#arcadeUpgrade").html("Average Score:<br><i>" + Math.round(arcadeInfo[2]) + "/5000</i><br>Award: <i><br>New Background</i>");
      if (Math.round(arcadeInfo[2]) >= 5000) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 7:
      $("#arcadeUpgrade").html("1000XP gotten in one game:<br><i>" + arcadeInfo[3] + "/7</i><br>Award: <i><br>New Music</i>");
      if (arcadeInfo[3] >= 7) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 8:
      $("#arcadeUpgrade").html("Get less than 1000XP in a match:<br><i>" + Math.min(...arcadeHistory) + "/1000</i><br>Award: <i><br>Match length (9 > 10)</i>");
      if (Math.min(...arcadeHistory) <= 1000) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 9:
      $("#arcadeUpgrade").html("Highscore:<br><i>" + arcadeInfo[1] + "/7500</i><br>Award: <i><br>More Scenarios</i>");
      if (arcadeInfo[1] >= 7500) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 9:
      $("#arcadeUpgrade").html("This is the end. There are no more missions.");
      break;
  }
}

function LevelUpA() {
  arcadeInfo[4] = arcadeInfo[4] + 1
  localStorage.setItem("ArcadeStats", JSON.stringify(arcadeInfo));
  $(".aLevelUp").addClass("disabled");
  arcadeLevel();
  $(".aLevelH2").html("Level " + arcadeInfo[4]);
}

//Survival Levels
function survivalLevel() {
  $(".sLevelH2").html("Level " + localStorage.getItem("SurvivalLevel"));
  switch (localStorage.getItem("SurvivalLevel")) {
    case null:
    case 0:
      localStorage.setItem("SurvivalLevel", 0);
      $("#survivalUpgrade").html("Matches played: <i>" + localStorage.getItem("SurvivalMatches") + "/3</i><br>Award: <i>Match length from 5 to 10</i>");
      if (localStorage.getItem("SurvivalMatches") >= 3) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
  }
}

function LevelUpS() {
  let sl = parseInt(localStorage.getItem("SurvivalLevel"));
  localStorage.setItem("SurvivalLevel", sl + 1);
  survivalLevel();
  $(".sLevelH2").html("Level " + localStorage.getItem("SurvivalLevel"));
  $(".sLevelUp").addClass("disabled");
}
