  function getWeekDay(date){
    let weekDayShortFormat;

    switch(date.getDay()){
      case 0:
      weekDayShortFormat = 'SU'
      break;
      case 1:
      weekDayShortFormat = 'MO'
      break;
      case 2:
      weekDayShortFormat = 'TU'
      break;
      case 3:
      weekDayShortFormat = 'WE'
      break;
      case 4:
      weekDayShortFormat = 'TH'
      break;
      case 5:
      weekDayShortFormat = 'FR'
      break;
      case 6:
      weekDayShortFormat = 'SA'
      break;
    }
    return weekDayShortFormat;
  }

console.log(getWeekDay(new Date()))
return;
let date = new Date("2012-02-20T03:12");

console.log(date);
