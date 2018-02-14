var quotes = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein", 
	"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
	"Insanity is doing the same thing, over and over again, but expecting different results. - Narcotics Anonymous",
	"Society is meaningless without the voices in your head. - Inspirobot",
	"The idea is to die young as late as possible - Anonymous",
	"Next to being witty, the best thing is being able to quote another's wit - Christian Nestell Bovee",
	"Better a witty fool than a foolish wit. - William Shakespeare",
	"A witty saying proves nothing. - Voltaire",
	"Gotta catchem all. - Pokemon",
	"We must let go of life we have planned, so as to accept the one that is waiting for us. - Joseph Campbell",
	"Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
	"Experience is simply the name we give our mistakes. - Oscar Wilde",
	"The truth is rarely pure and never simple. - Oscar Wilde"
	];


function quoteChange(){
	var randomNum = Math.floor(Math.random()*(quotes.length));
	document.getElementById('quotes').innerHTML = quotes[randomNum];
	document.getElementById('quotes').style.fontFamily="Impactsans-serif";

}

var dateMod = document.lastModified;
document.getElementById("dateModified").innerHTML = dateMod;




