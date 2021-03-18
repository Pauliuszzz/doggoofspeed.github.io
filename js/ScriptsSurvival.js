var count = 0;
var hp = 100;
var maxLength;
var musicNumber;
var bgNumber;
var btnsfx;
var endCard;
var theme;
var bgvar;
//
var survivalInfo = JSON.parse(localStorage.getItem("SurvivalStats"));
var survivalHistory = JSON.parse(localStorage.getItem("SurvivalHistory"));

if (localStorage.getItem("sound") == "false") {
  $(".togglediv").addClass("hidden");
} else {
  btnsfx = new Audio("../resources/abtnsfx.ogg");
  endCard = new Audio("../resources/aendcard.ogg");
}

$(window).on("load", function () {
  loadInfo();
  bgvar = Math.floor(Math.random() * Math.floor(bgNumber))
  bgswitch();
  $("#ButtonFour").addClass("disabled");
  $(".replydiv").hide();
  shuffle(scenarios);
  text();
});

function refresh() {
  count = 0;
  hp = 100;
  survivalInfo = JSON.parse(localStorage.getItem("SurvivalStats"));
  survivalHistory = JSON.parse(localStorage.getItem("SurvivalHistory"));
  $(".flexmain, #hp-text").show();
  $("#EndCard, #LevelCard").addClass("hidden");
  $("#hp-text").html("-" + hp + "HP");
  loadInfo();
  shuffle(scenarios);
  $(".replydiv").hide();
  $("#ButtonOne, #ButtonTwo, #ButtonThree").removeClass("disabled");
  $("#ButtonFour").addClass("disabled");
  text();
}

$("#toggle").on("click", function (e) {
  if (theme.paused) {
    theme.play();
    theme.addEventListener("timeupdate", function () {
      var buffer = 0.44;
      if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0;
        this.play();
      }
    });
    $("#toggle").html("<img src='../resources/apause.png' style='transform: scale(.95);' alt='Pause'>");
  } else {
    theme.pause();
    $("#toggle").html("<img src='../resources/aplay.png' style='transform: scale(.95);' alt='Play'>");
  }
});

//Array Shuffle
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//Text
function text() {
  bgswitch();
  $("#scenario-text").html(scenarios[count].scenario);
  $("#ButtonOne").html(scenarios[count].answer1);
  $("#ButtonTwo").html(scenarios[count].answer2);
  $("#ButtonThree").html(scenarios[count].answer3);
  if (!scenarios[count].answer1) {
    $("#ButtonOne").hide();
  }
  if (!scenarios[count].answer2) {
    $("#ButtonTwo").hide();
  }
  if (!scenarios[count].answer3) {
    $("#ButtonThree").hide();
  }
}

//Replies
function reply1() {
  $("#reply-text").html(scenarios[count].reply1);
  $(".replydiv").show();
  $("#ButtonFour").removeClass("disabled");
  $("#ButtonTwo, #ButtonThree").addClass("disabled");
  hp - scenarios[count].damage1 <= 0 ? hp = 0 : hp = hp - scenarios[count].damage1;
  if ($(".hpmessage").hasClass("hidden") == true) {
    $(".hptext").html("-" + scenarios[count].score1 + "HP");
  }
  if (localStorage.getItem("sound") == "true") {
    btnsfx.play();
  }
  $("nav").addClass("glow");
}

function reply2() {
  $("#reply-text").html(scenarios[count].reply2);
  $(".replydiv").show();
  $("#ButtonFour").removeClass("disabled");
  $("#ButtonOne, #ButtonThree").addClass("disabled");
  hp - scenarios[count].damage2 <= 0 ? hp = 0 : hp = hp - scenarios[count].damage2;
  if ($(".hpmessage").hasClass("hidden") == true) {
    $(".hptext").html("-" + scenarios[count].score2 + "HP");
  }
  if (localStorage.getItem("sound") == "true") {
    btnsfx.play();
  }
  $("nav").addClass("glow");
}

