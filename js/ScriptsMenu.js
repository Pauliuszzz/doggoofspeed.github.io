var btnsfx1;
var btnsfx2;
var btnsfx3;

//Checks if snow should be added
var d = new Date();
var n = d.getMonth();

if (n == 11 || n == 0 || n == 1) {
  var snow = document.createElement("script");
  snow.setAttribute("type", "text/javascript");
  snow.setAttribute("src", "js/snowstorm-min.js");
  document.getElementsByTagName("body")[0].appendChild(snow);
}

//This contains info: Arcade matches, Highscore, Average Highscore, Max 1000 points in a game
if (!localStorage.getItem("ArcadeStats")) {
  localStorage.setItem("ArcadeStats", JSON.stringify([0, 0, 0, 0]));
}
if (!localStorage.getItem("ArcadeHistory")) {
  localStorage.setItem("ArcadeHistory", JSON.stringify([]));
}
var ahistory = JSON.parse(localStorage.getItem("ArcadeHistory"));
if (!localStorage.getItem("SurvivalMatches")) {
  localStorage.setItem("SurvivalMatches", 0);
}
if (!localStorage.getItem("M1-Endings")) {
  localStorage.setItem("M1-Endings", JSON.stringify(["0", "0", "0", "0", "0"]));
}
if (!localStorage.getItem("M2-Endings")) {
  localStorage.setItem(
    "M2-Endings",
    JSON.stringify(["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"])
  );
}
if (!localStorage.getItem("M3-Endings")) {
  localStorage.setItem(
    "M3-Endings",
    JSON.stringify(["0", "0", "0", "0", "0", "0", "0"])
  );
}
if (!localStorage.getItem("M4-Endings")) {
  localStorage.setItem("M4-Endings", JSON.stringify(["0", "0", "0"]));
}
if (!localStorage.getItem("M5-Endings")) {
  localStorage.setItem(
    "M5-Endings",
    JSON.stringify(["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"])
  );
}
if (!localStorage.getItem("M5-Failures")) {
  localStorage.setItem(
    "M5-Failures",
    JSON.stringify([
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
    ])
  );
}

var arcadeInfo = JSON.parse(localStorage.getItem("ArcadeStats"));

$(window).on("load", function () {
  $(".lds-ellipsis").fadeOut();
  arcadeLevel();
  survivalLevel();
  switch (localStorage.getItem("sound")) {
    case "true":
      btnsfx1 = new Audio("resources/btnsfx1.ogg");
      btnsfx2 = new Audio("resources/btnsfx2.ogg");
      btnsfx3 = new Audio("resources/btnsfx3.ogg");
      $(".btnsoundy").css({ background: "rgba(100,255,100,0.5)" });
      setTimeout(function () {
        $("#home").removeClass("hidden");
      }, 400);
      break;
    case "false":
      $(".btnsoundn").css({ background: "rgba(255,100,100,0.5)" });
      setTimeout(function () {
        $("#home").removeClass("hidden");
      }, 400);
      break;
    case null:
      SettingSwitch(true);
      $(".card, .settingsClose, .settingsbtn").addClass("hidden");
      $("nav").fadeOut();
      $("setting, .soundpanel").removeClass("hidden");
      if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        sound(1);
      }
      break;
  }
  if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
    $(".soundpanel").addClass("hidden");
  }
});

//Sound controller
function sound(yn) {
  if (yn == 0) {
    localStorage.setItem("sound", true);
  } else if (yn == 1) {
    localStorage.setItem("sound", false);
  }
  location.reload();
}

//Switcher machanism
function StorySwitch() {
  $("#home, #arcade, #survival, #setting, #stats, #levelInfo").addClass(
    "hidden"
  );
  $("#story, nav").removeClass("hidden");
  $("body").removeClass("arcade survival");
  $("body").css("background-color", "#5E7668");
  $(".modes").css("margin-bottom", "4em");
  if (localStorage.getItem("sound") == "true") {
    btnsfx1.play();
  }
}

function ArcadeSwitch() {
  $("#home, #story, #survival, #setting, #stats, #levelInfo").addClass(
    "hidden"
  );
  $("#arcade, nav").removeClass("hidden");
  $("body").removeClass("story survival");
  $("body").css("background-color", "#8E3E6C");
  $(".modes").css("margin-bottom", "4em");
  if (localStorage.getItem("sound") == "true") {
    btnsfx2.play();
  }
}

function SurvivalSwitch() {
  $("#home, #story, #arcade, #setting, #stats, #levelInfo").addClass("hidden");
  $("#survival, nav").removeClass("hidden");
  $("body").css("background-color", "#8E3939");
  $(".modes").css("margin-bottom", "4em");
  if (localStorage.getItem("sound") == "true") {
    btnsfx3.play();
  }
}

function SettingSwitch(first) {
  $("#home, #story, #arcade, #survival, #stats, #levelInfo").addClass("hidden");
  $("#setting").removeClass("hidden");
  if (localStorage.getItem("sound") != null) {
    $("nav").fadeIn();
  }
  if (localStorage.getItem("sound") == "true") {
    btnsfx3.play();
  }
}

