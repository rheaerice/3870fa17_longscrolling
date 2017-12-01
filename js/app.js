//$(document).foundation();


var canvas = document.getElementById("canvas");
var bowl = document.getElementById("bowl");
var prep = document.getElementById("prep");
var ingredients = document.getElementById("ingredients");
var avocado = document.getElementById("oneavocado");
var avocado = document.getElementById("twoavocado");
var avocado = document.getElementById("threeavocado");
var lime = document.getElementById("lime");
var salt = document.getElementById("salt");
var cumin = document.getElementById("cumin");
var cayenne = document.getElementById("cayenne");



window.onscroll=function(){
var y = window.pageYOffset;
console.log(y);

/*bowl- include the change of different images as new ingredients get added*/
bowl.style.top=200 + y + "px";

/*avocado bowl*/
  if (y<1100)
    {bowl.src ="http://www.churchill1795.com/sites/default/files/imagecache/product_page_main_image/products/second/APR%20AP8%201_2.png"}
  if (y>1100)
    {bowl.src ="http://www.carvasos.com/sites/default/files/avocado%20mash.png"}
/*lime bowl*/
  if (y>1700)
    {bowl.src ="http://www.quiirk.co.uk/wp-content/uploads/2014/07/duck-egg-blue-bowl-3-limited-edition-ceramics.png"}
/*spices bowl*/
  if (y>2500)
    {bowl.src ="https://d1doqjmisr497k.cloudfront.net/-/media/mccormickforchefs2017/home/spice-story-section/2000/old-bay/spice-bowl-oldbay.ashx?vd=20170920T183850Z&hash=08DC67E0C932B6AFC05506F3B42DF4EBF9DC18A4"}



 /*side bars*/
 prep.style.top=200 + y + "px";
 ingredients.style.top=200 + y + "px";


/*avocado*/
oneavocado.style.top=700 + y* 0.3 +"px";
twoavocado.style.top=700 + y * 0.4 + "px";
threeavocado.style.top=700 + y * 0.5  + "px";
 if (y > 1000)
{avocado.src ="http://www.shockinglydelicious.com/wp-content/uploads/2011/03/Avocado-flesh-in-a-bowl.jpg";
	avocado.style.transform="translate(0,0)";}
if (y<1000){avocado.src="http://www.pngpix.com/wp-content/uploads/2016/03/Avocado-PNG-Image-500x417.png";}

/*lime*/
lime.style.top=1700+ y * 0.2 + "px";

/*spices*/
salt.style.top=2100 + y* 0.3 +"px";
cumin.style.top=2000 + y * 0.35 + "px";
cayenne.style.top=2000 + y * 0.4  + "px";











} /*end of window.onscroll*/
