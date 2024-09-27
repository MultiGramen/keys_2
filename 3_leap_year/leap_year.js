function leapYear(x, y) {
    if (Number.isInteger(2020 / 4)) {
        return 'Високосный год';
    }
    return 'Невисокосный год';
}
console.log(leapYear());