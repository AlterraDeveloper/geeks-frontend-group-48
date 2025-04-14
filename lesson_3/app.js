const langRadios = document.querySelectorAll(".languages input[type=radio]");

for (const langRadio of langRadios) {
  langRadio.onchange = function () {
    const selectedLang = langRadio.value;
    translateApp(selectedLang);
  };
}

function translateApp(lang) {
  const elements = document.querySelectorAll("[translate]");
  let t = null;

  switch (lang) {
    case "eng":
      t = getEnglishLang();
      break;
    case "rus":
      t = getRussianLang();
      break;
    case "kgz":
      t = getKyrgyzLang();
      break;
  }

  for (const element of elements) {
    const tCode = element.dataset.t;
    const translatedText = t[tCode] || "???";
    element.textContent = translatedText;
  }
}

function getEnglishLang() {
  return {
    "[weekday-short-1]": "Mon",
    "[weekday-short-2]": "Tue",
    "[weekday-short-3]": "Wed",
    "[weekday-short-4]": "Thu",

    "[month-2]": "February",
    "[month-4]": "April",
  };
}

function getRussianLang() {
  return {
    "[weekday-short-1]": "Пн",
    "[weekday-short-2]": "Вт",
    "[weekday-short-3]": "Ср",
    "[weekday-short-4]": "Чт",

    "[month-2]": "Февраль",
    "[month-4]": "Апрель",
  };
}

function getKyrgyzLang() {
  return {
    "[weekday-short-1]": "Дүй",
    "[weekday-short-2]": "Шей",
    "[weekday-short-3]": "Шар",
    "[weekday-short-4]": "Бей",

    "[month-2]": "Бирдин айы",
    "[month-4]": "Чын Куран",
  };
}

const currentDate = new Date();
const monthText = document.querySelector(".container h1");
// month-X
// monthText.dataset.t = "[month-" + (currentDate.getMonth() + 1) + "]";
monthText.dataset.t = `[month-${currentDate.getMonth() + 1}]`;
// template string

translateApp("eng");

function getDaysInMonth(date) {
  let year = date.getFullYear();
  let nextMonth = date.getMonth() + 1 + 1;
  if (nextMonth > 12) {
    year++;
    nextMonth = 1;
  }
  const lastDayInMonth = new Date(year, nextMonth - 1, 1);
  lastDayInMonth.setDate(lastDayInMonth.getDate() - 1);
  const daysInMonth = lastDayInMonth.getDate();
  return daysInMonth;
}

const daysContainer = document.querySelector(".days");

// create empty days
const firstDayInMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  1
);
const weekday = firstDayInMonth.getDay();
if (weekday === 0) {
  weekday = 7;
}
const emptyDaysCount = weekday - 1;
for (let i = 0; i < emptyDaysCount; i++) {
  const div = document.createElement("div");
  div.className = "day";
  daysContainer.appendChild(div);
}

for (let i = 1; i <= getDaysInMonth(currentDate); i++) {
  const div = document.createElement("div");
  div.className = "day";
  div.textContent = i;
  daysContainer.appendChild(div);
}