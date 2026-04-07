  let getLastDayOfMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  }
console.log(getLastDayOfMonth(2012, 1));
return;


let getDateAgo = (date, day) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - day ).getDate();
  }

console.log(getDateAgo(new Date(), 5))
return;
function getLocalDay(date){
    let day = date.getDay() 
    return day == 0 ? 7 : day
  }

console.log(getLocalDay(new Date()));
return;
function getWeekDay(date){
    let weekDayShortFormat = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
    return weekDayShortFormat[date.getDay()];
  }

console.log(getWeekDay(new Date()))
return;
let date = new Date("2012-02-20T03:12");

console.log(date);
