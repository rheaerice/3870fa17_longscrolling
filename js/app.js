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
var onion = document.getElementById("onion");
var pepper = document.getElementById("pepper");
var onetomato = document.getElementById("onetomato");
var twotomato = document.getElementById("twotomato");
var cilantro = document.getElementById("cilantro");
var garlic = document.getElementById("garlic");
var finish = document.getElementById("finish")


window.onscroll=function(){
var y = window.pageYOffset;
console.log(y);

/*bowl- include the change of different images as new ingredients get added*/
bowl.style.top=200 + y + "px";

/*avocado bowl*/
  if (y<1100)
    {bowl.src ="http://www.churchill1795.com/sites/default/files/imagecache/product_page_main_image/products/second/APR%20AP8%201_2.png"}
  if (y>1100)
    { oneavocado.style.display="none";
      bowl.src ="http://www.carvasos.com/sites/default/files/avocado%20mash.png"}

/*lime bowl*/
  if (y>1700)
    {bowl.src ="http://www.quiirk.co.uk/wp-content/uploads/2014/07/duck-egg-blue-bowl-3-limited-edition-ceramics.png"}
/*spices bowl*/
  if (y>2500)
    {bowl.src ="https://d1doqjmisr497k.cloudfront.net/-/media/mccormickforchefs2017/home/spice-story-section/2000/old-bay/spice-bowl-oldbay.ashx?vd=20170920T183850Z&hash=08DC67E0C932B6AFC05506F3B42DF4EBF9DC18A4"}
/*onion bowl */
if (y>3700)
  {bowl.src ="https://holesomebagels.com/media/catalog/product/cache/2/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/g/r/greek-salad_1_1_2.png"}
/*pepper bowl*/
if (y>4600)
  {bowl.src ="https://thumb1.shutterstock.com/display_pic_with_logo/154264/250127080/stock-photo-sliced-jalapeno-peppers-in-bowl-250127080.jpg"}
/*tomatoebowl */
if (y>5800)
  {bowl.src ="https://www.anchorvans.co.uk/wordpress/wp-content/uploads/2014/06/ketchup-bowl.jpg"}
/*cilantrobowl*/
if (y>6800)
  {bowl.src ="https://3.bp.blogspot.com/-ailNzze5_iM/Ti2GwOR5JjI/AAAAAAAABI8/5elVX8p2bb4/s640/cilantro.png"}
/*garlicbowl*/
if (y>7800)
  {bowl.src ="https://res.cloudinary.com/hellofresh/image/upload/dpr_auto,f_auto,fl_lossy,q_80,w_640/v1/hellofresh_s3/image/554affd44dab71c8058b456b.png"}

/*endbowl*/
if (y>8800)
  {bowl.src ="https://i.pinimg.com/originals/96/70/5f/96705f9c6d894ec6e929c6aee51e98cf.png"}


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

/*onion*/
onion.style.top=3300+ y * 0.2 + "px";

/*pepper*/
pepper.style.top=4000+ y * 0.2 + "px";

/*tomatoes*/
onetomato.style.top=4700+ y * 0.2 + "px";
twotomato.style.top=4700+ y * 0.25 + "px";

/*cilantro */
cilantro.style.top=5100+ y * 0.3 + "px";

/*garlic*/
garlic.style.top=6000+ y * 0.27 + "px";







} /*end of window.onscroll*/
