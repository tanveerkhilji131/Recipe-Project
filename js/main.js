 const links = document.querySelector('.recipe-heading');
let btn = document.querySelector(".slider");
let fas = document.querySelector(".fas");

btn.addEventListener("click",()=>{
  links.classList.toggle("btnshow");
  fas.classList.remove("fa-align-justify");
  fas.classList.toggle("fa-xmark")
  fas.classList.add("fa-align-justify");

  
})