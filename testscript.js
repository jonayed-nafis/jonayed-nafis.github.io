var quotes = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
 "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson ", 
 "Insanity is doing the same thing, over and over again, but expecting different results. - Narcotics Anonymous",
 "yo","no","go"];
	


function quoteChange(){
	var randomNum = Math.floor(Math.random()*(quotes.length));
	document.getElementById('quoteShow').innerHTML = quotes[randomNum];

}