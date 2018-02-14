/*var value = document.getElementById("inpSeries").value.split(",");
alert(value);
*/
var input = document.getElementById("inpSeries");
var inpArray = [];
var sum = 0;
var avg = 0;
input.onchange = function () {MMSAR()};


function MMSAR(){
	inpArray = input.value.split(",");
	Max();
	Min();
	Reverse();
	Sum();
	Average();
}
function Max(){
	var tempArray = inpArray.map((a) => (a));
	tempArray.sort((a, b) => a - b);
	const max = tempArray[tempArray.length - 1];
	document.getElementById("max").innerHTML = max; 

}

function Min(){
	var tempArray = inpArray.map((a) => (a));
	tempArray.sort((a, b) => a - b);
	const min = tempArray[0];
	document.getElementById("min").innerHTML = min; 
}


function Sum(){	
	for(var i = 0; i<inpArray.length; i++){
		sum += parseInt(inpArray[i]);
	}
	document.getElementById("sum").innerHTML = sum;

}

function Average(){
	avg = sum / inpArray.length;
	console.log(avg);
	document.getElementById("avg").innerHTML = avg;
	
	

}

function Reverse(){
	var tempArray = inpArray.map((a) => (a));
	tempArray.reverse()
	document.getElementById("rev").innerHTML = tempArray;	
	

}





//copied for fun and learning
// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});











