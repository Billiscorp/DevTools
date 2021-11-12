/*var accessID = document.getElementById("one");
var newPar = accessID.innerHTML;
accessID.innerHTML = "One";
*/

function init () {


var accessID = document.getElementById("one");
var newPar = accessID.innerHTML;
accessID.innerHTML = "One";

accessID.setAttribute("class", "redtext");

var readAttr = accessID.getAttribute("id");
alert(readAttr);

alert(accessID.getAttribute("id"));

}

window.onload = init; 
// () - не ставятся, так как это было бы вызов. Такая запись СВЯЗЫВЕТ функцию со свойством

/*var myClass = document.getElementById("one");

*/