function reply3() {
  $("#reply-text").html(scenarios[count].reply3);
  $(".replydiv").show();
  $("#ButtonFour").removeClass("disabled");
  $("#ButtonOne, #ButtonTwo").addClass("disabled");
  hp - scenarios[count].damage3 <= 0 ? hp = 0 : hp = hp - scenarios[count].damage3;
  if ($(".hpmessage").hasClass("hidden") == true) {
    $(".hptext").html("-" + scenarios[count].score3 + "HP");
  }
  if (localStorage.getItem("sound") == "true") {
    btnsfx.play();
  }
  $("nav").addClass("glow");
}

//Next scenario
function nextScenario() {
  $("nav").removeClass("glow");
  text();
  if (hp <= 0) {
    if (localStorage.getItem("sound") == "true") {
      endCard.play();
    }
    $(".flexmain, #score-text").hide();
    $("#EndCard, #LevelCard").removeClass("hidden");
    survivalHistory.push(hp);
    if (survivalHistory.length > 10) {
      survivalHistory.shift();
    }
    survivalInfo[2] = survivalHistory.reduce((a, b) => a + b, 0) / survivalHistory.length;
    survivalLevel();
    localStorage.setItem("SurvivalStats", JSON.stringify(survivalInfo));
    localStorage.setItem("SurvivalHistory", JSON.stringify(survivalHistory));
  }
  $(".hpmessage").removeClass("hidden");
  setTimeout(function () {$(".hpmessage").addClass("hidden");}, 1000);
  $(".replydiv").hide();
  $("#ButtonOne, #ButtonTwo, #ButtonThree").removeClass("disabled");
  $("#ButtonFour").addClass("disabled");
  count++;
  if (localStorage.getItem("sound") == "true") {
    btnsfx.play();
  }
}

function loadInfo() {
  switch (parseInt(localStorage.getItem("SurvivalLevel"))) {
    case 11:
    case 10:
      scenarios = scenarios1.concat(scenarios2, scenarios3, scenarios4);
      musicNumber = 3;
      bgNumber = 3;
      maxLength = 9;
      break;
    case 9:
      scenarios = scenarios1.concat(scenarios2, scenarios3);
      musicNumber = 3;
      bgNumber = 3;
      maxLength = 9;
      break;
    case 8:
      scenarios = scenarios1.concat(scenarios2, scenarios3);
      musicNumber = 3;
      bgNumber = 3;
      maxLength = 8;
      break;
    case 7:
      scenarios = scenarios1.concat(scenarios2, scenarios3);
      musicNumber = 2;
      bgNumber = 3;
      maxLength = 8;
      break;
    case 6:
      scenarios = scenarios1.concat(scenarios2, scenarios3);
      musicNumber = 2;
      bgNumber = 2;
      maxLength = 8;
      break;
    case 5:
      scenarios = scenarios1.concat(scenarios2);
      musicNumber = 2;
      bgNumber = 2;
      maxLength = 8;
      break;
    case 4:
      scenarios = scenarios1.concat(scenarios2);
      musicNumber = 2;
      bgNumber = 2;
      maxLength = 6;
      break;
    case 3:
      scenarios = scenarios1.concat(scenarios2);
      musicNumber = 1;
      bgNumber = 2;
      maxLength = 6;
      break;
    case 2:
      scenarios = scenarios1.concat(scenarios2);
      musicNumber = 1;
      bgNumber = 1;
      maxLength = 6;
      break;
    case 1:
      scenarios = scenarios1;
      musicNumber = 1;
      bgNumber = 1;
      maxLength = 6;
      break;
    case 0:
      scenarios = scenarios1;
      musicNumber = 1;
      bgNumber = 1;
      maxLength = 4;
      break;
  }
}

function bgswitch() {
  switch (bgvar) {
    case 0:
      $("body").css("background", "rgb(" + hp/1.7 + "," + hp/3.3 + "," + hp/3.3 + ")");
      break;
    case 1:
      $("body").css("background", "rgb(" + hp/3.3 + "," + hp/1.7 + "," + hp/3.3 + ")");
      break;
    case 2:
      $("body").css("background", "rgb(" + hp/3.3 + "," + hp/3.3 + "," + hp/1.7 + ")");
      break;
  }
}

switch (Math.floor(Math.random() * Math.floor(musicNumber))) {
  case 0:
    theme = new Audio("../resources/Arcade1.ogg");
    break;
  case 1:
    theme = new Audio("../resources/Arcade2.ogg");
    break;
  case 2:
    break;
}