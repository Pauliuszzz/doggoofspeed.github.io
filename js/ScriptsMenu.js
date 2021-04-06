var btnsfx1;
var btnsfx2;
var btnsfx3;

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
      $(".btnsoundy").css({ background: "rgba(100,255,100,0.5)" });
      setTimeout(function () {$("#home").removeClass("hidden");}, 400);
      break;
    case false:
      $(".btnsoundn").css({ background: "rgba(255,100,100,0.5)" });
      setTimeout(function () {$("#home").removeClass("hidden");}, 400);
      break;
    case null:
      if (navigator.userAgent.match(/(Mac|iPhone|iPod|iPad)/i)) {
        sound(1);
      } else {
        $(".card, .settingsClose, .settingsbtn").addClass("hidden");
        setTimeout(function () {$("#setting, .soundpanel").removeClass("hidden");}, 400);
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
  $("#home, #arcade, #survival, #setting, #stats, #levelInfo").addClass("hidden");
  $("#story, nav").removeClass("hidden");
  $("body").removeClass("arcade survival");
  $("body").css("background-color", "#5E7668");
  $(".modes").css("margin-bottom", "4em");
  if (localStorage.getObj("sound") == "true") {
    btnsfx1.play();
  }
}

function ArcadeSwitch() {
  $("#home, #story, #survival, #setting, #stats, #levelInfo").addClass("hidden");
  $("#arcade, nav").removeClass("hidden");
  $("body").removeClass("story survival");
  $("body").css("background-color", "#8E3E6C");
  $(".modes").css("margin-bottom", "4em");
  if (localStorage.getObj("sound") == "true") {
    btnsfx2.play();
  }
}

function SurvivalSwitch() {
  $("#home, #story, #arcade, #setting, #stats, #levelInfo").addClass("hidden");
  $("#survival, nav").removeClass("hidden");
  $("body").css("background-color", "#8E3939");
  $(".modes").css("margin-bottom", "4em");
  if (localStorage.getObj("sound") == "true") {
    btnsfx3.play();
  }
}

function SettingSwitch() {
  $("#home, #story, #arcade, #survival, #stats, #levelInfo").addClass("hidden");
  $("#setting").removeClass("hidden");
  if (localStorage.getObj("sound") != null) {
    $("nav").removeClass("hidden");
  }
  if (localStorage.getObj("sound") == "true") {
    btnsfx3.play();
  }
}

function StatSwitch() {
  $("#setting").addClass("hidden");
  $("#stats").removeClass("hidden");
  if (localStorage.getObj("sound") == "true") {
    btnsfx3.play();
  }
}

function levelInfo() {
  $("#arcade, #survival").addClass("hidden");
  $("#levelInfo").removeClass("hidden");
  if (localStorage.getObj("sound") == "true") {
    btnsfx3.play();
  }
}

//Story mode ending counter
$("#M1").html("Endings achieved: " + localStorage.getObj("M1-Endings").filter((x) => x == 1).length + "/5");
if (localStorage.getObj("M1-Endings").filter((x) => x == 1).length == 5) {
  $(".finM1").css("fill", "gold");
}
//Mission 2
if (localStorage.getObj("M1-Endings").filter((x) => x == 1).length > 0) {
  $("#M2").html("Endings achieved: " + localStorage.getObj("M2-Endings").filter((x) => x == 1).length + "/10");
  if (localStorage.getObj("M2-Endings").filter((x) => x == 1).length == 10) {
    $(".finM2").css("fill", "gold");
  }
} else if (localStorage.getObj("M1-Endings").filter((x) => x == 1).length == 0) {
  $("#M2").html("Finish previous missions to unlock");
  $("#M2-play").addClass("disabled");
}
//Mission 3
if (localStorage.getObj("M2-Endings").filter((x) => x == 1).length > 0) {
  $("#M3").html("Endings achieved: " + localStorage.getObj("M3-Endings").filter((x) => x == 1).length + "/7");
  if (localStorage.getObj("M3-Endings").filter((x) => x == 1).length == 7) {
    $(".finM3").css("fill", "gold");
  }
} else if (localStorage.getObj("M2-Endings").filter((x) => x == 1).length == 0) {
  $("#M3").html("Finish previous missions to unlock");
  $("#M3-play").addClass("disabled");
}
//Mission 4
if (localStorage.getObj("M3-Endings").filter((x) => x == 1).length > 0) {
  $("#M4").html("Conspiracists found: " + localStorage.getObj("M4-Endings").filter((x) => x == 1).length + "/3");
  if (localStorage.getObj("M4-Endings").filter((x) => x == 1).length == 3) {
    $(".finM4").css("fill", "gold");
  }
} else if (localStorage.getObj("M3-Endings").filter((x) => x == 1).length == 0) {
  $("#M4").html("Finish previous missions to unlock");
  $("#M4-play").addClass("disabled");
}
//Mission 5
if (localStorage.getObj("M4-Endings").filter((x) => x == 1).length > 2) {
  $("#M5").html("Endings achieved: " + localStorage.getObj("M5-Endings").filter((x) => x == 1).length + "/12<br>Failures achieved: " + localStorage.getObj("M5-Failures").filter((x) => x == 1).length + "/17"
  );
  if (localStorage.getObj("M5-Endings").filter((x) => x == 1).length == 12 && localStorage.getObj("M4-Failures").filter((x) => x == 1).length == 17) {
    $(".finM5").css("fill", "gold");
  }
} else if (localStorage.getObj("M4-Endings").filter((x) => x == 1).length < 3) {
  $("#M5").html("Find all the conspirators to unlock");
  $("#M5-play").addClass("disabled");
}

//Tells progress
$("#ArcadeMode").html("Highscore: " + arcadeStats[1] + "<br>Average Score: " + Math.round(arcadeStats[2]) + "<br>Matches played: " + arcadeStats[0]);
//This contains info: Survival matches, Max survived, Average survival, Max times in a row without taking damage, Level
$("#SurvivalMode").html("Matches played: " + survivalStats[0] + "<br>Most scenarios survived: " + survivalStats[1] + "<br>Average scenarios survived: " + Math.round(survivalStats[2]) + "<br>Scenarios survived without taking damage in a row: " + survivalStats[3]);

//Clears progress
function resetEverything() {
  localStorage.clear();
  location.reload();
}
