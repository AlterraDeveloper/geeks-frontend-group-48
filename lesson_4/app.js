const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// moment.js

// CDN - Content Delivery Network

function countdown() {
  const currentDate = moment();
  const eventDate = moment("2025-06-01"); // Summer 2025

  const dateDiff = moment.duration(eventDate.diff(currentDate));

  const daysCount = Math.floor(dateDiff.asDays());
  const hoursCount = Math.floor(dateDiff.subtract(daysCount, "days").asHours());
  const minutesCount = Math.floor(
    dateDiff.subtract(hoursCount, "hours").asMinutes()
  );
  const secondsCount = Math.floor(
    dateDiff.subtract(minutesCount, "minutes").asSeconds()
  );

  days.textContent = daysCount;
  hours.textContent = String(hoursCount).padStart(2, "0");
  minutes.textContent = String(minutesCount).padStart(2, "0");
  seconds.textContent = String(secondsCount).padStart(2, "0");
}

setInterval(countdown, 1000); // 1 sec
