/* This function handle the clicking of buttons on the page*/
function start_game(){
	$("td").click(function () { //Toggles color between white and yellow
		if($(this).css("background-color") === 'rgb(255, 255, 255)'){
   			 $(this).css("background-color","yellow");
   		}
   		else{
   			$(this).css("background-color","white");
   		}

   		var table = document.getElementById("table");
   		if(youWon(table)){ //Check to see if they won
   			winner();
   		}
	});
}

/* Shows the page for winners */
function winner(){
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC", true); //get a random gif
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
		/* Change background to a gif*/
  	var gif = jQuery.parseJSON(xhr.responseText);
  	var url = gif.data.image_url;
  	var bg = "url(" + url + ")";
		document.body.style.backgroundImage = bg;

		/* Display you win in big letters */
  	document.body.innerHTML = "<h1>YOU WIN!!!!!</h1>";
	  	$('h1').css({
	  	fontSize: '200px',
	  	color: 'red',
	    left: '0',
	    lineHeight: '200px',
	    margin: 'auto',
	    marginTop: '-100px',
	    position: 'absolute',
	    top: '50%',
	    width: '100%',
		});

		/* Make text on screen flash different colors by changing the color every 1/10 of a second*/
    window.setInterval(function (){
				/* generate random color by randomizing a hexadecimal */
    		var letters = '0123456789ABCDEF'.split('');
		    var color = '#';
		    for (var i = 0; i < 6; i++ ) {
		        color += letters[Math.floor(Math.random() * 16)];
		    }
		    $('h1').css("color", color);
			}
  	, 100);
  }
}
xhr.send(); //send request to giphy
}

/* Returns true if the player has won the game
* by checking for five in a row anywhere on the board
*/
function youWon(table){
	var count = 0; //keep track of how many  the user got in a row

	/* Check for horizontal win */
	for(i = 0; i < table.rows.length; i++){
		count = 0; //reset count
		for(j = 0; j < table.rows.length; j++){
			if($(table.rows[i].cells[j]).css("background-color") != 'rgb(255, 255, 255)'){
				count++;
			}
		}
		if(count === 5){
			return true;
		}
	}

	/* Check for vertical win */
	for(i = 0; i < table.rows.length; i++){
		count = 0;
		for(j = 0; j < table.rows.length; j++){
			if($(table.rows[j].cells[i]).css("background-color") != 'rgb(255, 255, 255)')
				count++;
		}
		if(count === 5){
			return true;
		}
	}

	/* Check for diagonal win from left to right */
	count = 0;
	for(i = 0, j = 0; (i < table.rows.length) && (j < table.rows.length); i++, j++){
			if($(table.rows[j].cells[i]).css("background-color") != 'rgb(255, 255, 255)')
				count++;
	}
	if(count === 5){
		return true;
	}

	/* Check for diagonal win from right to left */
	count = 0;
	for(i = table.rows.length - 1, j = 0; (i >= 0) && (j < 5); i--, j++){
			if($(table.rows[j].cells[i]).css("background-color") != 'rgb(255, 255, 255)'){
				count++;
			}
	}
	if(count === 5){
		return true;
	}

	return false;
}

$(document).ready(start_game);
