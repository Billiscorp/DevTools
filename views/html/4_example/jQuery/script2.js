// $('#content').css("color","red");
// $('.box').css("color","green");
// $("h1,h2").css("color","blue");

$("h2").fadeOut(1000);

// $('article h2').css("color","#FF18B7");
// analog
// $('article').find("h2").css("color","#18FF1B");

// $("h1 + p").css("color","blue"); // все p перед которыми есть h1

// $('#content').prev().css("color","red"); // next

// * - all

// $('article > h2').css("color","#FF18B7"); // потомки article

// ............

/*$('.box').css({"color":"green",
				"font-size":"12px",
				"margin-left":"10px"
				});*/
// analog
/*$('.box').css({color:"green",
				fontSize:"23px",
				marginLeft:"20px"
				});*/


// .................

// $('#content').addClass("name");

// $('#content').removeClass("name");

//$('#content').toggle(); // пропадет немедленно


// atribut
// $('img').attr('src','/img/default.jpg')

// .........................

// var $myDiv = $('<div id = "my" class = "page">New Div</div>').appendTo('#content');
// var $myDiv = $('<div>New Div 2</div>').attr({ 'id': 'my', 'class':'page'}).appendTo('#content');
// Javascript
/*var myDiv = document.createElement('div');
	myDiv.id = "my";
	myDiv.className = "page";*/

// ........................
$("p").after("<hr/>");
// $("<hr/>").insertAfter("p"); // before