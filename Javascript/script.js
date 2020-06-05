//tester()


function toggle() {
    var element = document.getElementById('nav') ;
    element.classList.toggle('display') ;
    element.style.transition = "all 1s " ;
    
}

var myIndex = 1 ;
carousel()

function carousel(){ 
var i = 0 ;
var x = document.getElementsByClassName('slides') ;
var y = document.getElementsByClassName('caption') ;

for (var i = 0; x.length > i; i++) {
   x[i].style.opacity = "0" ;
   y[i].style.transition = "all 0.7s ease-in-out" ;
  y[i].style.transform = "translateY(30px)";
   y[i].style.opacity = "0" ;
}
myIndex++;

if (myIndex > x.length) {myIndex = 1}   
x[myIndex-1].style.opacity = "1"; 
x[myIndex-1].style.transition = "all 0.7s ease-in-out" ;
 y[myIndex-1].style.opacity = "1"; 
 y[myIndex-1].style.transform = "translateY(-30px)";
 y[myIndex-1].style.transition = "all 0.7s ease-in-out" 

setTimeout(carousel, 3000)

}


var about_index = 1 ;
about_slideshow()

function about_slideshow(){ 
var i = 0 ;
var x = document.getElementsByClassName('about_slides') ;
var y = document.getElementsByClassName('about_slides_2') ;


for (var i = 0; x.length > i; i++) {
   x[i].style.opacity = "0" ;
   y[i].style.opacity = "0" ;
 
}
about_index++;

if (about_index> x.length) {about_index = 1}   
x[about_index-1].style.opacity = "1";
x[about_index-1].style.transition = " all 1s";
y[about_index-1].style.opacity = "1";
y[about_index-1].style.transition = " all 1s";
 

setTimeout(about_slideshow, 3000)

}




function tester()  {
 var x = document.getElementById("").parentElement.nodeName;
console.log(x)


}









