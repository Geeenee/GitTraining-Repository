  function getWeekDay(date){
    let weekDayShortFormat = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
    return weekDayShortFormat[date.getDay()];
  }

console.log(getWeekDay(new Date()))
return;
let date = new Date("2012-02-20T03:12");

console.log(date);
