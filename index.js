toggle_btn = document.querySelector(".toggle-menu");
flex = document.querySelector(".nav-menu");

toggle_btn.addEventListener("click",()=>{
    flex.style.transform = translate("40px");
    flex.classList.toggle("nav-menu2");
})