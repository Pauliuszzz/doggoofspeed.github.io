//This contains info: Arcade matches, Highscore, Average Highscore, Max 1000 points in a game
var arcadeInfo = JSON.parse(localStorage.getItem('ArcadeStats'))

//Arcade Levels
function arcadeLevel() {
    $('.aLevelH2').html('Level ' + (parseInt(localStorage.getItem('ArcadeLevel')) + 1))
    switch (localStorage.getItem('ArcadeLevel')) {
      case null:
      case '0':
        localStorage.setItem('ArcadeLevel', 0);
        $('#arcadeUpgrade').html('Matches played: <i>' + arcadeInfo[0] + '/3</i><br>Award: <i>Match length (5 > 7)</i>');
        if (arcadeInfo[0] >= 3) {
          $('.aLevelUp').removeClass('disabled');
        }
        break;
      case '1':
        $('#arcadeUpgrade').html('Highscore: <i>' + arcadeInfo[1] + '/5000</i><br>Award: <i>More Scenarios</i>')
        if (arcadeInfo[1] >= 5000) {
          $('.aLevelUp').removeClass('disabled');
        }
        break;
      case '2':
        $('#arcadeUpgrade').html('Average Highscore: <i>' + Math.round(arcadeInfo[2]) + '/5000</i><br>Award: <i>New Background</i>')
        if (Math.round(arcadeInfo[2]) >= 5000) {
          $('.aLevelUp').removeClass('disabled');
        }
        break;
      case '3':
        $('#arcadeUpgrade').html('1000XP gotten in one game: <i>' + arcadeInfo[3] + '/5</i><br>Award: <i>New Music</i>')
        if (arcadeInfo[3] >= 5) {
          $('.aLevelUp').removeClass('disabled');
        }
        break;
    }
  }
  
  function LevelUpA() {
    let al = parseInt(localStorage.getItem('ArcadeLevel'));
    localStorage.setItem('ArcadeLevel', al + 1);
    arcadeLevel();
    $('.aLevelH2').html('Level ' + (parseInt(localStorage.getItem('ArcadeLevel')) + 1));
    $('.aLevelUp').addClass('disabled');
  }
  
  //Survival Levels
  function survivalLevel() {
    $('.sLevelH2').html('Level ' + (parseInt(localStorage.getItem('SurvivalLevel')) + 1))
    switch (localStorage.getItem('SurvivalLevel')) {
      case null:
      case '0':
        localStorage.setItem('SurvivalLevel', 0);
        $('#survivalUpgrade').html('Matches played: <i>' + localStorage.getItem('SurvivalMatches') + '/3</i><br>Award: <i>Match length from 5 to 10</i>');
        if (localStorage.getItem('SurvivalMatches') >= 3) {
          $('.sLevelUp').removeClass('disabled');
        }
        break;
    }
  }
  
  function LevelUpS() {
    let sl = parseInt(localStorage.getItem('SurvivalLevel'));
    localStorage.setItem('SurvivalLevel', sl + 1);
    survivalLevel();
    $('.sLevelH2').html('Level ' + (parseInt(localStorage.getItem('SurvivalLevel')) + 1));
    $('.sLevelUp').addClass('disabled');
  }