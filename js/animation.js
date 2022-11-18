// All class decleration section

let returnbtn=document.querySelector(".return-button-to-home")
let upArrow=document.querySelector(".fa-solid")

let aboutinfodescription=document.querySelector(".about-info-description")

// Variable decleration section 

let ScrollY 



// return button animation ------------------

window.addEventListener("scroll",(e)=>{
   ScrollY= e.path[1].scrollY
   
 if(ScrollY > 180)
   {
    returnbtn.setAttribute("style","  animation: return .2s ease-in; border-radius: 50%; transform: translateY(65rem) translateX(2rem) ; background-color: white;")
    upArrow.setAttribute("style","display:inline-block;")
   }

   else if(ScrollY<180){
    returnbtn.setAttribute("style","  animation: retur 1s infinite; ")
    upArrow.setAttribute("style","display:none;")
   }
   
})

