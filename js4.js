let a = parseInt(prompt("Введите число, от которого надо найти факториал:"));
if ((a <= 10) && (a > 0)){
	let factor = 1;
	for(let i=1; i<a+1; i++){
		factor = factor * i;
	}
	alert(factor);
}
else alert("Введите число от 1 до 12");