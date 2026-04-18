const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const d = new Date();

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const allMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

date.innerHTML = (d.getDate() < 10 ? '0' : '') + d.getDate();
day.innerHTML = weekDays[d.getDay()];
month.innerHTML = allMonths[d.getMonth()];
year.innerHTML = d.getFullYear();
