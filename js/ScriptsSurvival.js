var count = 0;
var hp = 100;
var musicNumber;
var bgNumber;
var btnsfx;
var endCard;
var theme;
var bgvar;
var potionused = [0, 0, 0];
var ladyvar = Math.floor(Math.random() * Math.floor(4))
//This contains info: Survival matches, Max survived, Average survival, Max times in a row without taking damage, Level
var survivalStats = localStorage.getObj("SurvivalStats");
var survivalHistory = localStorage.getObj("SurvivalHistory");

if (localStorage.getObj("sound") == "false") {
  $(".togglediv").addClass("hidden");
} else {
  btnsfx1 = new Audio("../resources/btnsfx1.ogg");
  btnsfx2 = new Audio("../resources/btnsfx2.ogg");
  btnsfx3 = new Audio("../resources/btnsfx3.ogg");
  btnsfx4 = new Audio("../resources/btnsfx4.ogg");
  endCard = new Audio("../resources/endCard.ogg");
  deadCard = new Audio("../resources/deadCard.ogg");
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
  potionused = [0, 0, 0];
  survivalStats = localStorage.getObj("SurvivalStats");
  survivalHistory = localStorage.getObj("SurvivalHistory");
  $('#potionheal, #potioninfo').removeClass('disabledimg');
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
    $(".hptext").html("-" + scenarios[count].damage1 + "HP");
  }
  if (localStorage.getObj("sound") == "true") {
    btnsfx1.play();
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
    $(".hptext").html("-" + scenarios[count].damage2 + "HP");
  }
  if (localStorage.getObj("sound") == "true") {
    btnsfx2.play();
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
    $(".hptext").html("-" + scenarios[count].damage3 + "HP");
  }
  if (localStorage.getObj("sound") == "true") {
    btnsfx3.play();
  }
  $("nav").addClass("glow");
}

function heal() {
  $(".hptext").html("+" + (100-hp) + "hp");
  potionused[0] = 1;
  hp = 100;
  bgswitch();
  $(".hpmessage").removeClass("hidden");
  setTimeout(function () {$(".hpmessage").addClass("hidden");}, 1000);
  $('#potionheal').addClass('disabledimg');
}

function info() {
  $("#ButtonOne").html(scenarios[count].answer1 + " [-" + scenarios[count].damage1 + "HP]")
  $("#ButtonTwo").html(scenarios[count].answer2 + " [-" + scenarios[count].damage2 + "HP]")
  $("#ButtonThree").html(scenarios[count].answer3 + " [-" + scenarios[count].damage3 + "HP]")
  $('#potioninfo').addClass('disabledimg');
}

//Next scenario
function nextScenario() {
  $("nav").removeClass("glow");
  $('#potionrewind').removeClass('disabledimg')
  if (hp <= 75 && potionused[0] == 0) {
    $('#potionheal').removeClass('disabledimg');
  }
  if (hp <= 0) {
    if (localStorage.getObj("sound") == "true") {
      deadCard.play();
    }
    $(".potion").addClass("disabledimg");
    $(".flexmain, #score-text").hide();
    $("#EndCard, #LevelCard").removeClass("hidden");
    survivalHistory.push(hp);
    if (survivalHistory.length > 10) {
      survivalHistory.shift();
    }
    survivalStats[2] = survivalHistory.reduce((a, b) => a + b, 0) / survivalHistory.length;
    survivalLevel();
    localStorage.setObj("SurvivalStats", survivalStats);
    localStorage.setObj("SurvivalHistory", survivalHistory);
  }
  if (!scenarios[(count + 1)].scenario) {
    if (localStorage.getObj("sound") == "true") {
      endCard.play();
    }
    $(".potion").addClass("disabledimg");
    $(".flexmain, #score-text").hide();
    $("#EndCard, #LevelCard").removeClass("hidden");
  }
  $(".hpmessage").removeClass("hidden");
  setTimeout(function () {$(".hpmessage").addClass("hidden");}, 1000);
  $(".replydiv").hide();
  $("#ButtonOne, #ButtonTwo, #ButtonThree").removeClass("disabled");
  $("#ButtonFour").addClass("disabled");
  count++;
  text();
  if (localStorage.getObj("sound") == "true") {
    btnsfx4.play();
  }
}

function loadInfo() {
  switch (survivalStats[4]) {
    case 11:
    case 10:
      scenarios = scenarios1.concat(scenarios2, scenarios3, scenarios4);
      musicNumber = 3;
      bgNumber = 3;
      break;
    case 9:
      scenarios = scenarios1.concat(scenarios2, scenarios3);
      musicNumber = 3;
      bgNumber = 3;
      break;
    case 8:
      scenarios = scenarios1.concat(scenarios2, scenarios3);
      musicNumber = 3;
      bgNumber = 3;
      break;
    case 7:
      scenarios = scenarios1.concat(scenarios2, scenarios3);
      musicNumber = 2;
      bgNumber = 3;
      break;
    case 6:
      scenarios = scenarios1.concat(scenarios2, scenarios3);
      musicNumber = 2;
      bgNumber = 2;
      break;
    case 5:
      scenarios = scenarios1.concat(scenarios2);
      musicNumber = 2;
      bgNumber = 2;
      break;
    case 4:
      scenarios = scenarios1.concat(scenarios2);
      musicNumber = 2;
      bgNumber = 2;
      break;
    case 3:
      scenarios = scenarios1.concat(scenarios2);
      musicNumber = 1;
      bgNumber = 2;
      break;
    case 2:
      scenarios = scenarios1.concat(scenarios2);
      musicNumber = 1;
      bgNumber = 1;
      break;
    case 1:
      scenarios = scenarios1;
      musicNumber = 1;
      bgNumber = 1;
      break;
    case 0:
      scenarios = scenarios1;
      musicNumber = 1;
      bgNumber = 1;
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