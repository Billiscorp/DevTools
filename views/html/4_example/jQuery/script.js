//jQuery("h2").css("color","green");
//$("h2").css("color","green");
//$("h2").css("color","red");

/*$(document).ready(function(){
 		$("h2").css("color","green");	
 });
 
*/
// аналогично

 /*$(function(){
 		$("h2").css("color","red");
 });
*/




 /*$(document).ready(function() {
 	 $("h2").html("Подменили текст");
 })

*/
/* jQuery(document).ready(function() {
	 jQuery("h2").html("Подменили текст");
 })

*/

// $("h2").html("Подменили текст");



$(document).ready(function(){
 $('#btn_start').click(function(){
 		$('#message')
 		.html("New Message")
 		.css("background-color","red")
 		.parent()
 		.css("background-color","green")
 		.width(150)
 		.height(80)
 });
 

 $('#btn_reset').click(function(){
 	location.reload();
 });
 });
