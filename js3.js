let name = prompt("Введите имя кандидата: ");
let surname = prompt("Введите фамилию кандидата:");
let birthYear = prompt("Введите год рождения кандидата:");
let special = prompt("Введите специальности кандидата:");
let workExp = prompt("Введите стаж работы кандидата:");
let progLang = prompt("Введите изученные языки программирования кандидата:");
const candid = {name: name, surname: surname, birthYear: birthYear, special: special, workExp: workExp, progLang: progLang};
let now = new Date()
if (parseInt(candid.birthYear) < now.getFullYear()-18)
if (parseInt(candid.workExp) > 2)
if (candid.special.toLowerCase().includes("разработчик"))
if (candid.progLang.toLowerCase().includes("javascript"))
	candid.status = "соответствует";
for (let key in candid) {
	console.log(key,":" candid[key])
}