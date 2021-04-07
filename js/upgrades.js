//This contains info: Arcade matches, Highscore, Average Score, Max 1000 points in a game, Level
if (!localStorage.getObj("ArcadeStats")) {localStorage.setObj("ArcadeStats", [0, 0, 0, 0, 0]);}
if (!localStorage.getObj("ArcadeHistory")) {localStorage.setObj("ArcadeHistory", []);}
var ahistory = localStorage.getObj("ArcadeHistory");
//todo: switch level to end
//This contains info: Survival matches, Max survived, Average survival, Max times in a row without taking damage, Level, Max HP healed, Hp protected
if (!localStorage.getObj("SurvivalStats")) {localStorage.setObj("SurvivalStats", [0, 0, 0, 0, 0, 0, 0])}
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
      $("#arcadeUpgrade").html("Highscore:<br><i>" + arcadeStats[1] + "/6500</i>");
      if (arcadeStats[1] >= 6500) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 6:
      $("#arcadeUpgrade").html("Average Score:<br><i>" + Math.round(arcadeStats[2]) + "/5000</i>");
      if (Math.round(arcadeStats[2]) >= 5000) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 7:
      $("#arcadeUpgrade").html("1000XP gotten in one game:<br><i>" + arcadeStats[3] + "/7</i>");
      if (arcadeStats[3] >= 7) {
        $(".aLevelUp").removeClass("disabled");
      }
      break;
    case 8:
      $("#arcadeUpgrade").html("Get less than 1000XP in a match:<br><i>" + Math.min(...arcadeHistory) + "/1000</i>");
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
  $(".aLevelUp").addClass("disabled");
  arcadeLevel();
  document.activeElement.blur()
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
      $("#survivalUpgrade").html("Survive at least 6 scenarios:<br><i>" + survivalStats[1] + "/6</i>");
      if (survivalStats[1] >= 6) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 2:
      $("#survivalUpgrade").html("Scenarios survived on average:<br><i>" + Math.round(survivalStats[2]) + "/5</i>");
      if (Math.round(survivalStats[2]) >= 5) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 3:
      $("#survivalUpgrade").html("Scenarios survived without taking damage in a row:<br><i>" + survivalStats[3] + "/4</i>");
      if (survivalStats[3] >= 4) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 4:
      $("#survivalUpgrade").html("Heal for 80HP or more in one match:<br><i>" + survivalStats[5] + "/80</i>");
      if (survivalStats[5] >= 80) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 5:
      $("#survivalUpgrade").html("Survive at least 12 scenarios:<br><i>" + survivalStats[1] + "/12</i>");
      if (survivalStats[1] >= 12) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 6:
      $("#survivalUpgrade").html("Scenarios survived on average:<br><i>" + Math.round(survivalStats[2]) + "/10</i>");
      if (Math.round(survivalStats[2]) >= 10) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 7:
      $("#survivalUpgrade").html("Scenarios survived without taking damage in a row:<br><i>" + survivalStats[3] + "/7</i>");
      if (survivalStats[3] >= 7) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 8:
      $("#survivalUpgrade").html("Have a shield protect you from 333 damage<br><i>" + survivalStats[6] + "/333</i>");
      if (survivalStats[6] == 333) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 9:
      $("#survivalUpgrade").html("Survive 25 scenarios:<br><i>" + survivalStats[1] + "/25</i>");
      if (survivalStats[1] >= 25) {
        $(".sLevelUp").removeClass("disabled");
      }
      break;
    case 9:
      $("#survivalUpgrade").html("This is the end. There are no more missions.");
      break;
  }
}

function LevelUpS() {
  survivalStats[4] = survivalStats[4] + 1
  localStorage.setObj("SurvivalStats", survivalStats);
  $(".sLevelUp").addClass("disabled");
  survivalLevel();
  document.activeElement.blur()
}
