let monthOrdinaryYear = { // Месяц обычный год
    january: 1,
    february: 4,
    march: 4,
    april: 0,
    may: 2,
    june: 5,
    july: 0,
    august: 3,
    september: 6,
    october: 1,
    november: 4,
    december: 6
}
let monthLeapYear = { // Месяц високосный год
    january: 0,
    february: 3,
    march: 4,
    april: 0,
    may: 2,
    june: 5,
    july: 0,
    august: 3,
    september: 6,
    october: 1,
    november: 4,
    december: 6
}
let centuryCode = { // Код века
    16: 6,
    17: 4,
    18: 2,
    19: 0,
    20: 6,
    21: 4,
    22: 2,
    23: 0
}
let dayYear = 97; // Год
let yearCode = Math.trunc(centuryCode[20] + dayYear + dayYear / 4) % 7; // (centuryCode - год века) dayYear – Код года

let monthCode = 4; // Код месяца
let dayMonth = 23; // Число

let result = ((dayMonth + monthCode + yearCode) % 7);
let dayWeek = {
    0: "Суббота",
    1: "Воскресенье",
    2: "Понедельник",
    3: "Вторник",
    4: "Среда",
    5: "Четверг",
    6: "Пятница"
};
console.log(dayWeek[yearCode]);