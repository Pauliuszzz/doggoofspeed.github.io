var count = 0;
var score = 0;
var kXP = 0;
var maxLength;
var musicNumber;
var bgNumber;
var btnsfx;
var endCard;
var theme;
var ladyvar = Math.floor(Math.random() * Math.floor(4))
//This contains info: Arcade matches, Highscore, Average Score, Max 1000 points in a game, Level
var arcadeStats = localStorage.getObj("ArcadeStats");
var arcadeHistory = localStorage.getObj("ArcadeHistory");

if (localStorage.getObj("sound") == false) {
  $(".togglediv").addClass("hidden");
} else {
  btnsfx = new Audio("../resources/abtnsfx.ogg");
  endCard = new Audio("../resources/aendcard.ogg");
}

$(window).on("load", function () {
  loadInfo();
  $("#ButtonFour").addClass("disabled");
  $(".replydiv").hide();
  shuffle(scenarios);
  text();
});

function refresh() {
  count = 0;
  score = 0;
  kXP = 0;
  ladyvar = Math.floor(Math.random() * Math.floor(4))
  arcadeStats = localStorage.getObj("ArcadeStats");
  arcadeHistory = localStorage.getObj("ArcadeHistory");
  $(".flexmain, #score-text").show();
  $("#EndCard, #LevelCard").addClass("hidden");
  $("#score-text").html(`Score: ${score}`);
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
    $("#toggle").html(
      "<img src='../resources/apause.png' style='transform: scale(.95);' alt='Pause'>"
    );
  } else {
    theme.pause();
    $("#toggle").html(
      "<img src='../resources/aplay.png' style='transform: scale(.95);' alt='Play'>"
    );
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
  $("#scenario-text").html(scenarios[count].scenario);
  $("#ButtonOne").html(scenarios[count].answer1);
  $("#ButtonTwo").html(scenarios[count].answer2);
  $("#ButtonThree").html(scenarios[count].answer3);
  $("#score-text").html(`Score: ${score}`);
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
  $("#ButtonTwo, #ButtonThree").addClass("disabled");
  score += scenarios[count].score1;
  $(".xptext").html(`+${scenarios[count].score1}Xp`);
  if (scenarios[count].score1 == 1000) {
    kXP++;
  }
  reply();
}

function reply2() {
  $("#reply-text").html(scenarios[count].reply2);
  $("#ButtonOne, #ButtonThree").addClass("disabled");
  score += scenarios[count].score2;
  $(".xptext").html(`+${scenarios[count].score2}Xp`);
  if (scenarios[count].score2 == 1000) {
    kXP++;
  }
  reply();
}

function reply3() {
  $("#reply-text").html(scenarios[count].reply3);
  $("#ButtonOne, #ButtonTwo").addClass("disabled");
  score += scenarios[count].score3;
  $(".xptext").html(`+${scenarios[count].score3}Xp`);
  if (scenarios[count].score3 == 1000) {
    kXP++;
  }
  reply();
}

function reply() {
  $(".replydiv").show();
  $("#ButtonFour").removeClass("disabled");
  if (localStorage.getObj("sound") == true) {
    btnsfx.play();
  }
  $("nav").addClass("glow");
}

//Next scenario
function nextScenario() {
  document.activeElement.blur()
  $("nav").removeClass("glow");
  if (count >= maxLength) {
    if (localStorage.getObj("sound") == true) {
      endCard.play();
    }
    arcadeHistory.push(score);
    if (arcadeHistory.length > 10) {
      arcadeHistory.shift();
    }
    arcadeStats[0]++;
    arcadeStats[1] = Math.max(arcadeStats[1], score);
    arcadeStats[2] = arcadeHistory.reduce((a, b) => a + b, 0) / arcadeHistory.length;
    arcadeStats[3] = Math.max(arcadeStats[3], kXP);
    $(".flexmain, #score-text").hide();
    $("#EndCard, #LevelCard").removeClass("hidden");
    $("#EndScore").html(`Your score: ${score}<br>Highscore: ${arcadeStats[1]}<br>Average Score: ${Math.round(arcadeStats[2])}<br>Matches played: ${arcadeStats[0]}`);
    arcadeLevel();
    localStorage.setObj("ArcadeStats", arcadeStats);
    localStorage.setObj("ArcadeHistory", arcadeHistory);
  }
  $(".xpmessage").removeClass("hidden");
  $("#ButtonOne, #ButtonTwo, #ButtonThree").addClass("disabled");
  setTimeout(function () {$(".xpmessage").addClass("hidden"); $("#ButtonOne, #ButtonTwo, #ButtonThree").removeClass("disabled")}, 1000);
  $(".replydiv").hide();
  $("#ButtonFour").addClass("disabled");
  count++;
  text();
  if (localStorage.getObj("sound") == true) {
    btnsfx.play();
  }
}

function loadInfo() {
  switch (arcadeStats[4]) {
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

  switch (Math.floor(Math.random() * Math.floor(bgNumber))) {
    case 0:
      $("body").css("background", "repeating-linear-gradient(-45deg, transparent, transparent 3px, #2a2329 3px, #2a2329 30px ) fixed, linear-gradient(to bottom right, #F19, #0CF)");
      break;
    case 1:
      $("body").css({background: "url(../resources/statue.png) center repeat fixed, #008080", "background-size": "50%",});
      if ($(window).width() >= 1280) {
        $("body").css("background-size", "25%");
      }
      break;
    case 2:
      $("body").css({background: "url(../resources/pattern.jpg) center repeat fixed, #008080", "background-size": "25%",});
      if ($(window).width() >= 1280) {
        $("body").css("background-size", "10%");
      }
      break;
  }

  switch (Math.floor(Math.random() * Math.floor(musicNumber))) {
    case 0:
      theme = new Audio("../resources/Arcade1.ogg");
      break;
    case 1:
      theme = new Audio("../resources/Arcade2.ogg");
      break;
    case 2:
      theme = new Audio("../resources/Arcade3.ogg");
      break;
  }
}
