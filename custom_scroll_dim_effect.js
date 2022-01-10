	window.addEventListener('load', ()=>{
		let lastScrollTop = 0;
let overlay = document.querySelector('.overlay-raya')

 
window.addEventListener("scroll", function(){
   let st = window.pageYOffset || document.documentElement.scrollTop;

   if (st > lastScrollTop){
 
overlay.style.backgroundColor=`rgba(0,0,0,${0.3+Number(st/10000)})`;
	  
	   if (st >=1000) {
		   overlay.style.backgroundColor=`rgba(0,0,0,${0.3+Number(st/10000)*1.5})`;
		
	   }
 
 
   } else {
 if (st <=1000) {
   overlay.style.backgroundColor=`rgba(0,0,0,${st/10000 +0.3})`;
	    
 }
 	   if (st >1000) {
		   overlay.style.backgroundColor=`rgba(0,0,0,${0.3+Number(st/10000)*1.5})`;
		
	   }
 
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
	})
 
