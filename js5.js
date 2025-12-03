let a = parseInt(prompt("Введите трёхзначное число:"));
while ((a > 999) || (a < 100)) a = parseInt(prompt("Введите трёхзначное число"));
let a1 = a%10
let a2 = (a-a1)/10
let a3 = a2
a2 = a2%10
a3 = (a3-a2)/10
alert(a1+a2+a3)