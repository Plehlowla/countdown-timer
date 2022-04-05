const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const item = document.querySelectorAll('.deadline-format h4');
// console.log(item);

let futureDate = new Date(2022,5,24,12,20,2);
console.log(futureDate);

const year = futureDate.getFullYear();
// console.log(year);
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
console.log(weekday);

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;