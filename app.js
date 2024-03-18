let elNav = document.querySelector(".header_container-nav");
let elBtn1 = document.querySelector(".btn1");
let elBtn2 = document.querySelector(".btn2");
let elBtn = document.querySelector(".zafar");

elBtn.addEventListener("click" , () => {
    
    elNav.classList.toggle("d-none")
    
})

elBtn.addEventListener("click" , () => {
    
    elBtn1.classList.toggle("d-none")
    
})

elBtn.addEventListener("click" , () => {
    
    elBtn2.classList.toggle("d-none")
    
})