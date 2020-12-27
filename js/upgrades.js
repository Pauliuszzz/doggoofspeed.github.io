//Arcade Levels
function arcadeLevel() {
    $('.aLevelH2').html('Level ' + (parseInt(localStorage.getItem('ArcadeLevel')) + 1))
    switch (localStorage.getItem('ArcadeLevel')) {
      case null:
      case '0':
        localStorage.setItem('ArcadeLevel', 0);
        $('#arcadeUpgrade').html('Matches played: <i>' + localStorage.getItem('ArcadeMatches') + '/3</i><br>Award: <i>Match length (5 > 7)</i>');
        if (localStorage.getItem('ArcadeMatches') >= 3) {
          $('.aLevelUp').removeClass('disabled');
        }
        break;
      case '1':
        $('#arcadeUpgrade').html('Highscore: <i>' + localStorage.getItem('Highscore') + '/5000</i><br>Award: <i>More Scenarios</i>')
        if (localStorage.getItem('Highscore') >= 5000) {
          $('.aLevelUp').removeClass('disabled');
        }
        break;
      case '2':
        $('#arcadeUpgrade').html('Average Highscore: <i>' + Math.round(localStorage.getItem('AverageHighscore')) + '/5000</i><br>Award: <i>New Background</i>')
        if (Math.round(localStorage.getItem('AverageHighscore')) >= 5000) {
          $('.aLevelUp').removeClass('disabled');
        }
        break;
      case '3':
        $('#arcadeUpgrade').html('1000XP gotten in one game: <i>' + localStorage.getItem('kXPstrg') + '/5</i><br>Award: <i>New Music</i>')
        if (localStorage.getItem('kXPstrg') >= 5) {
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