function StatSwitch() {
  $("#setting").addClass("hidden");
  $("#stats").removeClass("hidden");
  if (localStorage.getItem("sound") == "true") {
    btnsfx3.play();
  }
}

function levelInfo() {
  $("#arcade, #survival").addClass("hidden");
  $("#levelInfo").removeClass("hidden");
  if (localStorage.getItem("sound") == "true") {
    btnsfx3.play();
  }
}

//Story mode ending counter
$("#M1").html(
  "Endings achieved: " +
    JSON.parse(localStorage.getItem("M1-Endings")).filter((x) => x == "1")
      .length +
    "/5"
);
if (
  JSON.parse(localStorage.getItem("M1-Endings")).filter((x) => x == "1")
    .length == 5
) {
  $(".finM1").css("fill", "gold");
}
//Mission 2
if (
  JSON.parse(localStorage.getItem("M1-Endings")).filter((x) => x == "1")
    .length > 0
) {
  $("#M2").html(
    "Endings achieved: " +
      JSON.parse(localStorage.getItem("M2-Endings")).filter((x) => x == "1")
        .length +
      "/10"
  );
  if (
    JSON.parse(localStorage.getItem("M2-Endings")).filter((x) => x == "1")
      .length == 10
  ) {
    $(".finM2").css("fill", "gold");
  }
} else if (
  JSON.parse(localStorage.getItem("M1-Endings")).filter((x) => x == "1")
    .length == 0
) {
  $("#M2").html("Finish previous missions to unlock");
  $("#M2-play").addClass("disabled");
}
//Mission 3
if (
  JSON.parse(localStorage.getItem("M2-Endings")).filter((x) => x == "1")
    .length > 0
) {
  $("#M3").html(
    "Endings achieved: " +
      JSON.parse(localStorage.getItem("M3-Endings")).filter((x) => x == "1")
        .length +
      "/7"
  );
  if (
    JSON.parse(localStorage.getItem("M3-Endings")).filter((x) => x == "1")
      .length == 7
  ) {
    $(".finM3").css("fill", "gold");
  }
} else if (
  JSON.parse(localStorage.getItem("M2-Endings")).filter((x) => x == "1")
    .length == 0
) {
  $("#M3").html("Finish previous missions to unlock");
  $("#M3-play").addClass("disabled");
}
//Mission 4
if (
  JSON.parse(localStorage.getItem("M3-Endings")).filter((x) => x == "1")
    .length > 0
) {
  $("#M4").html(
    "Conspiracists found: " +
      JSON.parse(localStorage.getItem("M4-Endings")).filter((x) => x == "1")
        .length +
      "/3"
  );
  if (
    JSON.parse(localStorage.getItem("M4-Endings")).filter((x) => x == "1")
      .length == 3
  ) {
    $(".finM4").css("fill", "gold");
  }
} else if (
  JSON.parse(localStorage.getItem("M3-Endings")).filter((x) => x == "1")
    .length == 0
) {
  $("#M4").html("Finish previous missions to unlock");
  $("#M4-play").addClass("disabled");
}
//Mission 5
if (
  JSON.parse(localStorage.getItem("M4-Endings")).filter((x) => x == "1")
    .length > 2
) {
  $("#M5").html(
    "Endings achieved: " +
      JSON.parse(localStorage.getItem("M5-Endings")).filter((x) => x == "1")
        .length +
      "/12<br>Failures achieved: " +
      JSON.parse(localStorage.getItem("M5-Failures")).filter((x) => x == "1")
        .length +
      "/17"
  );
  if (
    JSON.parse(localStorage.getItem("M5-Endings")).filter((x) => x == "1")
      .length == 12 &&
    JSON.parse(localStorage.getItem("M4-Failures")).filter((x) => x == "1")
      .length == 17
  ) {
    $(".finM5").css("fill", "gold");
  }
} else if (
  JSON.parse(localStorage.getItem("M4-Endings")).filter((x) => x == "1")
    .length < 3
) {
  $("#M5").html("Find all the conspirators to unlock");
  $("#M5-play").addClass("disabled");
}

//Tells progress
$("#ArcadeMode").html(
  "Highscore: " +
    arcadeInfo[1] +
    "<br>Average Score: " +
    arcadeInfo[2] +
    "<br>Matches played: " +
    arcadeInfo[0]
);
$("#SurvivalMode").html(
  "Max scenarios survived: " +
    localStorage.getItem("MaxSurvived") +
    "<br>Average scenarios survived: " +
    Math.round(localStorage.getItem("AverageCount")) +
    "<br>Matches played: " +
    localStorage.getItem("SurvivalMatches")
);
if (localStorage.getItem("MaxSurvived") == 20) {
  $(".normal").css("fill", "gold");
}

//Clears progress
function resetEverything() {
  localStorage.clear();
  location.reload();
}
