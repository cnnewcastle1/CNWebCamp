let state = 0;

function myFunction() {
    if (state === 0) {
        document.getElementById("demo").innerHTML = "Don't touch my cheese!";
        document.getElementById("catImage").src = "cat.jpg";
        state++;
    } else {
        document.getElementById("evilMode").style.backgroundColor = "black";
        document.getElementById("demo").innerHTML = "I SAID DON'T!!!";
        document.getElementById("demo").style.color = "red";
        document.getElementById("demo").style.fontSize = "50px";
        document.getElementById("catImage").style.marginTop = "0px";
        document.getElementById("title").style.color = "black";

        // Delete the "header" class
        document.getElementById("head").classList.remove("header");
		document.getElementById("button").classList.remove("button");
    }
}
