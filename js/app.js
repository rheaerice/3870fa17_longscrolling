$(document).foundation();
var canvas = document.getElementById("canvas");
var avocado = document.getElementById("avocado");
var y = window.pageYOffset;


window.onscroll=function(){
console.log(y);

/*avocado*/
avocado.style.top=200 + y * 1.1 + "px";
 if (y > 2000)
{avocado.src ="http://www.shockinglydelicious.com/wp-content/uploads/2011/03/Avocado-flesh-in-a-bowl.jpg";}
if (y<2000){avocad.src="https://www.westelm.com/weimgs/ab/images/wcm/products/201729/0005/img28o.jpg";}















} /*end of window.onscroll*/
