const btn = document.querySelector("#btn")
btn.addEventListener("click",()=>{
   if(btn.innerHTML ==="dark"){
    btn.innerHTML="light"
    btn.style.backgroundColor="white"
    btn.style.color="black"
    document.body.style.backgroundColor="black"
   
   }else{
    btn.innerHTML="dark"
    btn.style.backgroundColor="black"
    btn.style.color="white"
      document.body.style.backgroundColor="white"
   }
    
})