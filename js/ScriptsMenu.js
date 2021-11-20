var btnsfx1;
var btnsfx2;
var btnsfx3;
var egg1 = 0, egg2 = 0, egg3 = 0, egg4 = 0, egg5 = 0, egg6 = 0;
var iframex, iframey;
var flowcharts = localStorage.getObj("Flowcharts");
var z;
var mobile;

let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice) {
  mobile = 2;
} else {
  mobile = 1;
}

if(window.localStorage==undefined){
  alert('Your browser doesn\'t support saving progress. \nTry again in a different browser.');
}

$(window).on("load", function () {
  $(".lds-ellipsis").css("animation", "fadeout .35s forwards");
  setTimeout(function () {$(".lds-ellipsis").css("display", "none")}, 350);
  arcadeLevel();
  survivalLevel();
  switch (localStorage.getObj("sound")) {
    case true:
      btnsfx1 = new Audio("resources/btnsfx1.ogg");
      btnsfx2 = new Audio("resources/btnsfx2.ogg");
      btnsfx3 = new Audio("resources/btnsfx3.ogg");
      $(".btnsoundy").css({ background: "rgba(100,255,100,.5)" });
      setTimeout(function () {$("#home").removeClass("hidden");}, 400);
      break;
    case false:
      $(".btnsoundn").css({ background: "rgba(255,100,100,.5)" });
      setTimeout(function () {$("#home").removeClass("hidden");}, 400);
      break;
    case null:
      if (navigator.userAgent.match(/(Mac|iPhone|iPod|iPad)/i)) {
        sound(1);
      } else {
        $(".card, .settingsClose, .settingsbtn").addClass("hidden");
        setTimeout(function () {$("#setting, .soundpanel").removeClass("hidden");}, 400);
        switchMode();
      }
      break;
  }
  if (navigator.userAgent.match(/(Mac|iPhone|iPod|iPad)/i)) {
    $(".soundpanel").addClass("hidden");
  }
});

//Sound controller
function sound(yn) {
  if (yn == 0) {
    localStorage.setObj("sound", true);
  } else if (yn == 1) {
    localStorage.setObj("sound", false);
  }
  location.reload();
}

//Switcher machanism
function StorySwitch() {
  switchMode();
  $("#story, nav").removeClass("hidden");
  $("body").removeClass("arcade survival");
  $("body").css("background-color", "#5E7668");
  if (localStorage.getObj("sound") == true) {
    btnsfx1.play();
  }
}

function ArcadeSwitch() {
  switchMode();
  $("#arcade, nav").removeClass("hidden");
  $("body").removeClass("story survival");
  $("body").css("background-color", "#8E3E6C");
  if (localStorage.getObj("sound") == true) {
    btnsfx2.play();
  }
}

function SurvivalSwitch() {
  switchMode();
  $("#survival, nav").removeClass("hidden");
  $("body").css("background-color", "#8E3939");
  if (localStorage.getObj("sound") == true) {
    btnsfx3.play();
  }
}

function SettingSwitch() {
  switchMode();
  $("#setting").removeClass("hidden");
  if (localStorage.getObj("sound") != null) {
    $("nav").removeClass("hidden");
  }
  if (localStorage.getObj("sound") == true) {
    btnsfx3.play();
  }
}

function switchMode() {
  $("#home, #story, #arcade, #survival, #stats, #levelInfo, #setting").addClass("hidden");
  $('#title').css({"transform": "translateY(0)", "font-size": "1.5em", "margin-top": "1em"})
}

function StatSwitch() {
  $("#setting").addClass("hidden");
  $("#stats").removeClass("hidden");
  if (localStorage.getObj("sound") == true) {
    btnsfx3.play();
  }
}

function levelInfo(x) {
  if (x == 'a') {
    $(".levelinfop").html("Level 1: Match length (5 > 7)<br/>Level 2: 10 new scenarios<br/>Level 3: New Background<br/>Level 4: New Music<br/>Level 5: Match length (7 > 9)<br/>Level 6: 5 new scenarios<br/>Level 7: New Background<br/>Level 8: New Music<br/>Level 9: Match length (9 > 10)<br/>Level 10: 5 new scenarios");
  }
  if (x == 's') {
    $(".levelinfop").html("Level 1: New Item: Healing potion – Heals you up to 100HP<br/>Level 2: 10 new scenarios<br/>Level 3: New Background<br/>Level 4: New Music<br/> Level 5: New Item: All seeing eye - Reveals how much damage each choice does<br/>Level 6: 5 new scenarios<br/>Level 7: New Background<br/>Level 8: New Item: Shield potion – Any damage taken the following turn will be decreased by 50%<br/>Level 9: New Music<br/>Level 10: 5 new scenarios & Hard mode");
  }
  $("#arcade, #survival").addClass("hidden");
  $("#levelInfo").removeClass("hidden");
  if (localStorage.getObj("sound") == true) {
    btnsfx3.play();
  }
}

