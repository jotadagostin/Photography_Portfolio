// All class decleration section

let workimgcontainer=document.querySelector(".work-img-container")
let worknavli=document.querySelectorAll(".work-nav-li")

// Variable decleration section

let workitems ,worksectionimg 



function folder(folderName){
for(let x=1 ;x<=10;x++){
 
    workitems=document.createElement("div")
    workitems.className=`item${x} work-items`
    workimgcontainer.appendChild(workitems)

    worksectionimg=document.createElement("img")
    workitems.appendChild(worksectionimg)
    worksectionimg.src=`image/${folderName}/${x}.jpg`
}

}

    folder(folderName="wildlife")

    
        worknavli[0].addEventListener("click",(e)=>{
                folder(folderName="wildlife")
                worknavli[0].className="work-nav-li selected-nav-choice"
                worknavli[1].className="work-nav-li "
                worknavli[2].className="work-nav-li "
        })
        worknavli[1].addEventListener("click",(e)=>{
                folder(folderName="products")
                worknavli[0].className="work-nav-li "
                worknavli[1].className="work-nav-li selected-nav-choice"
                worknavli[2].className="work-nav-li "
        })
        worknavli[2].addEventListener("click",(e)=>{
                folder(folderName="macro")
                worknavli[0].className="work-nav-li "
                worknavli[1].className="work-nav-li "
                worknavli[2].className="work-nav-li selected-nav-choice"
        })


        