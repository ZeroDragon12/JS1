let Str = prompt('Введите день недели на русском').toLowerCase(); 
switch(Str){
	case "понедельник": alert ('Monday'); break;
	case "вторник": alert ('Tuesday'); break;
	case "среда": alert ('Wednesday'); break;
	case "четверг": alert ('Thursday'); break;
	case "пятница": alert ('Friday'); break;
	case "суббота": alert ('Saturday'); break;
	case "воскресенье": alert ('Sunday'); break;
	default: alert ('Ну ты даешь! Попробуй еще!'); break;
}