//Story mode ending counter
$("#M1").html(`Endings achieved: ${localStorage.getObj("M1-Endings").filter((x) => x == 1).length}/5`);
if (localStorage.getObj("M1-Endings").filter((x) => x == 1).length == 5) {
  $(".finM1").css("fill", "gold");
}
//Mission 2
if (localStorage.getObj("M1-Endings").filter((x) => x == 1).length > 0) {
  $("#M2").html(`Endings achieved: ${localStorage.getObj("M2-Endings").filter((x) => x == 1).length}/10`);
  if (localStorage.getObj("M2-Endings").filter((x) => x == 1).length == 10) {
    $(".finM2").css("fill", "gold");
  }
} else if (localStorage.getObj("M1-Endings").filter((x) => x == 1).length == 0) {
  $("#M2").html("Finish previous mission to unlock");
  $("#M2-play, #M2-flow").addClass("disabled");
}
//Mission 3
if (localStorage.getObj("M2-Endings").filter((x) => x == 1).length > 0) {
  $("#M3").html(`Endings achieved: ${localStorage.getObj("M3-Endings").filter((x) => x == 1).length}/7`);
  if (localStorage.getObj("M3-Endings").filter((x) => x == 1).length == 7) {
    $(".finM3").css("fill", "gold");
  }
} else if (localStorage.getObj("M2-Endings").filter((x) => x == 1).length == 0) {
  $("#M3").html("Finish previous mission to unlock");
  $("#M3-play, #M3-flow").addClass("disabled");
}
//Mission 4
if (localStorage.getObj("M3-Endings").filter((x) => x == 1).length > 0) {
  $("#M4").html(`Conspiracists found: ${localStorage.getObj("M4-Endings").filter((x) => x == 1).length}/3`);
  if (localStorage.getObj("M4-Endings").filter((x) => x == 1).length == 3) {
    $(".finM4").css("fill", "gold");
  }
} else if (localStorage.getObj("M3-Endings").filter((x) => x == 1).length == 0) {
  $("#M4").html("Finish previous mission to unlock");
  $("#M4-play, #M4-flow").addClass("disabled");
}
//Mission 5
if (localStorage.getObj("M4-Endings").filter((x) => x == 1).length > 0) {
  $("#M5").html(`Endings achieved: ${localStorage.getObj("M5-Endings").filter((x) => x == 1).length}/12<br>Failures achieved: ${localStorage.getObj("M5-Failures").filter((x) => x == 1).length}/19`
  );
  if (localStorage.getObj("M5-Endings").filter((x) => x == 1).length == 12 && localStorage.getObj("M5-Failures").filter((x) => x == 1).length == 19) {
    $(".finM5").css("fill", "gold");
  }
} else if (localStorage.getObj("M4-Endings").filter((x) => x == 1).length < 3) {
  $("#M5").html("Find all the conspirators to unlock");
  $("#M5-play, #M5-flow").addClass("disabled");
}
//Mission 6
if (localStorage.getObj("M5-Endings").filter((x) => x == 1).length > 0) {
  $("#M6").html(`Endings achieved: ${localStorage.getObj("M6-Endings").filter((x) => x == 1).length}/3`);
  if (localStorage.getObj("M6-Endings").filter((x) => x == 1).length == 3) {
    $(".finM6").css("fill", "gold");
  }
} else if (localStorage.getObj("M5-Endings").filter((x) => x == 1).length == 0) {
  $("#M6").html("Finish previous mission to unlock");
  $("#M6-play, #M6-flow").addClass("disabled");
}
//Epilogue
if (localStorage.getObj("M6-Endings").filter((x) => x == 1).length != 3) {
  $("#M7-play").addClass("disabled");
}

