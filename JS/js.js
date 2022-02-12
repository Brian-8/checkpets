let btn = document.querySelector(".btn-show");
let menu =document.querySelector(".links-container")
btn.addEventListener("click",myFunction);
function myFunction(){

 if(menu.className === "links-container"){
     menu.className += " change";
 }else{
    menu.className = "links-container"
 }

}