//$(document).foundation();


var canvas = document.getElementById("canvas");
var bowl = document.getElementById("bowl");
var avocado = document.getElementById("avocado");
var prep = document.getElementById("prep");
var ingredients = document.getElementById("ingredients");




window.onscroll=function(){
var y = window.pageYOffset;
console.log(y);

/*bowl- include the change of different images as new ingredients get added*/
bowl.style.top=200 + y + "px";
  if (y<1100)
    {bowl.src ="http://www.churchill1795.com/sites/default/files/imagecache/product_page_main_image/products/second/APR%20AP8%201_2.png"}
  if (y>1100)
    {bowl.src ="http://www.carvasos.com/sites/default/files/avocado%20mash.png"}
 /*side bars*/
 prep.style.top=200 + y + "px";
 ingredients.style.top=200 + y + "px";


/*avocado*/
avocado.style.top=700 + y * .7 + "px";
 if (y > 1000)
{avocado.src ="http://www.shockinglydelicious.com/wp-content/uploads/2011/03/Avocado-flesh-in-a-bowl.jpg";
	avocado.style.transform="translate(0,0)";

}
if (y<1000){avocado.src="http://www.pngpix.com/wp-content/uploads/2016/03/Avocado-PNG-Image-500x417.png";}















} /*end of window.onscroll*/
