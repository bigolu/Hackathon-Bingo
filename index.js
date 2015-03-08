	console.log("here");

$(document).ready(function(){
	$("td").click(function () {

		var table=document.getElementById('table');
   		//$(this).toggleClass("green");
   		if($(table.rows[0].cells[0]).css("background-color") === 'rgb(51, 102, 153)'){
   			table.rows[0].cells[0].style.backgroundColor = 'rgb(206, 189, 189)';
   		}
   		else{
   			table.rows[0].cells[0].style.backgroundColor = 'rgb(51, 102, 153)';
   		}














	});	
});









/*
color();











function color(){
	document.getElementbyId("test").style.color = "blue";
}


	console.log("here");
	document.getElementbyId("test").style.color = "blue";
$("#test").click(
	function() {
		console.log("there");
		document.getElementbyId("test").style.color = "blue";

		console.log("yo");
	}







	);
*/