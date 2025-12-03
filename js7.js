function isHexadecimal(str){
	return /^[012334567890ABCDEF]+$/.test(str);
}
let a = prompt("Введите шестнадцатиричное число:").toUpperCase();
while (!isHexadecimal(a)) a = prompt("Введите шестнадцатиричное число:");
alert(parseInt(a, 16));