 var width=100;
 var difference=2;
 var interveralID =0;
 //document.getElementById("img1").style.width=width;
 
 function increase()
 {
 clearInterval(interveralID);
 interveralID=setInterval(expand,10);
 }
 function decrease()
 {
 clearInterval(interveralID);
 interveralID=setInterval(shrink,10);
 }
 function expand()
 {
 if(width<200)
 {
 width = width+difference;
 document.getElementById("imgCON6.png").style.width=width;
 console.log(width);
 }
 else
 {
 clearInterval(interveralID);
 }
 
 }
 function shrink()
 {
 if(width>100)
 {
 width = width-difference;
 document.getElementById("img1").style.width=width;
 console.log(width);
 }
 else
 {
 clearInterval(interveralID);
 }
 
 }
CON6.png