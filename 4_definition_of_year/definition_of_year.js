let birthday = new Date('1998.03.23');
let date = new Date();

let age = date.getFullYear() - birthday.getFullYear();
let age_1 = date.getFullYear() - birthday.getFullYear() -1;

if ((birthday.getFullYear() <= date.getFullYear() && birthday.getMonth() <= date.getMonth() && birthday.getDate() <= date.getDate())) {
    console.log('Ваш возраст: ' + age);
} else {
    console.log('Ваш возраст: ' + age_1);
}