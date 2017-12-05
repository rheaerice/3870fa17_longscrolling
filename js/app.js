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

var zoneavocado = document.getElementById("zoneavocado")
var zonelime = document.getElementById("zonelime")
var zonespices = document.getElementById("zonespices")
var zoneonion = document.getElementById("zoneonion")
var zonepepper = document.getElementById("zonepepper")
var zonetomato = document.getElementById("zonetomato")
var zonecilantro = document.getElementById("zonecilantro")
var zonegarlic = document.getElementById("zonegarlic")



window.onscroll=function(){
var y = window.pageYOffset;
console.log(y);



/*bowl- include the change of different images as new ingredients get added*/
bowl.style.top=200 + y + "px";

/*avocado bowl*/
  if (y<1100)
    {bowl.src ="images/bowl-01.png";
    zoneavocado.style.animation="ingredientlist 4s running";

  }

  if (y>1100)
    {bowl.src ="images/bowl-02.png";
    zonelime.style.animation="ingredientlist 4s running";
    // oneavocado.style.animation="appear 4s running";

  }


/*lime bowl*/
  if (y>1700)
    {bowl.src ="images/bowl-03.png";
    zonespices.style.animation="ingredientlist 4s running";

  }

/*spices bowl*/
  if (y>2500)
    {bowl.src ="images/bowl-04.png";
    zoneonion.style.animation="ingredientlist 4s running";

  }
/*onion bowl */
if (y>3700)
  {bowl.src ="images/bowl-05.png";
  zonepepper.style.animation="ingredientlist 4s running";
}
/*pepper bowl*/
if (y>4600)
  {bowl.src ="images/bowl-06.png";
  zonetomato.style.animation="ingredientlist 4s running";
}
/*tomatoebowl */
if (y>5800)
  {bowl.src ="images/bowl-07.png";
  zonecilantro.style.animation="ingredientlist 4s running";

}
/*cilantrobowl*/
if (y>6800)
  {bowl.src ="images/bowl-08.png"
  zonegarlic.style.animation="ingredientlist 4s running";

}
/*garlicbowl*/
if (y>7800)
  {bowl.src ="images/bowl-09.png"}

/*endbowl*/
if (y>8800)
  {bowl.src ="images/bowl-10.png"}


 /*side bars*/
 prep.style.top=200 + y + "px";
 ingredients.style.top=200 + y + "px";





/*avocado*/
oneavocado.style.top=700 + y* 0.3 +"px";
twoavocado.style.top=700 + y * 0.4 + "px";
threeavocado.style.top=700 + y * 0.5  + "px";
zoneavocado.style.top= 50 + y;


//  if (y > 1000)
// {avocado.style.transform="translate(0,0)";}
// if (y<1000){avocado.src="http://www.pngpix.com/wp-content/uploads/2016/03/Avocado-PNG-Image-500x417.png";}

/*lime*/
lime.style.top=1700+ y * 0.2 + "px";
zonelime.style.top= 83 + y;

/*spices*/
salt.style.top=2100 + y* 0.3 +"px";
cumin.style.top=2000 + y * 0.35 + "px";
cayenne.style.top=2000 + y * 0.4  + "px";
zonespices.style.top= 110 + y;

/*onion*/
onion.style.top=3300+ y * 0.2 + "px";
zoneonion.style.top= 145 + y;

/*pepper*/
pepper.style.top=4000+ y * 0.2 + "px";
zonepepper.style.top= 170 + y;

/*tomatoes*/
onetomato.style.top=4700+ y * 0.2 + "px";
twotomato.style.top=4700+ y * 0.25 + "px";
zonetomato.style.top= 205 + y;

/*cilantro */
cilantro.style.top=5100+ y * 0.3 + "px";
zonecilantro.style.top= 240 + y;

/*garlic*/
garlic.style.top=6000+ y * 0.27 + "px";
zonegarlic.style.top= 260 + y;







} /*end of window.onscroll*/
