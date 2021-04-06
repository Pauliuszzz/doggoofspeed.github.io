//This contains info: Arcade matches, Highscore, Average Score, Max 1000 points in a game, Level
if (!localStorage.getObj("ArcadeStats")) {localStorage.setObj("ArcadeStats", [0, 0, 0, 0, 0]);}
if (!localStorage.getObj("ArcadeHistory")) {localStorage.setObj("ArcadeHistory", []);}
var ahistory = localStorage.getObj("ArcadeHistory");
//This contains info: Survival matches, Max survived, Average survival, Max times in a row without taking damage, Level
if (!localStorage.getObj("SurvivalStats")) {localStorage.setObj("SurvivalStats", [0, 0, 0, 0, 0])}
if (!localStorage.getObj("SurvivalHistory")) {localStorage.setObj("SurvivalHistory", [])}
var shistory = localStorage.getObj("SurvivalHistory");
if (!localStorage.getObj("M1-Endings")) {localStorage.setObj("M1-Endings", [0, 0, 0, 0, 0])}
if (!localStorage.getObj("M2-Endings")) {localStorage.setObj("M2-Endings", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])}
if (!localStorage.getObj("M3-Endings")) {localStorage.setObj("M3-Endings", [0, 0, 0, 0, 0, 0, 0])}
if (!localStorage.getObj("M4-Endings")) {localStorage.setObj("M4-Endings", [0, 0, 0])}
if (!localStorage.getObj("M5-Endings")) {localStorage.setObj("M5-Endings", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])}
if (!localStorage.getObj("M5-Failures")) {localStorage.setObj("M5-Failures", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])}

//This contains info: Arcade matches, Highscore, Average Score, Max 1000 points in a game, Level
var arcadeStats = localStorage.getObj("ArcadeStats");
var arcadeHistory = localStorage.getObj("ArcadeHistory");
//This contains info: Survival matches, Max survived, Average survival, Max times in a row without taking damage, Level
var survivalStats = localStorage.getObj("SurvivalStats");
var survivalHistory = localStorage.getObj("SurvivalHistory");

//Arcade Levels
function arcadeLevel() {
  $(".aLevelH2").html("Level " + arcadeStats[4]);
  switch (arcadeStats[4]) {
    case null:
    case 0:
      $("#arcadeUpgrade").html("Matches played:<br><i>" + arcadeStats[0] + "/3</i>");
      if (arcadeStats[0] >= 3) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 1:
      $("#arcadeUpgrade").html("Highscore:<br><i>" + arcadeStats[1] + "/5000</i>");
      if (arcadeStats[1] >= 5000) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 2:
      $("#arcadeUpgrade").html("Average Score:<br><i>" + Math.round(arcadeStats[2]) + "/4000</i>");
      if (Math.round(arcadeStats[2]) >= 4000) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 3:
      $("#arcadeUpgrade").html("1000XP gotten in one game:<br><i>" + arcadeStats[3] + "/4</i>");
      if (arcadeStats[3] >= 4) {
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
      $("#arcadeUpgrade").html("Highscore:<br><i>" + arcadeStats[1] + "/6500</i><br>Award: <i><br>More Scenarios</i>");
      if (arcadeStats[1] >= 6500) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 6:
      $("#arcadeUpgrade").html("Average Score:<br><i>" + Math.round(arcadeStats[2]) + "/5000</i><br>Award: <i><br>New Background</i>");
      if (Math.round(arcadeStats[2]) >= 5000) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 7:
      $("#arcadeUpgrade").html("1000XP gotten in one game:<br><i>" + arcadeStats[3] + "/7</i><br>Award: <i><br>New Music</i>");
      if (arcadeStats[3] >= 7) {
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
      $("#arcadeUpgrade").html("Highscore:<br><i>" + arcadeStats[1] + "/7500</i><br>Award: <i><br>More Scenarios</i>");
      if (arcadeStats[1] >= 7500) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 9:
      $("#arcadeUpgrade").html("This is the end. There are no more missions.");
      break;
  }
}

function LevelUpA() {
  arcadeStats[4] = arcadeStats[4] + 1
  localStorage.setObj("ArcadeStats", arcadeStats);
  arcadeLevel();
  $(".aLevelUp").addClass("disabled");
}

//Survival Levels
function survivalLevel() {
  $(".sLevelH2").html("Level " + survivalStats[4]);
  switch (survivalStats[4]) {
    case null:
    case 0:
      $("#survivalUpgrade").html("Matches played:<br><i>" + survivalStats[0] + "/3</i>");
      if (survivalStats[0] >= 3) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 1:
      $("#survivalUpgrade").html("Survive at least 8 scenarios:<br><i>" + survivalStats[1] + "/8</i>");
      if (survivalStats[1] >= 8) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 2:
      $("#arcadeUpgrade").html("Scenarios survived on average:<br><i>" + Math.round(survivalStats[2]) + "/4000</i>");
      if (Math.round(survivalStats[2]) >= 4000) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 3:
      $("#arcadeUpgrade").html("Scenarios survived without taking damage in a row:<br><i>" + arcadeStats[3] + "/4</i>");
      if (arcadeStats[3] >= 4) {
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
      $("#arcadeUpgrade").html("Highscore:<br><i>" + arcadeStats[1] + "/6500</i><br>Award: <i><br>More Scenarios</i>");
      if (arcadeStats[1] >= 6500) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 6:
      $("#arcadeUpgrade").html("Average Score:<br><i>" + Math.round(arcadeStats[2]) + "/5000</i><br>Award: <i><br>New Background</i>");
      if (Math.round(arcadeStats[2]) >= 5000) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 7:
      $("#arcadeUpgrade").html("1000XP gotten in one game:<br><i>" + arcadeStats[3] + "/7</i><br>Award: <i><br>New Music</i>");
      if (arcadeStats[3] >= 7) {
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
      $("#arcadeUpgrade").html("Highscore:<br><i>" + arcadeStats[1] + "/7500</i><br>Award: <i><br>More Scenarios</i>");
      if (arcadeStats[1] >= 7500) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 9:
      $("#arcadeUpgrade").html("This is the end. There are no more missions.");
      break;
  }
}

function LevelUpS() {
  survivalStats[4] = survivalStats[4] + 1
  localStorage.setObj("SurvivalStats", survivalStats);
  survivalLevel();
  $(".sLevelUp").addClass("disabled");
}
