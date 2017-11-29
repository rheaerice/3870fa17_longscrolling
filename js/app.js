//$(document).foundation();


var canvas = document.getElementById("canvas");
var bowl = document.getElementById("bowl");
var avocado = document.getElementById("avocado");
var prep = document.getElementById("prep");
var ingredients = document.getElementById("ingredients");




window.onscroll=function(){
var y = window.pageYOffset;
console.log(y);

/*bowl*/
bowl.style.top=200 + y * 1.1 + "px";


 /*side bars*/
 prep.style.top=200 + y * 1.1 + "px";
 ingredients.style.top=200 + y * 1.1 + "px";

/*avocado*/
avocado.style.top=1000 + y * .7 + "px";
 if (y > 2000)
{avocado.src ="http://www.shockinglydelicious.com/wp-content/uploads/2011/03/Avocado-flesh-in-a-bowl.jpg";
	avocado.style.transform="translate(0,0)";

}
if (y<2000){avocado.src="http://www.pngpix.com/wp-content/uploads/2016/03/Avocado-PNG-Image-500x417.png";}















} /*end of window.onscroll*/
