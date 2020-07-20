
let password=()=>{
 let screen=window.document.querySelector('div#screen'); 
 let circles;
 for(var i=0;i<=9;i++){
    circles=window.document.createElement('div')
   circles.setAttribute('id','circlesPassword')
   let txtCircle=window.document.createTextNode(i)

   circles.appendChild(txtCircle)
   screen.appendChild(circles)

   window.document.querySelector('div#bottom').onclick=false; 
   window.document.querySelector('div#screen').onclick=false;

  
 }
   
}

