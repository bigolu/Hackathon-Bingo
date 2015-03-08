	console.log($("td").css("background-color"));

$(document).ready(function(){
	$("td").click(function () {
		if($(this).css("background-color") === 'rgb(255, 255, 255)'){
   			 $(this).css("background-color","yellow");
   		}
   		else{
   			$(this).css("background-color","white");
   		}












   		



	});	
});








function winner(){

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
  	var gif = jQuery.parseJSON(xhr.responseText);
  	var url = gif.data.image_url;
  	var bg = "url(" + url + ")";

  	console.log(bg);
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
    document.body.style.backgroundImage = bg;
    window.setInterval(function test(){ 
    		var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    $('h1').css("color", color);

     }, 1000);   



  }
}
xhr.send();

}

















