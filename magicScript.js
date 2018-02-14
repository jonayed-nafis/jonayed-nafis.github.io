/*document.getElementById("userInp").value="";*/

var capFlag = false;
var numFlag = false; 
var sortFlag = false;
var txtArea = document.getElementById("userInp");
clear();

document.getElementById("clear").onclick = function() {clear()};
document.getElementById("capitalize").onclick = function() {capitalize()};
document.getElementById("sort").onclick = function() {sort()};
document.getElementById("reverse").onclick = function() {reverse()};
document.getElementById("strip blank").onclick = function() {stripBlank()};
document.getElementById("add numbers").onclick = function() {addNumbers()};
document.getElementById("shuffle").onclick = function() {shuffle()};






function clear(){
	txtArea.value = "";
}

function capitalize(){
	if (capFlag === false){
		txtArea.style.textTransform = "uppercase";
		capFlag = true;
	}
	else{
		txtArea.style.textTransform = "lowercase";
		capFlag = false;
	} 
}

function sort(){
	
		var input = textArray();
		var output = "";
		input.sort();
		for (var i = 0; i < input.length; i++) {

			if(i === input.length-1){
				output += input[i];
			}
			else{
				output += input[i] + "\n";
			}
		}
		txtArea.value = output;	
}

function reverse(){
		var input = textArray();
		var output = "";
		
		for (var i = 0; i < input.length; i++) {
			if(i === input.length-1){
				output += input[i].split(" ").reverse().join(" ");
			}
			else{
				output += input[i].split(" ").reverse().join(" ") + "\n";
			}
		}
		txtArea.value = output;
}

function stripBlank(){
	var input = textArray();
	input = input.filter(function(str){
		return /\S/.test(str);
	});
	console.log(input);
	var output = "";
	for (var i = 0; i < input.length; i++){
		input[i] = input[i].trim();

		if (i === input.length-1){
			output += input[i];	
		}
		else{
			output += input[i] + "\n";
		}	
	}
	txtArea.value = output;	
}

function addNumbers(){
	if(numFlag === false){	
		var input = textArray();

		var output = "";
		for (var i = 0; i < input.length; i++) {
			if (i === input.length-1){
				output += i+1 + ". " + input[i];	
			}
			else{
				output += i+1 + ". " + input[i] + "\n";
			}
		}

		txtArea.value = output;
		numFlag = true;
	}
}

function shuffle() {
	var input = textArray();

    for (let i = input.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [input[i], input[j]] = [input[j], input[i]];
        console.log(input);
    }
    var output = "";
	for (var i = 0; i < input.length; i++) {
		if(i == input.length-1){
			output += input[i];
		}
		else{
			output += input[i] + "\n";
		}
	}

    txtArea.value = output;
}


function textArray(){
	
	var txtarray = txtArea.value.split("\n");
	return txtarray;
}
