//Shows flowcharts
function flowchart(x, y, s) {
  iframex = 0;
  iframey = 0;
  z = s;
  $("body").addClass("noscroll");
  if(flowcharts[x-1] == 1) {
    $("#flowchartcard, #close").removeClass("hidden");
    if (x == 1) {
      $("#flowchartflex").html('<iframe src="Story/Scenarios/M1Flow.svg" width="90%" height="90%"></iframe>')
    }
    if (x == 2) {
      $("#flowchartflex").html('<iframe src="Story/Scenarios/M2Flow.svg" width="90%" height="90%"></iframe>')
    }
    if (x == 3) {
      $("#flowchartflex").html('<iframe src="Story/Scenarios/M3Flow.svg" width="90%" height="90%"></iframe>')
    }
    if (x == 4) {
      $("#flowchartflex").html('<iframe src="Story/Scenarios/M4Flow.svg" width="90%" height="90%"></iframe>')
    }
    if (x == 5) {
      $("#flowchartflex").html('<iframe src="Story/Scenarios/M5Flow.svg" width="90%" height="90%"></iframe>')
    }
    if (x == 6) {
      $("#flowchartflex").html('<iframe src="Story/Scenarios/M6Flow.svg" width="90%" height="90%"></iframe>')
    }
    $('#flowchartflex').css("transform", `scale(${z})`);
  }
  else {
    clue(x, y);
  }
}

function showvid() {
  $("#videocard, #close").removeClass("hidden");
  $("#videoflex").html('<video id="silentmov" style="border-radius: 16px" controls><source src="resources/Golly!.webm" type="video/webm">Your browser does not support the video tag.</video>')
}

function clue(x, y) {
  $("#hintcard, #close").removeClass("hidden");
  $("#hinttext").html(`To unlock Flowchart Nr. ${x} find an easter egg.<br>Hint: ${y}`)
}

function closemenu() {
  $("body").removeClass("noscroll");
  $("#flowchartcard, #videocard, #hintcard, #close").addClass("hidden");
  $("#flowchartflex, #videoflex, #hinttext").html('')
}

function right() {
  if(iframey < (40*z*mobile)) {
    iframey += 40;
    $("#flowchartflex").css("transform", `translate(${iframey}%, ${iframex}%) scale(${z})`)
  }
}

function left() {
  if(iframey > -(40*z*mobile)) {
    iframey -= 40;
    $("#flowchartflex").css("transform", `translate(${iframey}%, ${iframex}%) scale(${z})`)
  }
}

function up() {
  if(iframex < (40*z*mobile)) {
    iframex += 20;
    $("#flowchartflex").css("transform", `translate(${iframey}%, ${iframex}%) scale(${z})`)
  }
}

function down() {
  if(iframex > -(40*z*mobile)) {
    iframex -= 20;
    $("#flowchartflex").css("transform", `translate(${iframey}%, ${iframex}%) scale(${z})`)
  }
}

//Tells progress
$("#ArcadeMode").html(`Matches played: ${arcadeStats[0]}<br>Highscore: ${arcadeStats[1]}<br>Average Score: ${Math.round(arcadeStats[2])}<br>1000XP gained in a game: ${arcadeStats[3]}`);
$("#SurvivalMode").html(`Matches played: ${survivalStats[0]}<br>Most scenarios survived: ${survivalStats[1]}<br>Average scenarios survived: ${Math.round(survivalStats[2])}<br>Scenarios survived without taking damage in a row: ${survivalStats[3]}`);

//Clears progress
function resetEverything() {
  localStorage.clear();
  location.reload();
}

function egg(x) {
  if (x == 1) {
    egg1++;
    $("#title > *").addClass("shake");
    setTimeout(function(){$("#title > *").removeClass("shake")}, 200);
    if (egg1 == 3) {
      showvid();
      egg1 = 0;
      flowcharts[0] = 1;
      localStorage.setObj("Flowcharts", flowcharts);
    }
  }
  if (x == 2 && localStorage.getObj("M1-Endings").filter((x) => x == 1).length > 0) {
    egg2++
    $(".me").addClass("shake");
    setTimeout(function(){$(".me").removeClass("shake")}, 200);
    if (egg2 == 3) {
      $(".me").html(`It's-a me,<br>Vytautas Butėnas🥰`)
      egg2 = 0;
      flowcharts[1] = 1;
      localStorage.setObj("Flowcharts", flowcharts);
    }
  }
  if (x == 3 && localStorage.getObj("M2-Endings").filter((x) => x == 1).length > 0) {
    egg3++
    $(".version").addClass("shake");
    setTimeout(function(){$(".version").removeClass("shake")}, 200);
    if (egg3 == 3) {
      flowcharts[2] = 1;
      localStorage.setObj("Flowcharts", flowcharts);
      window.location.href = "egg/oldgame.html";
    }
  }
}