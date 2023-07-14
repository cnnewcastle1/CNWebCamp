let state = 1;

function option1() {
	if(state == 1) {
		document.getElementById("demo").innerHTML = "This is option 1";
		//state+= 1;
	} else if (state == 5) {
		document.getElementById("demo").innerHTML = "This is option 5 - 1";
	}
}

function option2() {
		if(state == 1) {
		document.getElementById("demo").innerHTML = "This is option 2";
		state = 5;
	} else if (state == 5){
		document.getElementById("demo").innerHTML = "This is option 5 - 2";
}
}