function isBinary(str){
	return /^[01]+$/.test(str);
}
let a = prompt("Введите двоичное число:");
while (!isBinary(a)) a = prompt("Введите двоичное число:");
alert(parseInt(a, 2));