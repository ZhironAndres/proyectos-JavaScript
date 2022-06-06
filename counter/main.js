 const number=document.getElementById("number")
 const decrease=document.getElementById("decrease")
 const increase=document.getElementById("increase")
 const reset=document.getElementById("reset")
 

 decrease.addEventListener("click", decrementar)
 increase.addEventListener("click", incrementar)
reset.addEventListener("click", resetear)
 
 function incrementar(e){
  e.preventDefault()
  
  return number.textContent++
 }

 
 function decrementar(e){
    e.preventDefault()
  
    return number.textContent-- 
   
   }
 
   function resetear(e){
     e.preventDefault() 
    return number.textContent= 0 
   }
 
 